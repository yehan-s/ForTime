<template>
    <div class="main clearfix w ">
        <!-- 左侧信息 -->
        <div class="left-info clearfix">
            <div class="proflie"></div>
            <!-- 昵称 -->
            <div class="user-name">
                游客
            </div>
            <!-- id -->
            <div class="id">
                1513849675
            </div>
        </div>

        <!-- 右侧信息 -->
        <div class="right-info clearfix">
            <!-- <div class="clock">
                <div class="flip">
                    <div class="digital front" data-number="0"></div>
                    <div class="digital back" data-number="1"></div>
                </div>
                <div class="flip">
                    <div class="digital front" data-number="0"></div>
                    <div class="digital back" data-number="1"></div>
                </div>
                <em class="divider">:</em>
                <div class="flip">
                    <div class="digital front" data-number="0"></div>
                    <div class="digital back" data-number="1"></div>
                </div>
                <div class="flip">
                    <div class="digital front" data-number="0"></div>
                    <div class="digital back" data-number="1"></div>
                </div>
                <em class="divider">:</em>
                <div class="flip">
                    <div class="digital front" data-number="0"></div>
                    <div class="digital back" data-number="1"></div>
                </div>
                <div class="flip">
                    <div class="digital front" data-number="0"></div>
                    <div class="digital back" data-number="1"></div>
                </div>
            </div> -->


            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="我的文章" name="first">用户管理</el-tab-pane>
                <el-tab-pane label="我的点赞" name="second">配置管理</el-tab-pane>
                <el-tab-pane label="我的收藏" name="third">角色管理</el-tab-pane>
                <!-- <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane> -->
            </el-tabs>

            55555555
            <!-- 评论 -->
            <div id="content">
                <div id="post">
                    <textarea class="transition"></textarea>
                    <input id="postBt" type="button" value="发表评论" />
                    <input id="clearBt" type="button" value="清空所有已保存的数据" />
                </div>
                <div id="comment"></div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'userName',
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>

<style lang="scss" scoped>
@use './css/story.css';
@use './css/comment.css';
/* 个人空间的样式表 */

/* 取消页首的下边距 */
/* 取消页尾的上边距 */
.main {
    margin-top: -20px;
    margin-bottom: -40px;
}


.main {
    background-color: #fff;
}

/* 左侧信息栏 */
.left-info {
    width: 320px;
    height: 1200px;
    background-color: silver;
    text-align: center;
    font-weight: bold;
    float: left;
}

/* 头像 */
.proflie {
    width: 150px;
    height: 150px;
    margin: 70px auto 0 auto;
    border-radius: 50%;
    /* background-color: #bfa; */
    /* background-image: url(../img/profile.jpg);
    background-size: contain; */
    background: url(@/assets/profile.jpg) center/contain;
}

.user-name {
    margin-top: 25px;
}

.id {
    margin-top: 10px;
}

.right-info {
    float: left;
    width: 900px;
    height: 500px;
    background: #bfa;
}

.clock {
    /* margin-top: 25px; */
    margin: 45px auto 45px auto;
}
</style>