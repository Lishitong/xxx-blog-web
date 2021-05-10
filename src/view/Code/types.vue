<!--
 * @Author: lidalan
 * @Date: 2021-05-07 15:11:20
 * @LastEditors: lidalan
 * @LastEditTime: 2021-05-10 16:50:45
 * @Description: code类型
 * @FilePath: \xxx-blog-web\src\view\Code\types.vue
-->


<template>
  <div>{{ type }}</div>
  <CodeWarpTemplate v-for="item in articleWarp" :key="item.id" :data="item" />
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { CodeWarpTemplate } from "components/Code";
export default {
  components: { CodeWarpTemplate },
  setup() {
    const route = useRoute();
    const type = computed(() => route.params.type);
    console.log(type);
    const articleWarp = [];
    let j = 0;
    let childNodes = [];
    let random = Math.floor(Math.random() * 10);
    while (j < random) {
      let id = Math.floor(Math.random() * 10000);
      childNodes.push({
        id,
        time: "05." + (10 + j),
        title: "大幅减少了关键时刻vds" + Math.random(),
        path: `/${type.value}/${id}`,
      });
      j++;
    }
    articleWarp.push({
      id: Math.floor(Math.random() * 10000),
      title:'',
      childNodes,
      childLength: childNodes.length,
    });

    return {
      type,
      articleWarp,
    };
  },
};
</script>

<style>
</style>