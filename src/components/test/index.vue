<!--
 * @Author: lidalan
 * @Date: 2021-03-08 16:11:14
 * @LastEditors: lidalan
 * @LastEditTime: 2021-03-08 16:39:40
 * @Description: Test
 * @FilePath: \xxx-blog-web\src\components\test\index.vue
-->

<template>
  <div>
    {{ test_string }}
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "test",
  setup() {
    const test_string = ref("1231");
    return {
      test_string,
    };
  },
};
</script>

<style scoped lang="less">
div {
  color: red;
}
</style>