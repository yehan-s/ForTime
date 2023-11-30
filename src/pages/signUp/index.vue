<template>
    <div>
        <div class="wrapper">
            <div class="main_wrapper">
                <div class="login_text login_title">注册</div>
                <div class="nickName_wrapper small_wrapper">
                    <div class="nickName_text">昵称 :</div>
                    <input type="text" class="input_size">
                </div>
                <div class="email_wrapper small_wrapper">
                    <div class="eamil_text">邮箱 :</div>
                    <input type="email" class="input_size">
                </div>
                <div class="password_wrapper small_wrapper">
                    <div class="passwprd_text">密码 :</div>
                    <input type="password" class="input_size">
                </div>
                <!-- <div class="login_button">注册</div> -->
                <div class="zhanweifu">占位符</div>
                <input type="button" class="login_button" value="注册" @click="login()">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'signUp',
    data() {
        return {

        }
    },
    methods: {
        login(){
            alert("注册完成")
        }
    },
    beforeRouteEnter(to, from, next) {
        window.document.body.style.backgroundColor = '#f4f5f7'
        next()
    },
    beforeRouteLeave(to, from, next) {
        window.document.body.style.backgroundColor = ''
        next()
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    height: 500px;
    width: 400px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 10px;

    // 包裹文字的框
    .main_wrapper {
        height: 400px;
        width: 300px;
        // background-color: pink;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
    }

    .login_title {
        font-weight: bolder;
        font-size: 25px;
        // margin-top: 20px;
        margin-bottom: 20px;
    }

    // 包裹文字和input
    .small_wrapper {
        margin-bottom: 15px;

        div {
            margin-bottom: 5px;
        }

        // input尺寸
        .input_size {
            width: 100%;
            height: 40px;
        }
    }
    .zhanweifu{
        visibility: hidden;
    }
    .login_button{
        width: 100%;
        height: 40px;
    }

}
</style>