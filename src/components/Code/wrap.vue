<!--
 * @Author: lidalan
 * @Date: 2021-05-06 16:57:16
 * @LastEditors: lidalan
 * @LastEditTime: 2021-05-10 16:47:02
 * @Description: 
 * @FilePath: \xxx-blog-web\src\components\Code\wrap.vue
-->

<template>
  <div class="code-warp" v-if="data.childLength">
    <div>
      <h4>{{ data.title }}</h4>
      <p class="more" v-if="data.isMore" @click="handleGoMore(data.morePath)">
        更多
      </p>
    </div>
    <div class="warp-content" v-for="item in data.childNodes" :key="item.id">
      <div class="content-left">
        <img src="" alt="" srcset="" />
      </div>
      <div class="content-right">
        <div class="right-title" @click="handleGoDetails(item.path)">
          <p>{{ item.title }}</p>
        </div>
        <div class="right-time">
          <p>{{ item.time }}</p>
        </div>
        <div class="right-tags">
          <p>
            <el-tag
              v-for="(tag, index) in item.tags"
              :key="index"
              @click="handleGoTagPath(tag.path)"
              >{{ tag.name }}</el-tag
            >
          </p>
        </div>
        <div class="right-description">
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    const handleGoDetails = (path) => {
      if (!path) return;
      router.push(path);
    };
    const handleGoMore = (path) => {
      if (!path) return;
      router.push(path);
    };
    const handleGoTagPath = (path) => {
      if (!path) return;
      router.push(path);
    };

    return {
      handleGoDetails,
      handleGoMore,
      handleGoTagPath,
    };
  },
};
</script>

<style lang="less" scoped>
h4 {
  font-size: 24px;
  padding-bottom: 10px;
  border-bottom: 2px solid;
  margin: 5px 0;
  user-select: none;
}

.code-warp {
  margin-bottom: 20px;

  .more {
    float: right;
    margin-top: -40px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }
}

.warp-content {
  padding: 20px;
  font-size: 18px;
  display: flex;
  height: 200px;
  border-bottom: 1px solid #eee;

  .content-left {
    margin-right: 20px;
    img {
      width: 120px;
      height: 120px;
      object-fit: contain;
    }
  }

  .content-right {
    > div {
      margin-bottom: 10px;
    }
  }

  .right-title {
    p {
      text-decoration: underline;
      font-size: 24px;
      &:hover {
        cursor: pointer;
        opacity: 0.5;
      }
    }
  }

  .right-time {
    margin-right: 20px;
    user-select: none;
    > p {
      color: #858b93;
      font-size:12px;
    }
  }

  .right-tags {
    user-select: none;
    > p {
      > span {
        margin-right: 10px;
        &:hover {
          cursor: pointer;
          opacity: 0.5;
        }
      }

      > span:last-child {
        margin: 0;
      }
    }
  }

  .right-description {
    > p {
      color: #60656c;
    }
  }
}
</style>