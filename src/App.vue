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
import { useStore } from "vuex";
import { computed, watch, inject } from "vue";
export default {
  components: {
    HeaderTemplate,
    MainTemplate,
    FooterTemplate,
  },
  setup() {
    const store = useStore();
    const { addClass, removeClass } = inject("className");
    let overflowHidden = computed(() => store.state.overflowHidden);

    watch(overflowHidden, (n) => {
      if (n) {
        addClass(document.body, "hidden");
      } else {
        removeClass(document.body, "hidden");
      }
    });
    return {};
  },
};
</script>
<style lang="less">
html,
body,
#app {
  height: 100%;
}
body {
  padding-top: 60px;
  height: calc(100% - 60px);
  background-color: #fff;
  font-size: 12px;

  &.hidden {
    overflow: hidden;
  }
}

.xx-container {
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

.icon-share {
  display: inline-block;
  width: 44px;
  height: 44px;
  background: url(assets/images/icons-share-min.png) no-repeat;
  background-size: 44px 90px;
  font-size: 0;
  line-height: 0;
  color: transparent;
  vertical-align: middle;
}

.icon-share-weixin {
  background-position: 0 -45px;
  height: 45px;
}

.header-wrapper {
  width: 100%;
  height: 60px;
  line-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
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

a:hover,
a:active,
a:link,
a:visited {
  color: inherit;
}
</style>