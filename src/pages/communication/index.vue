<template>
  <div>
    <!-- logo和搜索框 -->
    <div class="w top">
      <!-- <img src="../img/time.png" alt="logo" class="logoImg"> -->
      <!-- <div class="top-text">人生快乐倘若想完备，一定要保存一点孩子气</div> -->

      <!-- 动态文字 -->
      <div class="mtext w">
        <div class="content">
          <div class="content_container">
            <p class="content_container_text">Hello</p>

            <ul class="content_container_list">
              <li class="content_container_list_item">欢迎 !</li>
              <li class="content_container_list_item">来到 !</li>
              <li class="content_container_list_item">时溯 !</li>
              <li class="content_container_list_item">空间 !</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 创建搜索框的容器 -->
      <div class="search-wrapper">
        <form class="search" action="#">
          <input class="search-inp" type="text" />
          <button class="search-btn">
            <i class="iconfont icon-sousuo"></i>
          </button>
        </form>
      </div>
    </div>

    <!-- banner -->
    <div class="banner">
      <div class="slider">
        <input name="control" id="page1" type="radio" checked />
        <input name="control" id="page2" type="radio" />
        <input name="control" id="page3" type="radio" />
        <input name="control" id="page4" type="radio" />

        <div class="slider--el slider--el-1 anim-4parts">
          <!-- 第一张图背景分为4个区域，为后面动画做调整 -->
          <div class="slider--el-bg">
            <div class="part top left"></div>
            <div class="part top right"></div>
            <div class="part bot left"></div>
            <div class="part bot right"></div>
          </div>
          <div class="slider--el-content">
            <!-- 文字部分只是随意写的，可以修改成你使用的 -->
            <h2 class="slider--el-heading">Miss</h2>
          </div>
        </div>

        <div class="slider--el slider--el-2 anim-9parts">
          <!-- 第二张图背景分为9个区域，为后面动画做调整 -->
          <div class="slider--el-bg">
            <div class="part left-top"></div>
            <div class="part mid-top"></div>
            <div class="part right-top"></div>
            <div class="part left-mid"></div>
            <div class="part mid-mid"></div>
            <div class="part right-mid"></div>
            <div class="part left-bot"></div>
            <div class="part mid-bot"></div>
            <div class="part right-bot"></div>
          </div>
          <div class="slider--el-content">
            <!-- 文字部分只是随意写的，可以修改成你使用的 -->
            <h2 class="slider--el-heading">Recall</h2>
          </div>
        </div>

        <div class="slider--el slider--el-3 anim-5parts">
          <!-- 第三张图背景分为5个区域，为后面动画做调整 -->
          <div class="slider--el-bg">
            <div class="part part-1"></div>
            <div class="part part-2"></div>
            <div class="part part-3"></div>
            <div class="part part-4"></div>
            <div class="part part-5"></div>
          </div>
          <div class="slider--el-content">
            <!-- 文字部分只是随意写的，可以修改成你使用的 -->
            <h2 class="slider--el-heading">Memory</h2>
          </div>
        </div>

        <div class="slider--el slider--el-4 anim-3parts">
          <!-- 第四张图背景分为5个区域，为后面动画做调整 -->
          <div class="slider--el-bg">
            <div class="part left"></div>
            <div class="part mid"></div>
            <div class="part right"></div>
          </div>
          <div class="slider--el-content">
            <!-- 文字部分只是随意写的，可以修改成你使用的 -->
            <h2 class="slider--el-heading">Find</h2>
          </div>
        </div>
        <div class="slider--control left">
          <label class="page1-left" for="page1"></label>
          <label class="page2-left" for="page2"></label>
          <label class="page3-left" for="page3"></label>
          <label class="page4-left" for="page4"></label>
        </div>
        <div class="slider--control right">
          <label class="page1-right" for="page1"></label>
          <label class="page2-right" for="page2"></label>
          <label class="page3-right" for="page3"></label>
          <label class="page4-right" for="page4"></label>
        </div>
      </div>
    </div>

    <!-- 风景 -->
    <div class="w titile-part clearfix">
      <h2>风景</h2>
      <div>scenery</div>
    </div>

    <!-- 风景热议 -->
    <div class="scenery w">
      <div class="hot">
        <div class="hot-detail">
          <ul>
            <li class="hotmore">
              <a><i class="iconfont icon-shangsheng"></i>更多热议! </a>
            </li>
            <li>
              <a><i class="iconfont icon-shangsheng"></i>惬意独居的欧美小镇dddddddddd！</a>
            </li>
            <li>
              <a><i class="iconfont icon-shangsheng"></i>粗犷的利比亚沙漠！</a>
            </li>
          </ul>
        </div>
      </div>

      <figure class="sample">
        <img src="https://source.unsplash.com/5qU7xQmej8A" alt="sample1" />
        <figcaption>
          <h3>Read More</h3>
        </figcaption>
        <a href="#"></a>
      </figure>

      <figure class="sample">
        <img src="https://source.unsplash.com/LIAuxi4hBfg" alt="sample2" />
        <figcaption>
          <h3>Read More</h3>
        </figcaption>
        <a href="#"></a>
      </figure>

      <figure class="sample">
        <img src="https://source.unsplash.com/CXj2LBjMUIA" alt="sample3" />
        <figcaption>
          <h3>Read More</h3>
        </figcaption>
        <a href="#"></a>
      </figure>
    </div>

    <!-- 美食 -->
    <div class="w titile-part clearfix">
      <h2>美食</h2>
      <div>delicacy</div>
    </div>

    <!-- 美食热议 -->
    <div class="delicacy w">
      <div class="hot">
        <div class="hot-detail">
          <ul>
            <li class="hotmore">
              <a><i class="iconfont icon-shangsheng"></i>更多热议! </a>
            </li>
            <li>
              <a><i class="iconfont icon-shangsheng"></i>惬意独居的欧美小镇！</a>
            </li>
            <li>
              <a><i class="iconfont icon-shangsheng"></i>粗犷的利比亚沙漠！</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- 第一组图片，需要三组，格式相同 -->
      <figure class="sample">
        <figcaption>
          <h2>Afternoon Tea</h2>
          <p>Afternoon tea is one of the ways of dining.</p>
        </figcaption>
        <a href="#"></a
        ><img src="https://source.unsplash.com/LVAAnfAR2lE" alt="sample1" />
      </figure>

      <!-- 第二组图片 -->
      <figure class="sample">
        <figcaption>
          <h2>Noodle</h2>
          <p>Thai Red Curry Noodle Soup with Chicken.</p>
        </figcaption>
        <a href="#"></a
        ><img src="https://source.unsplash.com/YpfRCe5lda0" alt="sample2" />
      </figure>

      <!-- 第三组图片 -->
      <figure class="sample">
        <figcaption>
          <h2>Sushi</h2>
          <p>Sushi plate with chopsticks and soya souce.</p>
        </figcaption>
        <a href="#"></a
        ><img src="https://source.unsplash.com/iy_MT2ifklc" alt="sample3" />
      </figure>
    </div>

    <!-- 艺术 -->
    <div class="w titile-part clearfix">
      <h2>艺术</h2>
      <div>art</div>
    </div>

    <!-- 艺术热议 -->
    <div class="art w">
      <div class="hot">
        <div class="hot-detail">
          <ul>
            <li class="hotmore">
              <a><i class="iconfont icon-shangsheng"></i>更多热议! </a>
            </li>
            <li>
              <a><i class="iconfont icon-shangsheng"></i>惬意独居的欧美小镇！</a>
            </li>
            <li>
              <a><i class="iconfont icon-shangsheng"></i>粗犷的利比亚沙漠！</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- 第一组图片 -->
      <figure class="sample">
        <img src="https://source.unsplash.com/gLHI-o3Xiq8" alt="sample1" />
        <figcaption>
          <div>
            <h2>Deconovo</h2>
            <h4>Classic Sculptures</h4>
          </div>
        </figcaption>
        <a href="#"></a>
      </figure>

      <!-- 第二组图片 -->
      <figure class="sample">
        <img src="https://source.unsplash.com/U-ouhtPgHH4" alt="sample2" />
        <figcaption>
          <div>
            <h2>Victoria</h2>
            <h4>Watercolor</h4>
          </div>
        </figcaption>
        <a href="#"></a>
      </figure>

      <!-- 第三组图片 -->
      <figure class="sample">
        <img src="https://imgse.com/i/piyFscq" alt="sample3" />
        <figcaption>
          <div>
            <h2>Danielle</h2>
            <h4>Oil Painting</h4>
          </div>
        </figcaption>
        <a href="#"></a>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  // name:'Communication',
};
</script>

