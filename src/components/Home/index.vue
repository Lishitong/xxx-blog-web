<!--
 * @Author: lidalan
 * @Date: 2021-03-08 16:41:17
 * @LastEditors: lidalan
 * @LastEditTime: 2021-03-08 17:19:04
 * @Description: Home
 * @FilePath: \xxx-blog-web\src\components\Home\index.vue
-->
<template>
  {{ home }}
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let home = ref("home");

    return {
      home,
    };
  },
};
</script>