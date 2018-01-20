<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <!-- keep-alive解决首页菜单切换时，轮播图闪的问题，它闪的原因是每次切换时都会重新请求数据，导致每次切到轮播那个页面时，会迅速闪到第一个轮播图 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from './components/m-header/m-header'
import Tab from './components/tab/tab'
export default {
  components:{
    'm-header':MHeader,
    'tab':Tab
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