<style lang="scss" scoped>
// @use '//at.alicdn.com/t/c/font_4318588_ajcofnate8l.css';

// 大图轮播
@use "./css/banner.css";
// 动态文字
@use "./css/mtext.css";
// 风景
@use "./css/scenery.css";
// 美食
@use "./css/delicacy.css";
// 艺术
@use "./css/art.css";
// @import '@/style/base.css'
/* 主页index.html的样式表 */

// iconfont
@import url('//at.alicdn.com/t/c/font_4318588_4efvle5w2yb.css');
// @use "//at.alicdn.com/t/c/font_4318588_ajcofnate8l.css"; 

/* logo 和搜索框 */
.top {
  /* top行高 */
  height: 50px;
  /* 下边距 */
  margin-bottom: 20px;
  position: relative;
}

/* 设置搜索框的容器 */
.search-wrapper {
  width: 296px;
  height: 40px;
  float: right;
  margin-top: 5px;
  /* position: absolute; */
  /* right: 0; */
}

.search-wrapper .search-inp {
  box-sizing: border-box;
  width: 244px;
  border: none;
  float: left;
  padding: 0 10px;
  height: 40px;
  font-size: 16px;
  border: 1px solid rgb(224, 224, 224);
  outline: none;
  border-radius: 16px 0 0 16px;
}

