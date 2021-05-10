<!--
 * @Author: lidalan
 * @Date: 2021-03-22 16:36:45
 * @LastEditors: lidalan
 * @LastEditTime: 2021-05-10 17:09:17
 * @Description: 
 * @FilePath: \xxx-blog-web\src\components\Search\index.vue
-->

<template>
  <button class="xx-search-button" @click="handleSearch">
    <span>Search</span>
  </button>
  <div class="xx-header-search" v-show="search" @click.self="handleSearch">
    <div class="xx-search-box">
      <div class="xx-search">
        <i class="el-icon-search"></i>
        <input
          type="text"
          placeholder="请输入搜索内容..."
          v-model="searchContent"
        />
      </div>
      <div class="xx-search-dropdown">
        <div class="xx-search-start" v-if="!searchResult.length">
          <p class="xx-search-help">No recent searches</p>
        </div>
        <div v-else class="xx-search-container">
          <SearchContainerTemplate
            v-for="(item, index) in searchResult"
            :key="index"
            :source="item"
            :handleSearch="handleSearch"
          />
        </div>
      </div>
      <div class="xx-search-footer">Tooltip: Click the blank area to close</div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import SearchContainerTemplate from "components/SearchContainer/index.vue";
export default {
  components: {
    SearchContainerTemplate,
  },
  setup() {
    const store = useStore();
    let searchResult = ref([]);
    let search = ref(false);
    let searchContent = ref("");
    let handleSearch = () => {
      search.value = !search.value;
      if (!search.value) searchContent.value = "";
      store.commit("setOverflowHidden", search.value);
    };

    return {
      search,
      searchContent,
      searchResult,
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

  .xx-search-box {
    width: 560px;
    min-height: 205px;
    max-height: 600px;
    background-color: #f5f6f7;
    border-radius: 6px;
    margin: 60px auto 0;
    padding: 12px 12px 0 12px;

    .xx-search {
      padding: 0 12px;
      border: 2px solid #373940;
      border-radius: 6px;
      font-size: 19px;
      background-color: #fff;
      > i {
        font-size: 24px;
        color: #373940;
      }
      > input {
        outline: none;
        border: none;
        height: 56px;
        width: 470px;
        padding-left: 8px;
      }
    }

    .xx-search-dropdown {
      .xx-search-start {
        font-size: 0.9em;
        margin: 0 auto;
        padding: 36px 0;
        text-align: center;
        width: 80%;
      }

      .xx-search-help {
        font-size: 0.9em;
        margin: 0;
        user-select: none;
        color: #969faf;
      }
    }
  }
}

.xx-search-button {
  background: #f2f2f2;
  border: 1px solid transparent;
  border-radius: 40px;
  color: #90a4b7;
  font-weight: 500;
  height: 36px;
  padding: 0 8px;
  user-select: none;
  outline: none;
  width: 90px;
  cursor: pointer;
  position: relative;

  > span {
    line-height: 20px;
    position: absolute;
    top: 8px;
    right: 10px;
    font-size: 14px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    background: url(/src/assets/images/search.svg) no-repeat center;
    background-size: contain;
    width: 26px;
    height: 26px;
  }

  &:hover {
    border: 1px solid #373940;
  }
}

.xx-search-container {
  max-height: 488px;
  overflow-y: auto;
  overflow-x: hidden;
}

.xx-search-footer {
  color: #969faf;
  text-align: right;
}
</style>