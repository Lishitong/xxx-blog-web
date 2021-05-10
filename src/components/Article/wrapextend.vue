<!--
 * @Author: lidalan
 * @Date: 2021-05-08 08:46:26
 * @LastEditors: lidalan
 * @LastEditTime: 2021-05-10 09:53:22
 * @Description: 
 * @FilePath: \xxx-blog-web\src\components\Article\wrapextend.vue
-->

<template>
  <div>
    <div>
      <h3>{{ data.type }}</h3>
      <div>{{ data.description }}</div>
    </div>
    <ArticleWarpTemplate :data="data.dataVO" />
  </div>
</template>

<script>
import ArticleWarpTemplate from "./wrap.vue";
export default {
  components: { ArticleWarpTemplate },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  setup() {},
};
</script>

<style>
</style>