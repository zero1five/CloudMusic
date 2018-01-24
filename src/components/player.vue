<template>
  <div id="player">
      <div class="player-content">
          <img :src="data.al.picUrl">
      </div>
      <p class="song-title">{{data.name}} - {{data.ar[0].name}}</p>
      <p class="single-source">-- 《 {{data.al.name}} 》</p>
      <i class="icon iconfont" @click="change" v-bind:class="{ 'icon-bofang':state,'icon-zanting':start }"></i>
      <audio 
        :src="playAddress" 
        autoplay
        id="audioPlayer"
      ></audio>  
  </div>
</template>
<script>
    export default {
        name: 'player',
        data () {
            return {
                state: false,
                start: true,
            }
        },
        computed: {
            data(){
                return this.$store.state.songs
            },
            playAddress(){
                return this.$store.state.playAddress
            },
            hotComments(){
                return this.$store.state.hotComments
            }
        },
        methods: {
            change(){
                let controls = document.getElementById('audioPlayer');

                if(this.state){
                    document.getElementById('audioPlayer').play();
                    this.state = false;
                    this.start = true;
                }else {
                    document.getElementById('audioPlayer').pause();
                    this.state = true;   
                    this.start = false;            
                }
            }
        }
    }
   
</script>
<style>
    #player {
        position: fixed;
        z-index: 999;
        width: 100%;
        height: 50px;
        background: rgb(247, 247, 221);
        bottom: 0;
        color: #4d4b4b;
    }
    .player-content {
        width: 40px;
        height: 40px;
        margin: 5px 0 0 10px;
        position: relative;
    }
    .song-title,.single-source {
        display: inline-block;
        position: absolute;
        top: 5px;
        left: 70px;
        font-size: 14px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        max-width: 240px;
    }
    .player-content img {
        width: 100%;
        height: 100%;
        box-shadow: 0 3px 3px rgba(73, 73, 68, 0.596);
        display: inline-block;
    }
    .single-author {
        margin-top: 5px;
        font-size: 13px;
    }
    .single-source {
        font-size: 12px;   
        top: 25px; 
    }
    .icon-zanting,.icon-bofang {
        position: absolute;
        font-size: 40px;
        top: 50%;
        right: 5px;
        transform: translate(-50%,-50%);
    }
</style>
