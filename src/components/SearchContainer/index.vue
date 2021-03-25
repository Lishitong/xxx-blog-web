<!--
 * @Author: lidalan
 * @Date: 2021-03-25 08:29:21
 * @LastEditors: lidalan
 * @LastEditTime: 2021-03-25 10:20:00
 * @Description: 
 * @FilePath: \xxx-blog-web\src\components\SearchContainer\index.vue
-->

<template>
  <section class="hits">
    <div class="xx-search-hits-source">{{ source.content }}</div>
    <ul class="xx-search-list-box">
      <li
        class="hit"
        v-for="(item, index) in source.list"
        :key="index"
        :aria-selected="item.isSelected"
        @mouseenter.prevent="handleMouseEnter(item)"
        @mouseleave.prevent="handleMouseLeave(item)"
      >
        <a :href="item.path" @click.prevent="handleLinkTo(item.path)">
          <div class="container">
            <div class="icon">
              <i class="el-icon-document"></i>
            </div>
            <div class="content">{{ item.content }}</div>
            <div class="action">
              <i class="el-icon-mouse"></i>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  props: {
    source: {
      type: Object,
      required: true,
    },
    handleSearch: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    const handleMouseEnter = (item) => {
      item.isSelected = true;
    };
    const handleMouseLeave = (item) => {
      item.isSelected = false;
    };
    const handleLinkTo = (path) => {
      router.push(path);
      props.handleSearch();
    };
    return {
      handleMouseEnter,
      handleMouseLeave,
      handleLinkTo,
    };
  },
};
</script>

<style lang="less" scoped>
.hits {
  .xx-search-hits-source {
    font-weight: 600;
    font-size: 13px;
    line-height: 32px;
    margin: 0 -4px;
    padding: 8px 4px 0;
  }

  .xx-search-list-box {
    > li {
      border-radius: 4px;
      display: flex;
      padding-bottom: 4px;
      position: relative;

      > a {
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 1px 3px 0 #d4d9e1;
        display: block;
        padding-left: 20px;
        width: 100%;

        &:hover {
          background-color: #373940;
          color: #fff;
        }
      }
    }
  }
}

.hit {
  .container {
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 56px;
    padding: 0 12px 0 0;

    .icon {
      > i {
        font-size: 20px;
      }
    }

    .content {
      display: flex;
      flex: 1 1 auto;
      flex-direction: column;
      font-weight: 500;
      font-size: 14px;
      justify-content: center;
      margin: 0 8px;
      position: relative;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 80%;
    }

    .action {
      display: none;
      > i {
        font-size: 19px;
      }
    }
  }
  &[aria-selected="true"] .container .action {
    display: block;
  }
}
</style>