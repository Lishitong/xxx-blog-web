<!--
 * @Author: lidalan
 * @Date: 2021-03-09 15:18:19
 * @LastEditors: lidalan
 * @LastEditTime: 2021-05-07 15:07:05
 * @Description: Header
 * @FilePath: \xxx-blog-web\src\components\Header\index.vue
-->

<template>
  <header class="header">
    <div class="xx-container">
      <router-link to='/' class="xx-logo"><h1>Muz的IT生活</h1></router-link>
      <MenusTemplate class="xx-menus" />
      <div class="xx-search">
        <SearchTemplate />
      </div>
    </div>
  </header>
</template>

<script>
import MenusTemplate from "components/Menus/index.vue";
import SearchTemplate from "components/Search/index.vue";
export default {
  components: { MenusTemplate, SearchTemplate },
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 100%;
  background-color: #fff;

  .xx-logo {
    background: url(assets/images/logo.jpg) no-repeat;
    background-size: cover;
    position: absolute;
    top: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;

    > h1 {
      position: absolute;
      top: -999px;
    }
  }

  .xx-menus {
    position: absolute;
    left: 200px;
  }

  .xx-search {
    line-height: 48px;
    position: absolute;
    right: 0;
  }
}
</style>