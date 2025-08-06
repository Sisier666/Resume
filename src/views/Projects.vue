<template>
    <div class="exp">   
        <img alt="ski" src="/img/项目经历.png" width="28" height="28"></img>
        <h2>项目经历</h2>
    </div>
    <hr/>

    <li>
        2022.10 - 2022.11
        <p class="projName1">基于 Android 的校园二手商品交易平台的设计与实现</p>
        <div class="proj1">
            <p>项目描述：实现注册登录模块，发表待售信息模块，浏览查询出售信息模块，
                成交记录查询模块等，用户能够上传图片，在线用户能够进行直接聊天等操作。
            <p>个人职责：负责设计与卖家的消息界面，显示消息列表，发送接收消息，保存
                聊天记录。</p>
            </p>
        </div>
    </li>

    <br/>

    <li>
        2025.01 - 2025.04
        <p class="projName1">远程粮仓管理平台设计与实现</p>
        <div class="proj1">
            <p>项目描述：APP采用Vue.js框架打造一个高效、直观且响应式的用户交互界面。
                通过使用云平台与stm32控制的硬件设备进行互联，数据传输。</p>
            <p>个人职责：1.负责APP界面的用户登录、主页、历史记录、天气API等核心模块。</p>
            <p>2.负责对应模块的后端，采用Node.js搭配MySQL数据库，实现数据存储与数
                据匹配，通过访问云平台去发送和获取数据。</p>
            <p>3.负责模块驱动程序的编写，实现stm32驱动各个模块。使用MQTT协议与云
                平台发送接收存储数据，设备控制指令转发等功能，保障系统高效稳定运行。</p>
        </div>
    </li>

</template>

<style scoped>
.exp {
    display: flex;
    flex-direction: row;
    align-items: center;
}
img {
    margin-right: 10px;
}
li {
    color: rgb(0, 0, 0);
    font-size: 17px;
}
.projName1  {
    font-weight: 500;
    margin-left: 20px;
    color: rgb(0, 0, 0);
}
.proj1 {
    color: rgb(8, 114, 135);
    font-size: 17px;
    margin-left: 20px;
}
</style>
