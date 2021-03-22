<!--
 * @Author: lidalan
 * @Date: 2021-03-22 15:44:26
 * @LastEditors: lidalan
 * @LastEditTime: 2021-03-22 15:59:04
 * @Description: 
 * @FilePath: \xxx-blog-web\src\view\Not\index.vue
-->
<template>Not Found : {{ path }}</template>

<script>
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const path = route.path;
    return {
      path,
    };
  },
};
</script>

<style>
</style>