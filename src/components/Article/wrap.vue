<!--
 * @Author: lidalan
 * @Date: 2021-05-06 16:57:16
 * @LastEditors: lidalan
 * @LastEditTime: 2021-05-08 08:43:18
 * @Description: 
 * @FilePath: \xxx-blog-web\src\components\Common\warp.vue
-->

<template>
  <div class="article-warp" v-if="data.childLength">
    <div>
      <h4>{{ data.year || data.title }}</h4>
      <p class="more" v-if="data.isMore" @click="handleGoMore(data.morePath)">
        更多
      </p>
    </div>
    <div
      class="warp-content"
      v-for="item in data.childNodes"
      :key="item.id"
      @click="handleGoDetails(item.path)"
    >
      <div class="content-time">
        <p>{{ item.time }}</p>
      </div>
      <div class="content-title">
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    const handleGoDetails = (path) => {
      if (!path) return;
      router.push(path);
    };
    const handleGoMore = (path) => {
      if (!path) return;
      router.push(path);
    };

    return {
      handleGoDetails,
      handleGoMore,
    };
  },
};
</script>

<style lang="less" scoped>
h4 {
  font-size: 24px;
  padding-bottom: 10px;
  border-bottom: 2px solid;
  margin: 5px 0;
  user-select: none;
}

.article-warp {
  margin-bottom: 20px;

  .more {
    float: right;
    margin-top: -40px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }
}

.warp-content {
  padding: 20px;
  font-size: 18px;
  display: flex;

  .content-time {
    margin-right: 20px;
    user-select: none;
    > p {
      color: #858b93;
    }
  }

  &:hover {
    background: #f1f4f8;
    cursor: pointer;
    border-radius: 5px;
  }
}
</style>