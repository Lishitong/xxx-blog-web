<!--
 * @Author: lidalan
 * @Date: 2021-03-09 15:34:40
 * @LastEditors: lidalan
 * @LastEditTime: 2021-03-22 10:09:56
 * @Description: Footer
 * @FilePath: \xxx-blog-web\src\components\Footer\index.vue
-->

<template>
  <div class="xx-container">
    <div class="xx-footer-box">
      <p class="xx-footer-beian">
        <a
          href="http://beian.miit.gov.cn/publish/query/indexFirst.action"
          target="_blank"
          >网站备案/许可证号: 豫ICP备20021192号-1</a
        >
      </p>
      <!-- <p>
        <a
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode="
          target="_blank"
        >
          <img
            src="https://imgservices-1252317822.image.myqcloud.com/image/20191217/8qo8i2t7tg.png"
            style="width: 14px; height: 14px; vertical-align: -20%"
          />
          <b>豫公网安备:</b>
        </a>
      </p> -->
    </div>
    <div class="xx-footer-share">
      <a
        :href="weixin"
        class="icon-share icon-share-weixin"
        title="微信公众号"
        @click.prevent="handleWXShare"
        >微信公众号</a
      >
    </div>
  </div>
  <div class="xx-alert-weixin" @click="handleWXShare" v-show="alertWX">
    <div class="xx-alert-weixin-box">
      <img :src="weixin" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let alertWX = ref(false);
    let weixin = ref("/src/assets/images/weixin430.jpg");
    let handleWXShare = () => {
      alertWX.value = !alertWX.value;
    };
    return {
      weixin,
      alertWX,
      handleWXShare,
    };
  },
};
</script>

<style lang="less" scoped>
.xx-footer-box {
  position: absolute;
  left: 0;

  .xx-footer-beian {
    font-weight: 400;
    color: #3f7ee0;
  }
}

.xx-footer-share {
  position: absolute;
  right: 0;
  margin-top: 2px;
  white-space: nowrap;
  word-spacing: 15px;
}

.xx-alert-weixin {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10000;
  height: 100%;
  width: 100%;
  background-color: rgba(25, 28, 34, 0.88);

  .xx-alert-weixin-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    > img {
      width: 430px;
      height: 430px;
    }
  }
}
</style>
