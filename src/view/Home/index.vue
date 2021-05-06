<!--
 * @Author: lidalan
 * @Date: 2021-03-08 16:41:17
 * @LastEditors: lidalan
 * @LastEditTime: 2021-05-06 17:15:55
 * @Description: Home
 * @FilePath: \xxx-blog-web\src\view\Home\index.vue
-->
<template>
  <div class="home-top">
    <div v-for="item in Square" :key="item.id" class="home-square">
      <SquareTemplate :item="item" />
    </div>
    <div class="home-square" v-if="Square.length >= 9">
      <SquareTemplate
        :item="{ id: new Date().getTime(), name: '更多', imgUrl: testImg }"
      />
    </div>
  </div>
  <el-card class="home-bottom" shadow="never">
    <div class="bottom-content">
      <ArticleWarpTemplate />
    </div>
  </el-card>
</template>

<script>
import SquareTemplate from "components/Square/index.vue";
import { ArticleWarpTemplate } from "components/Article";
import { ref } from "vue";
import testImg from "assets/images/index/html.jpg";
export default {
  components: { SquareTemplate, ArticleWarpTemplate },
  setup() {
    const test = [];
    let i = 0;
    while (i < 10) {
      test.push({
        id: i,
        name: "test" + i,
        imgUrl: testImg,
      });
      i++;
    }
    let Square = null;
    if (test.length >= 10) {
      Square = ref(test.slice(0, 9));
    } else {
      Square = ref(test);
    }
    return { Square, testImg };
  },
};
</script>

<style lang="less" scoped>
.home-top {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20px;

  .home-square {
    width: 120px;
    height: 120px;
    text-align: center;
    line-height: 120px;
    background: black;
    border-radius: 5px;
    margin-bottom: 10px;
    transition: all 0.3s ease-out;
    color: #fff;
    font-size: 20px;
    user-select: none;

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
}
.home-bottom {
  .bottom-content {
    height: 200px;
  }
}
</style>