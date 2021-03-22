<!--
 * @Author: lidalan
 * @Date: 2021-03-22 16:36:45
 * @LastEditors: lidalan
 * @LastEditTime: 2021-03-22 17:19:13
 * @Description: 
 * @FilePath: \xxx-blog-web\src\components\Search\index.vue
-->

<template>
  <button class="xx-serach-button" @click="handleSearch">Search</button>
  <div class="xx-header-search" v-show="search" @click.self="handleSearch">
    <div class="xx-search">432423</div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let search = ref(false);
    let handleSearch = () => {
      search.value = !search.value;
    };

    return {
      search,
      handleSearch,
    };
  },
};
</script>

<style lang="less" scoped>
.xx-header-search {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 10001;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(25, 28, 34, 0.88);

  .xx-search {
    width: 560px;
    min-height: 205px;
    max-height: 600px;
    background-color: #fff;
    border-radius: 6px;
    margin: 60px auto 0;
    padding: 12px 12px 0 12px;

    .xx-search-button {
      background: #f2f2f2;
      border: 0;
      border-radius: 40px;
      color: #90a4b7;
      font-weight: 500;
      height: 36px;
      padding: 0 8px;
      user-select: none;
    }
  }
}
</style>