<!--
 * @Author: lidalan
 * @Date: 2021-03-08 16:41:17
 * @LastEditors: lidalan
 * @LastEditTime: 2021-03-22 10:32:22
 * @Description: Home
 * @FilePath: \xxx-blog-web\src\view\Home\index.vue
-->
<template>
  <div class="header-wrapper">
    <HeaderTemplate />
  </div>
  <div class="main-wrapper">
    <MainTemplate />
  </div>
  <div class="footer-wrapper">
    <FooterTemplate />
  </div>
</template>

<script>
import HeaderTemplate from "components/Header/index.vue";
import FooterTemplate from "components/Footer/index.vue";
import MainTemplate from "components/Main/index.vue";
export default {
  components: {
    HeaderTemplate,
    MainTemplate,
    FooterTemplate,
  },
  setup() {},
};
</script>

<style lang="less" scoped>
.header-wrapper {
  width: 100%;
  height: 60px;
  line-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  box-shadow: 0 1px 5px rgba(0,0,0,.2);
}

.main-wrapper {
  width: 100%;
  min-height: calc(100% - 112px);
}

.footer-wrapper {
  width: 100%;
  background-color: #191e22;
  color: #fff;
  padding: 28px 0;
  height: 56px;
  line-height: 20px;
}
</style>