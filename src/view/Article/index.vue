<!--
 * @Author: lidalan
 * @Date: 2021-05-07 14:49:28
 * @LastEditors: lidalan
 * @LastEditTime: 2021-05-10 10:04:25
 * @Description: 文章
 * @FilePath: \xxx-blog-web\src\view\Article\index.vue
-->


<template>
  <ArticleWarpTemplate
    v-for="item in articleWarp"
    :key="item.id"
    :data="item"
  />
</template>

<script>
import { ArticleWarpTemplate } from "components/Article";

export default {
  components: { ArticleWarpTemplate },
  setup() {
    const articleWarp = [];
    let i = 0;
    while (i < 10) {
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

    return { articleWarp };
  },
};
</script>

<style>
</style>