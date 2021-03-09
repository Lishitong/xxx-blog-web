<!--
 * @Author: lidalan
 * @Date: 2021-03-08 16:41:17
 * @LastEditors: lidalan
 * @LastEditTime: 2021-03-09 16:53:32
 * @Description: Home
 * @FilePath: \xxx-blog-web\src\view\Home\index.vue
-->
<template>
  <div class="header-wrapper">
    <HeaderTemplate />
  </div>
  <div class="main-wrapper scroll-wrap">
    <div class="test"></div>
  </div>
  <div class="footer-wrapper">
    <FooterTemplate />
  </div>
</template>

<script>
import HeaderTemplate from "components/Header/index.vue";
import FooterTemplate from "components/Footer/index.vue";
export default {
  components: {
    HeaderTemplate,
    FooterTemplate,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.header-wrapper {
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}

.main-wrapper {
  .test {
    min-height: 500px;
  }
}
</style>