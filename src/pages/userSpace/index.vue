<template>
    <div class="main clearfix w">
        <!-- 左侧信息 -->
        <div class="left-info clearfix">
            <div class="info-frame clearfix">
                <div class="profile"></div>
                <!-- 昵称 -->
                <div class="user-name">
                    {{nickName}}
                </div>
                <!-- id -->
                <div class="id">
                    {{email}}
                </div>
                <div class="number_wrapper">
                    <div class="subscribeNum">关注 : {{ subscribeNum }}</div>
                    <div class="fansNum">粉丝 : {{ fansNum }}</div>
                </div>
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

            <div class="intro">
                <div class="content">
                    <vue-typed-js :strings="MyIntro" :typeSpeed="100" :backSpeed="50" :startDelay="500">
                        <h1 class="typing"></h1>
                    </vue-typed-js>
                </div>
            </div>

            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="我的文章" name="first">
                    <div class="work_wrapper">
                        <!-- 这个分割 -->
                        <!-- <div class="work" v-for="item in imgUrl" :key="index"> -->
                        <div class="work">
                            <!-- <div class="work_picture" :style="{'backgroundImage':`url(${require(item)})`}"></div> -->
                            <div class="work_picture"
                                :style="{ backgroundImage: 'url(' + require('@/assets/work1.jpg') + ')' }"></div>
                            <div class="work_title">web笔记</div>
                            <div class="work_edit">
                                <el-dropdown trigger="click">
                                    <span class="el-dropdown-link">
                                        <!-- 右下角小标 -->
                                        <i class="el-icon-arrow-down el-icon--right"></i>
                                    </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item>编辑</el-dropdown-item>
                                        <el-dropdown-item>删除</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </div>
                        </div>
                        <div class="work">
                            <!-- <div class="work_picture" :style="{'backgroundImage':`url(${require(item)})`}"></div> -->
                            <div class="work_picture"
                                :style="{ backgroundImage: 'url(' + require('@/assets/work2.jpg') + ')' }"></div>
                            <div class="work_title">webpack初识篇（创建及基本配置方法）</div>
                            <div class="work_edit">
                                <el-dropdown>
                                    <span class="el-dropdown-link">
                                        <!-- 右下角小标 -->
                                        <i class="el-icon-arrow-down el-icon--right"></i>
                                    </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item>编辑</el-dropdown-item>
                                        <el-dropdown-item>删除</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </div>
                        </div>
                        <div class="work">
                            <!-- <div class="work_picture" :style="{'backgroundImage':`url(${require(item)})`}"></div> -->
                            <div class="work_picture"
                                :style="{ backgroundImage: 'url(' + require('@/assets/work3.jpg') + ')' }"></div>
                            <div class="work_title">11月随笔</div>
                            <div class="work_edit">
                                <el-dropdown>
                                    <span class="el-dropdown-link">
                                        <!-- 右下角小标 -->
                                        <i class="el-icon-arrow-down el-icon--right"></i>
                                    </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item>编辑</el-dropdown-item>
                                        <el-dropdown-item>删除</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </div>
                        </div>
                        <div class="work">
                            <!-- <div class="work_picture" :style="{'backgroundImage':`url(${require(item)})`}"></div> -->
                            <div class="work_picture"
                                :style="{ backgroundImage: 'url(' + require('@/assets/work4.jpg') + ')' }"></div>
                            <div class="work_title">webpack进阶</div>
                            <div class="work_edit">
                                <el-dropdown>
                                    <span class="el-dropdown-link">
                                        <!-- 右下角小标 -->
                                        <i class="el-icon-arrow-down el-icon--right"></i>
                                    </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item>编辑</el-dropdown-item>
                                        <el-dropdown-item>删除</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </div>
                        </div>
                        <div class="work">
                            <!-- <div class="work_picture" :style="{'backgroundImage':`url(${require(item)})`}"></div> -->
                            <div class="work_picture"
                                :style="{ backgroundImage: 'url(' + require('@/assets/work5.jpg') + ')' }"></div>
                            <div class="work_title">Vue Demo - 关于论坛的设计构思</div>
                            <div class="work_edit">
                                <el-dropdown>
                                    <span class="el-dropdown-link">
                                        <!-- 右下角小标 -->
                                        <i class="el-icon-arrow-down el-icon--right"></i>
                                    </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item>编辑</el-dropdown-item>
                                        <el-dropdown-item>删除</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </div>
                        </div>
                        <div class="work">
                            <!-- <div class="work_picture" :style="{'backgroundImage':`url(${require(item)})`}"></div> -->
                            <div class="work_picture"
                                :style="{ backgroundImage: 'url(' + require('@/assets/work6.jpg') + ')' }"></div>
                            <div class="work_title">pet网页设计</div>
                            <div class="work_edit">
                                <el-dropdown>
                                    <span class="el-dropdown-link">
                                        <!-- 右下角小标 -->
                                        <i class="el-icon-arrow-down el-icon--right"></i>
                                    </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item>编辑</el-dropdown-item>
                                        <el-dropdown-item>删除</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </div>
                        </div>

                    </div>
                </el-tab-pane>
                <el-tab-pane label="我的点赞" name="second"><el-empty description="很遗憾，您还未点赞任何作品"></el-empty></el-tab-pane>
                <el-tab-pane label="我的收藏" name="third"><el-empty description="很遗憾，您还未收藏任何作品"></el-empty></el-tab-pane>
                <!-- <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane> -->
            </el-tabs>

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
// import { url } from 'inspector';
// import 

