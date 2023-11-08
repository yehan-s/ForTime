<template>
    <!-- 页尾 -->
<div class="footer-wrapper">
    <!-- 版权号文字 -->
    <div class="copyright">Copyright © 2019-2021 2019 yehan | Powered by yehan | For Time</div>
    
    <!-- 条款声明 -->
    <div class="footer-text">
        <a href="javascript:;" class="footer-text-content">使用条款</a>
        <div class="footer-text-content">|</div>
        <a href="javascript:;" class="footer-text-content">隐私条款</a>
    </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
/* 页尾 */

/* 页尾导航条的容器 */
.footer-wrapper{
    /* 设置宽度全屏 */
    width: 100%;
    /* 设置高度和行高 */
    height: 80px;
    // 为了让页尾贴合内容，app里也要设置pb
    line-height: 30px;
    /* 设置背景颜色 */
    background-color: #333;
    /* 字体颜色 */
    color: #b0b0b0;
    text-align: center;
    font-size: 12px;
    padding-top: 10px;
    padding-bottom: 10px;
    /* 上边距 */
    // margin-top: 20px;
    // 固定在最下方
    position: absolute;
    bottom: 0;
    box-sizing: content-box;
    // 垂直居中
    display:flex;
    flex-direction: column;
    justify-content: center;
}

.copyright{
    width: 450px;
    margin: 0 auto;
}


/* 两则条款的容器 */
.footer-text{
    width: 150px;
    /* background: #bfa; */
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}

/* 两则条款的a链接 */
.footer-text a{
    color: #b0b0b0; 
    // font-size: 12px;
    display: block;
}

/* 两则条款的移入效果 */
.footer-text a:hover{
    text-decoration: underline;
}

/* 两则条款文字调整 */
.footer-text-content{
    color: #b0b0b0; 
    // font-size: 12px;
    float: left;
}
</style>