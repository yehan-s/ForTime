<template>
  <div id="app">
    <Header v-if="!$route.meta.showHeader"></Header>
    <router-view></router-view>
    <Footer v-if="!$route.meta.showFooter"></Footer>
  </div>
</template>

<script>

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@use 'src/style/reset.scss';
@use 'src/style/base.css';
// element-ui样式
// @use 'element-ui/lib/theme-chalk/index.css';

// 基本高度不影响页首
html,
body,
form {
  height: 100%;
  // 滚动条不挤压布局
  overflow-y: auto;
  overflow-x: hidden;

  #app {
  position: relative;
  min-height: 100%;
  padding-bottom: 120px;
  box-sizing: border-box;
  // 滚动条不挤压布局
  margin-right: calc(100% - 100vw);
}
}


// 利用vw和calc实现滚动条不挤压布局
// html {
//   overflow-y: auto;
//   overflow-x: hidden;
// }

// #app {
//   margin-right: calc(100% - 100vw);
// }
</style>
