<!--
 * @Author: lidalan
 * @Date: 2021-05-07 14:51:32
 * @LastEditors: lidalan
 * @LastEditTime: 2021-05-07 15:03:34
 * @Description: 
 * @FilePath: \xxx-blog-web\src\view\Article\detials.vue
-->
<template>
  <div>
    {{ id }}
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const id = computed(() => route.params.id);
    return {
      id,
    };
  },
};
</script>

<style>
</style>