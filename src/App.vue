<template>
  <div id="app">

    <router-view></router-view>
    <player></player>
  </div>
</template>
<script>
  import Player from '@/components/player' //注入播放器组件
export default {
  name: 'App',
  components: {
    Player
  }
}
</script>
<style>
    * {
        padding: 0;
        margin: 0;
    }
    html,body {
        background: #fcfcfc;
        height: 100%;
        width: 100%;
        overflow-x: hidden;
        font-family: '微软雅黑';
    }
</style>
