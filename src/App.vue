<template>
  <router-view></router-view>
</template>

<style>
html,
body,
#app {
  height: 100%;
}
body {
  padding-top: 60px;
  height: calc(100% - 60px);
  background-color: #fff;
}

.xx-container {
  width: 1220px;
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
</style>