export default {
    name: 'userName',
    data() {
        return {
            // 昵称
            nickName:'夜寒',
            // 邮箱
            email:'myenli@163.com',
            // 关注数
            subscribeNum:0,
            // 粉丝
            fansNum:0,
            // 默认tab是第几个
            activeName: 'first',
            // imgUrl:require('@/assets/work1.jpg')
            imgUrl: ['@/assets/work1.jpg', '@/assets/work1.jpg', '@/assets/work1.jpg', '@/assets/work1.jpg', '@/assets/work1.jpg', '@/assets/work1.jpg'],
            // return require(`@/assets/work.png`)
            // 动态签名文字
            MyIntro:['曾经大家要寻求迦南地，', '忽地我明白，^1500', '复杂的世界，求索就是一具生锈的枷锁^4000']
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    },
    // 改变背景颜色
    beforeRouteEnter(to, from, next) {
        window.document.body.style.backgroundColor = '#f4f4f5'
        next()
    },
    beforeRouteLeave(to, from, next) {
        window.document.body.style.backgroundColor = ''
        next()
    }
}
</script>

<style lang="scss" scoped>
@use './css/story.css';
@use './css/comment.css';

$bgColor: #fff;

/* 个人空间的样式表 */

/* 取消页首的下边距 */
/* 取消页尾的上边距 */


.main {
    // margin-top: -20px;
    // margin-bottom: -30px;
    max-width: -20px auto -30px auto;
    // display: table-cell;
    height: 100%;
    display: flex;
    justify-content: space-between;
}


// .main {
//     // background-color: $bgColor;
// }

/* 左侧信息栏 */
.left-info {
    // width: 320px;
    width: 220px;
    // margin-right: 40px;
    // height: 100%;
    // height: 1200px;
    // height: calc(100% - 50px - 80px);
    // height: inherit;
    // box-sizing: border-box;
    // background-color: silver;
    text-align: center;
    font-weight: bold;
    position: relative;

    .info-frame {
        background: $bgColor;
        height: calc(100% - 20px - 20px);
        margin: 20px 0 20px 0;
        border-radius: 4px;
    }

    // height: calc(100% - 30px);
    // float: left;
    // display: table-cell;
    /* 头像 */
    .profile {
        width: 120px;
        height: 120px;
        margin: 70px auto 0 auto;
        border-radius: 50%;
        /* background-color: #bfa; */
        /* background-image: url(../img/profile.jpg);
    background-size: contain; */
        background: url(@/assets/profile.jpg) center/contain;
    }
    // 昵称
    .user-name {
        margin-top: 25px;
    }
    // 邮箱
    .id {
        margin-top: 10px;
    }
    // 关注和粉丝
    .number_wrapper{
        height: 200px;
        // width: 100%;
        margin-top: 15px;
        // display: flex;
        // justify-content: space-evenly;
        position: absolute;
        left: 40px;
        .subscribeNum{
            margin-bottom: 10px;
        }
    }
}



.right-info {
    // float: left;
    width: 900px;

    // height: 500px;
    // background: #bfa;
    // display: table-cell;
    // 个人简介
    .intro {
        box-sizing: border-box;
        padding: 20px;
        margin-top: 20px;
        margin-bottom: 10px;
        border-radius: 4px;
        font-size: 18px;
        font-weight: normal;
        // height: 60px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $bgColor;
    }

    // tabs
    ::v-deep .el-tab {
        background-color: red;
    }

    // tabs 未选中
    ::v-deep .el-tabs__item {
        height: 40px;
        color: gray !important;
        text-align: center;
        // padding-top: 10px;
        // line-height: 40px;
        font-size: 16px !important;
        // background-color: blue !important;
        // background: black !important;
    }

    // tabs 选中
    ::v-deep .is-active {
        color: rgb(51, 51, 51) !important;
        // background-color: #35a121 !important;
    }

    // 下方移动的bar
    ::v-deep .el-tabs__active-bar {
        background-color: rgb(51, 51, 51);
    }

    .work_wrapper {
        display: flex;
        // justify-items: flex-start;
        // justify-content: space-between;
        // align-items: flex-start;
        align-self: flex-start;
        flex-wrap: wrap;

        .work {
            // background-color: red;
            width: 190px;
            height: 185px;
            margin-right: calc((100% - 4 * 190px)/3);
            margin-top: 5px;
            margin-bottom: 5px;

            // 选中4的倍数不要右边距
            &:nth-child(4n+4) {
                margin-right: 0;
            }

            // 图片
            .work_picture {
                width: 100%;
                height: 120px;
                // background-color: forestgreen;
                // background: url("@/assets/work1.jpg") center/contain;
                background: center/contain;
            }

            .work_title {
                margin-top: 5px;
                width: 100%;
                height: 40px;
                // background-color: aqua;
                // 多行省略
                // text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                // text-overflow: ellipsis;
                display: -webkit-box;
                word-break: break-all;
                -webkit-line-clamp: 2;
                // line-clamp: 2;
                -webkit-box-orient: vertical;
            }

            .work_edit {
                display: flex;
                // justify-self: right;
                justify-content: flex-end;

                // margin-right: 10px;
                .el-dropdown-link {
                    cursor: pointer;
                    color: black;
                }

                .el-icon-arrow-down {
                    font-size: 12px;
                }
            }
        }
    }
}

.clock {
    /* margin-top: 25px; */
    margin: 45px auto 45px auto;
}
</style>