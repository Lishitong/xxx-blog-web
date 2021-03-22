<!--
 * @Author: lidalan
 * @Date: 2021-03-22 10:58:15
 * @LastEditors: lidalan
 * @LastEditTime: 2021-03-22 15:39:00
 * @Description: 
 * @FilePath: \xxx-blog-web\src\components\Menus\index.vue
-->
<template>
  <el-menu mode="horizontal" router :default-active="activeRouter">
    <el-menu-item v-for="item in Menus" :key="item.path" :index="item.path">
      {{ item.name }}
    </el-menu-item>
  </el-menu>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
// import { useRoute } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const activeRouter = computed(() => store.state.activeRouter);

    // const route = useRoute();
    // const activeRouter = computed(() => route.path);
    const Menus = ref([
      {
        name: "首页",
        path: "/",
      },
      {
        name: "代码",
        path: "/code",
      },
      {
        name: "日常",
        path: "/daily",
      },
    ]);
    return {
      Menus,
      activeRouter,
    };
  },
};
</script>

<style>
</style>