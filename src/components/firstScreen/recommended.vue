<template>
    <div id="recommended">
        <div class="recommended-nav">
            <p>推荐歌单</p>
        </div>
        <ul class="recommended-content">
            <li>
                <a href="#/2063351734">
                    <img :src="playlist1.coverImgUrl" alt="">
                    <p>{{playlist1.name}}</p>
                </a>
            </li>
            <li>
                <a href="#/605415618">
                    <img :src="playlist2.coverImgUrl" alt="">
                    <p>{{playlist2.name}}</p>
                </a>
            </li>   
            <li>
                <a href="#/2042006896">
                    <img :src="playlist3.coverImgUrl" alt="">
                    <p>{{playlist3.name}}</p>
                </a>
            </li>
            <li>
                <a href="#/2036883936">
                    <img :src="playlist4.coverImgUrl" alt="">
                    <p>{{playlist4.name}}</p>
                </a>
            </li> 
            <li>
                <a href="#/2039073542">
                    <img :src="playlist5.coverImgUrl" alt="">
                    <p>{{playlist5.name}}</p>
                </a>
            </li>  
            <li>
                <a href="#/2048970456">
                    <img :src="playlist6.coverImgUrl" alt="">
                    <p>{{playlist6.name}}</p>
                </a>
            </li>                                                                       
        </ul>
    </div>
</template>
<script>
    import axios from 'axios'  // 引入axios 模块

    export default {
        name: 'Recommended',
        data () {
            return {
                playlist1: {},
                playlist2: {},
                playlist3: {},
                playlist4: {},
                playlist5: {},
                playlist6: {},
            }
        },
        created () {
            axios({
                methods: 'get',
                url: 'https://api.imjad.cn/cloudmusic/?type=playlist&id=2063351734'
            })
            .then((response)=>{
                this.playlist1 = response.data.playlist  //axios 返回的对象下的data才是拿到的数据
            });
            axios.get('https://api.imjad.cn/cloudmusic/?type=playlist&id=605415618')
                .then((response)=>{
                    this.playlist2 = response.data.playlist //第二份歌单
                });
            axios.get('https://api.imjad.cn/cloudmusic/?type=playlist&id=2042006896')
                .then((response)=>{
                    this.playlist3 = response.data.playlist //第三份歌单
                });      
            axios.get('https://api.imjad.cn/cloudmusic/?type=playlist&id=2036883936')
                .then((response)=>{
                    this.playlist4 = response.data.playlist //第四份歌单
                });     
            axios.get('https://api.imjad.cn/cloudmusic/?type=playlist&id=2039073542')
                .then((response)=>{
                    this.playlist5 = response.data.playlist //第五份歌单
                });
            axios.get('https://api.imjad.cn/cloudmusic/?type=playlist&id=2048970456')
                .then((response)=>{
                    this.playlist6 = response.data.playlist //第六份歌单
                });                                                      
        }        
    }
</script>
<style>
    #recommended {
        margin-top: 124px;
    }
    .recommended-nav {
        width: 100%;
        height: 20px;
        margin: 20px 0 15px 0;
        border-left: 2px solid #d33a31;
        line-height: 18px;
    }
    .recommended-nav p {
        text-indent: 10px;
        font-size: 17px;
    }
    .recommended-content {
        width: 100%;
        height: 350px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .recommended-content li {
        width: 30%;
        height: 158px;
        margin: 0 auto;
        list-style: none;
        padding-bottom: 16px;
    }
    .recommended-content li img {
        width: 122px;
        height: 122px;
        box-shadow: 0 2px 3px rgba(0, 0, 0, .4);
    }
    .recommended-content li p {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        padding: 4px 2px 0 6px;
        line-height: 1.2;
        font-size: 12px;
        color: #333;
        line-height: 15px;
    }
</style>

