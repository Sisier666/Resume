<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="layout">
    <!-- 左侧栏 -->
    <aside class="leftSide">
      <img class="avatar" src="/img/头像.jpg" alt="avatar" width="100"></img>
      <RouterLink to="/" class="person">※ 个人信息</RouterLink>
      <ul class="contact">
        <li>姓名：曾渝芸</li>
        <li>年龄：22 岁</li>
        <li>🏫学校：广州软件学院</li>
        <li>📞电话：18319701380</li>
        <li>📧邮箱：320349353@qq.com</li>

        <nav class="navigate">
          <li><RouterLink to="/skill">专业技能</RouterLink></li>
          <li><RouterLink to="/experience">实习经历</RouterLink></li>
          <li><RouterLink to="/projects">项目经历</RouterLink></li>
        </nav>
        

        <li class="rewards">奖励证书
          <div class="rewTime">CET-4；</div>
          <div class="rewTime">普通话二级甲等证书；</div>
          <div class="rewTime">获学生奖学金二等奖</div>
          <div class="rewTime">获学生奖学金三等奖</div>
        </li>
      </ul>
    </aside>

    <!-- 右侧栏 -->
    <main class="rightSide">
      <RouterView />
    </main>

  </div>
</template>


<style scoped>
.layout {
  display: flex;
  flex-direction: row;
  min-height: 100vh;   /* 撑满全屏高度*/
  min-width: 60vh;
}
.leftSide {
  display: flex;
  flex-direction: column;
  background-color: #174b73;
  width: 30%;   /* 左边固定宽度 */
  align-items: center;

  word-break: break-word; /* 超长单词/字母强制换行 */

}
.rightSide {
  flex: 1;    /* 右边占满剩下宽度*/
  padding: 10px; 
  overflow-y: auto;
  background-color: #ffffff;
}

.avatar {
  margin-top: 20px;
  border-radius: 50%;
}
.person{
  color: #000000;
  font-size: 18px;
}
ul {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  padding-left: 27px;
  /* gap: 10px; */
}
li {
  margin-bottom: 10px;
  color: #fff; 
  font-size: 13px;
}
.navigate {
  width: 75%;
}
.rewTime {
  display: flex;
  flex-direction: row;
  color: #eebb5d; 
  font-size: 13px;
}


</style>