/* 设置input获取焦点后的样式 */
.search-wrapper .search-inp:focus,
.search-wrapper .search-inp:focus + button {
  border-color: #ff6700;
}

/* 搜索框左边输入 */
.search-wrapper .search-btn {
  float: left;
  height: 40px;
  width: 52px;
  padding: 0;
  border: none;
  background-color: #fff;
  color: #616161;
  font-size: 16px;
  border: 1px solid rgb(224, 224, 224);
  border-left: none;
  border-radius: 0 16px 16px 0;
}

/* 搜索框右边按钮 */
.search-wrapper .search-btn:hover {
  background-color: #ff6700;
  color: white;
  border: none;
}

/* 标题字体样式 */
.titile-part {
  font-size: 50px;
  color: transparent;
  -webkit-text-stroke: 2px black;
  letter-spacing: 0.04em;
  /* background-color:  */
  margin-top: 15px;
}

.titile-part h2 {
  /* float: left; */
  display: inline-block;
}

.titile-part div {
  font-size: 20px;
  -webkit-text-stroke: 1px black;
  display: inline-block;
  /* float: left; */
  /* vertical-align: text-bottom; */
}

.hot {
  display: flex;
  margin-top: 15px;
  /* justify-content: flex-start; */
  /* align-items: center; */
  /* left: 0; */
  line-height: 30px;
  /* float: left; */
  text-decoration: underline;
  cursor: pointer;
}

.hot li {
  width: 160px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.hotmore a {
  color: red;
}

.hot li i {
  margin-right: 5px;
  color: red;
}
</style>
