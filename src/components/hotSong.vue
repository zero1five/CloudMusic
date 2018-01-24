<template>
  <div id="hotSong">
        <div class="coverImg">
          <div class="coverImg-title">
              <i>云音乐</i>
          </div>
        </div>
        <ul class="latest-content">
            <li class="latest-list"  v-for="(item,index) in musicList" @click="submitData(item)">
                <p>{{index + 1}} | {{item.name}}</p>
                <span><i class="icon iconfont icon-bat2"></i> {{item.ar[0].name}} - {{item.al.name}}</span>
                <i class="icon iconfont icon-iconset0481"></i>
            </li>
        </ul>      
  </div>
</template>
<script>
    import axios from 'axios'  // 引入axios 模块

    export default {
        name: 'hotSong',
        data () {
            return {
                musicList: [],
            }
        },
        created () {
            axios({
                methods: 'get',
                 url: 'https://api.imjad.cn/cloudmusic/?type=playlist&id=3778678'
            })
            .then((response)=>{
                this.musicList = response.data.playlist.tracks
            })
        },
        methods: {
             submitData(item){
                 this.$store.commit('updateSongs',item)
             }
        }
    }
</script>
<style>
    #hotSong {
        margin-top: 104px;
    }
    .coverImg {
        height: 160px;
        width: 100%;
        background: url(https://p1.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg)no-repeat;
        background-size: cover;
        background-position-y: -110px;
        display: flex;
        justify-content: left;
        align-items: top;
    }
    .coverImg-title {
        height: 30px;
        padding-left: 10px;
        padding-top:  5px;
        line-height: 25px;
    }
    .coverImg-title i {
        color: hsla(0,0%,100%,.8);
        font-size: 13px;
    }
    .coverImg-title p {
        color: #fff;
        font-size: 20px;
    }
</style>

