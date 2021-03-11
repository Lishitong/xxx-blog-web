<!--
 * @Author: lidalan
 * @Date: 2021-03-08 16:41:17
 * @LastEditors: lidalan
 * @LastEditTime: 2021-03-11 16:35:39
 * @Description: Home
 * @FilePath: \xxx-blog-web\src\view\Home\index.vue
-->
<template>
  <div class="header-wrapper">
    <HeaderTemplate />
  </div>
  <div
    class="main-wrapper"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @wheel="handleMouseWheel"
  >
    <div class="test"></div>

    <div class="lst-scrollbar-bar">
      <div class="lst-scrollbar-thumb"></div>
    </div>
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
    let prevTimeStemp = null; // 鼠标滚轮上次时间戳
    let direction = false; // 方向： false:Up true:Down
    const handleMouseEnter = (e) => {
      console.log("MouseEnter", e);
    };

    const handleMouseLeave = (e) => {
      console.log("MouseLeave", e);
    };

    const handleMouseWheel = (e) => {
      console.log("MouseWheel", e);
      const eventDelta = e.deltaY;
      console.log(eventDelta);
    };

    return {
      handleMouseEnter,
      handleMouseLeave,
      handleMouseWheel,
    };
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
  padding: 10px;
  position: relative;
  .test {
    min-height: 500px;
    width: 100%;
    background-color: red;
    border-radius: 5px;
  }
}
</style>