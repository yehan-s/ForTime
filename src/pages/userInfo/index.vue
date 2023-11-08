<template>
        <div class="user w">
            <ul class="info-left clearfix">
                <li class="li-name">
                    <div>昵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称：</div>
                    <input type="text" placeholder="游客">
                    <input type="button" value="修改">
                </li>
                <li class="li-id">
                    <div>用户账号：</div>
                    <input type="text" disabled value="1513849675">
                    <input type="button" value="修改">
                </li>
                <li class="li-date">
                    <div>用户生日：</div>
                    <input type="text">
                    <input type="button" value="修改">
                </li>
            </ul>

            <div class="profile-wrapper">
                <div>头像：</div>
                <img src="@/assets/profile.jpg" alt="">
                <input type="button" value="修改">
            </div>
        </div>
</template>

<script>
export default {
    name: 'userInfo',
}
</script>

<style lang="scss" scoped>
/* 取消页首的下边距 */
/* 取消页尾的上边距 */
.user{
    margin-top: -20px;
    margin-bottom: -40px;
}

/* 个人用户信息存放位置 */
.user{
    // height: 560px;
    background: #eee;
    font-size: 20px;
    position: relative;
    // 减去页首和页尾
    height: calc(100vh - 55px - 80px);
}

/* 文本输入框宽度 */
ul li input[type="text"]{
    width: 100px;
    
}

/* 左边的 */
.info-left{
    width: 600px;
    height: 200px;
    /* background: #eea; */
    float: left;
}

/* 昵称、id、生日的文本 */
li div{
    float: left;
    margin-right: 20px;
    height: 23px;
    line-height: 23px;
}

/* 左边的每一组 */
.info-left li{
    margin-top: 20px;
    margin-left: 200px;
}

/* 昵称上边距50px */
.info-left li:first-child{
    margin-top: 50px;
}

/* 头像容器 */
.profile-wrapper{
    width: 400px;
    height: 210px;
    /* background: #bfa; */
    float: right;
    position: relative;
}

/* 头像图片大小 */
img{
    width: 120px;
    height: 120px;
    border: 1px solid #000;
    margin-top: 50px;
}

/* 头像文本 */
.profile-wrapper div{
    float: left;
    margin-right: 20px;
    margin-top: 50px;
}

/* 头像修改 */
.profile-wrapper input{
    position: absolute;
    bottom: 0;
    left: 101px;
    transform: translateX(50%);
}
</style>