<!--
 * @Author: lidalan
 * @Date: 2021-03-22 11:13:29
 * @LastEditors: lidalan
 * @LastEditTime: 2021-05-10 16:25:50
 * @Description: 
 * @FilePath: \xxx-blog-web\src\view\Code\index.vue
-->
<template>
  <div class="code">
    <div>
      <CodeWarpExtendTemplate :data="test" />
    </div>
  </div>
</template>

<script>
import { CodeWarpExtendTemplate } from "components/Code";
export default {
  components: { CodeWarpExtendTemplate },
  setup() {
    const test = {
      id: Math.random(),
      type: "test",
      description: "法国地方官的",
      dataVO: {
        id: Math.random(),
        title: "",
        childNodes: [
          {
            id: Math.random(),
            time: "05.07",
            title:
              "djskgjsldnm ldbndgwo g pekpw jgqp prge  dkd l dgd gdkjl w w sd d",
            path: "/code/test/13429",
            tags: [
              {
                name: "JavaScript",
                path: "/article/javascript",
              },
              {
                name: "TypeScript",
                path: "/article/typescript",
              },
            ],
            description:
              "就两三个离开赶紧离开了国家独立客观记录看到距离高考大佬就断开连接老师的课结果来看大家来看老孙家里的事，给的粮食计划和",
          },
        ],
        childLength: 1,
        isMore: true,
        morePath: "/code/test",
      },
    };

    return {
      test,
    };
  },
};
</script>

<style>
</style>