<!--
 * @Author: lidalan
 * @Date: 2021-03-08 16:41:17
 * @LastEditors: lidalan
 * @LastEditTime: 2021-05-10 09:54:34
 * @Description: Home
 * @FilePath: \xxx-blog-web\src\view\Home\index.vue
-->
<template>
  <div class="home-top">
    <div v-for="item in Square" :key="item.id" class="home-square">
      <SquareTemplate :item="item" />
    </div>
    <div class="home-square" v-if="Square.length >= 8">
      <SquareTemplate
        :item="{
          id: new Date().getTime(),
          name: '更多',
          imgUrl: testImg,
          path: '/code',
        }"
      />
    </div>
  </div>
  <el-card class="home-bottom" shadow="never">
    <div class="bottom-content">
      <ArticleWarpTemplate
        v-for="item in articleWarp"
        :key="item.id"
        :data="item"
      />
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
    const articleWarp = [];
    let i = 0;
    while (i < 10) {
      test.push({
        id: i,
        name: "test" + i,
        imgUrl: testImg,
        path: "/code/test" + i,
      });
      let j = 0;
      let childNodes = [];
      let random = Math.floor(Math.random() * 10);
      while (j < random) {
        let id = Math.floor(Math.random() * 10000);
        childNodes.push({
          id,
          time: "05." + (10 + j),
          title: "大幅减少了关键时刻vds" + Math.random(),
          path: "/article/" + id,
        });
        j++;
      }
      articleWarp.push({
        id: i,
        year: 2021 - i,
        childNodes,
        childLength: childNodes.length,
      });
      i++;
    }
    let Square = null;
    if (test.length >= 10) {
      Square = ref(test.slice(0, 8));
    } else {
      Square = ref(test);
    }
    return { Square, testImg, articleWarp };
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
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
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
</style>