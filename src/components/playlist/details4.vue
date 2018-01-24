<template>
  <div id="Details">
      <div class="details-header" v-bind:style="{background: 'url(' + playlist.coverImgUrl + ')'}">
          <div class="next-level">
              <img :src="playlist.coverImgUrl" alt="" class="title-img">
              <p>{{playlist.name}}</p>
              <div class="author-msg"><img :src="playlist.creator.avatarUrl" alt="">   <span>{{playlist.creator.nickname}}</span></div>
          </div>
      </div>
      <div class="details-label">
          <span class="label">标签：<div v-for="(item,index) in playlist.tags">{{item}}</div></span>
          <span class="label">简介： {{playlist.description}}</span>
      </div>
      <div class="details-list">
          <div class="details-list-title">歌曲列表</div>
          <ul>
              <li v-for="(item,index) in playlist.tracks" class="latest-list" @click="submitData(item)">
                <p>{{index + 1}} | {{item.name}}</p>
                <span><i class="icon iconfont icon-bat2"></i> {{item.ar[0].name}} - {{item.al.name}}</span>
                <i class="icon iconfont icon-iconset0481"></i>
              </li> 
          </ul>
      </div>
  </div>
</template>
<script>

    import axios from 'axios'  // 引入axios 模块

    export default {
        name: 'Details',
        data () {
            return {
                playlist: {},
            }
        },
        created () {
            axios.get('https://api.imjad.cn/cloudmusic/?type=playlist&id=2036883936')
                .then((response)=>{
                    this.playlist = response.data.playlist //第四份歌单
                }); 
        },
        methods: {
             submitData(item){
                 this.$store.commit('updateSongs',item)
             }
        } 
    }
</script>
<style>
    ::-webkit-scrollbar{
    display:none;
    }
    #Details {
        background:#f8f8f8;
    }
    .details-header {
        width: 100%;
        height: 186px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-size: cover;
        overflow: hidden;
    }
    .next-level {
        width: 90%;
        height: 126px;
        position: relative;
        z-index: 2;
    }
    .next-level p {
        padding: 1px 0 1px 15px;
        font-size: 17px;
        line-height: 1.3;
        color: #fefefe;
        height: 44px;
        display: -webkit-box;
    }
    .title-img {
        width: 126px;
        height: 126px;
        float: left;
    }
    .author-msg {
        display: inline-block;
        color: hsla(0,0%,100%,.7);
        font-size: 13px;
        height: 30px;
        margin: 20px 0 0 20px;
    }
    .author-msg img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        top: 9px;
    }
    .details-label {
        position: relative;
        margin: 10px 10px 0 15px;
        padding-top: 10px;
        line-height: 17px;
        color: #666;
        font-size: 12px;
        letter-spacing: 2px;
    }
    .label {
        display: block;
        padding: 5px 0; 
    }
    .label div {
        display: inline-block;
        border: 1px solid rgb(224, 220, 220);
        padding: 3px;
        margin: 0 5px;
        border-radius: 10px;
    }
    .details-list-title {
        width: 100%;
        height: 23px;
        line-height: 23px;
        margin-top: 15px;
        padding: 0 10px;
        font-size: 12px;
        color: #666;
        background-color: #eeeff0;
    }  
</style>
