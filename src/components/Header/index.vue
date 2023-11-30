<template>
    <!-- 页首 -->
    <div class="header-wrapper">
        <!-- w:1220px -->
        <div class="header w">
            <!-- 页首左侧选项 -->
            <ul class="header-left">
                <li>
                    <!-- <a href="javascript:;">社区</a> -->
                    <router-link to="/">社区</router-link>
                </li>
                <li>
                    <!-- <a href="javascript:;">加入我们</a> -->
                    <router-link to="/about">关于我们</router-link>
                </li>
                <li>
                    <router-link to="/demo">测试维护</router-link>
                    <!-- <router-link to=""></router-link> -->
                </li>
                <li>
                    <!-- <a href="javascript:;">个人空间</a> -->
                    <router-link to="/userSpace">个人空间</router-link>
                </li>
            </ul>

            <!-- 右侧选项账户 -->
            <ul class="header-right">
                <li>
                    <router-link to="/userInfo">
                        <i class="iconfont icon-yonghu1"></i>
                    </router-link>
                </li>
                <li>
                    <router-link to="/setting">
                        <i class="iconfont icon-shezhi2"></i>
                    </router-link>
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use 'src/style/reset.scss';
@use 'src/style/base.css';
// iconfont
@import url('//at.alicdn.com/t/c/font_4318588_xbsy9wjzbac.css');
/* 页首 */

/* 顶部导航条的容器 */
.header-wrapper {
    /* 设置宽度全屏 */
    width: 100%;
    /* 设置高度和行高 */
    height: 55px;
    line-height: 55px;
    /* 设置背景颜色 */
    background-color: #333;
    /* 字体颜色 */
    color: #b0b0b0;
    /* 字体大小 */
    font-size: 16px;
    /* 下边距 */
    margin-bottom: 20px;
}

/* .logoImg{ */
/* height: 30px;
    display: block; */
/* background: white; */
/* margin: auto 0; */

/* } */

/* 页首左侧ul */
.header-left {
    /* 页首左侧整体向左浮动 */
    float: left;
    /* width: 300px; */
    /* display: flex; */
    /* flex-direction: row; */
    /* justify-content: space-evenly; */
}

.header-left::before {
    content: " ";
    display: block;
    height: 55px;
    width: 55px;
    background: url("@/assets/time.png") no-repeat;
    background-position: 50% 50%;
    /* background-origin: content-box; */
    background-size: 65%;
    float: left;
}

/* 页首左侧ul的li */
.header-left li {
    /* li再向左浮动 */
    float: left;
    /* 每个li是125px */
    width: 125px;
    /* 字体居中 */
    text-align: center;
}

/* 页首左侧ul li中的a标签 */
.header-left li a {
    /* 字体颜色 */
    color: #b0b0b0;
    /* 撑起位置 */
    display: block;
    /* 让a和li一样大 */
    width: 100%;
    /* flex-grow: 1; */
    // &::hovar{
    //     color: red;
    // }
}

/* 设置超链接移入的效果 */
.header-left li a:hover {
    /* 移入字体颜色变黑 */
    color: #333;
    /* 移动背景颜色变白 */
    background-color: #E8E7E3;
    // 清除下划线
    // text-decoration: none;

}



/* 页首右侧ul */
.header-right {
    /* 右侧ul整体往右侧偏移 */
    float: right;
    // 调整图标大小
    font-size: 20px;
}

/* 页首右侧ul的li */
.header-right li {
    /* 第一类往右侧偏 */
    float: right;
    /* 每个li是125px */
    width: 70px;
    /* 字体居中 */
    text-align: center;
}

/* 页首右侧ul li中的a标签 */
.header-right li a {
    /* 字体颜色 */
    color: #b0b0b0;
    // color: red;
    /* 撑起位置 */
    display: block;
    /* 让a和li一样大 */
    width: 100%;
    /* flex-grow: 1; */
}

/* 设置超链接移入的效果 */
.header-right li a:hover {
    /* 移入字体颜色变黑 */
    color: #333;
    /* 移动背景颜色变白 */
    background-color: #E8E7E3;
    // 清除下划线
    // text-decoration: none;
}
</style>