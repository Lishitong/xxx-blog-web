<!--
 * @Author: lidalan
 * @Date: 2021-05-06 10:39:52
 * @LastEditors: lidalan
 * @LastEditTime: 2021-05-07 15:17:59
 * @Description: 
 * @FilePath: \xxx-blog-web\src\components\Square\index.vue
-->

<template>
  <div class="square-warp" @click="handleRouterPush(item.path)">
    <img :src="item.imgUrl" alt="" />
    <p>{{ item.name }}</p>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  props: {
    item: {
      type: Object,
    },
  },
  setup(props) {
    const router = useRouter();
    const handleRouterPush = (path) => {
      router.push(path);
    };
    return {
      handleRouterPush,
    };
  },
};
</script>

<style lang="less" scoped>
div {
  width: 100%;
  height: 100%;
  position: relative;
}
img {
  width: 100%;
  height: 100%;
  opacity: 0.8;
  object-fit: contain;
}
p {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>