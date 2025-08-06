<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <RouterView/>
</template>

<style scoped>
/* 禁用手机端自动缩放 */
html {
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}

/* 全局自适应容器 */
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #fff;
}

/* 简历容器（关键） */
.layout {
  max-width: 800px;   /* 电脑端最大宽度 */
  margin: 0 auto;
  padding: 40px 20px;
  box-sizing: border-box;
}

/* 手机端适配 */
@media (max-width: 600px) {
  .layout {
    padding: 20px 10px;
    font-size: 14px;
  }

  /* 标题缩小 */
  h1, h2, h3 {
    font-size: 1.2em;
  }

  /* 防止表格/图片溢出 */
  img, table {
    max-width: 100%;
    height: auto;
  }

  /* 强制段落不撑开 */
  p, li {
    word-wrap: break-word;
  }
}
</style>
