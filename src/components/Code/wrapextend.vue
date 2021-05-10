<!--
 * @Author: lidalan
 * @Date: 2021-05-08 08:46:26
 * @LastEditors: lidalan
 * @LastEditTime: 2021-05-10 10:00:00
 * @Description: 
 * @FilePath: \xxx-blog-web\src\components\Code\wrapextend.vue
-->

<template>
  <div>
    <div>
      <h3>{{ data.type }}</h3>
      <div>{{ data.description }}</div>
    </div>
    <CodeWarpTemplate :data="data.dataVO" />
  </div>
</template>

<script>
import CodeWarpTemplate from "./wrap.vue";
export default {
  components: { CodeWarpTemplate },
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