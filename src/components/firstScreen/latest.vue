<template>
    <div id="latest">
        <div class="recommended-nav" id="lateset_nav">
            <p>最新音乐</p>
        </div>        
        <ul class="latest-content">
            <li 
                class="latest-list"  
                v-for="(item,index) in musicList"
                @click="submitData(item)"
            >
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
        name: 'latest',
        data () {
            return {
                 musicList: [],
            }
        },
        created () {
            axios({
                methods: 'get',
                 url: 'https://api.imjad.cn/cloudmusic/?type=playlist&id=2063351734'
            })
            .then((response)=>{
                this.musicList = JSON.parse(JSON.stringify(response.data.playlist.tracks));
                //这里有个坑 axios传过来的数据有问题
            })
        },
        methods: {
            submitData(item){
                //改变状态 提交mutation  二参传递数据
                this.$store.commit('updateSongs',item)
                //改变状态 提交action  二参传递数据
                /* this.$store.dispatch('testone',data) */
            }
        }
    }   
</script>
<style>
    #lateset_nav {
        margin: 30px 0 10px 0;
    }
    .latest-list {
        font-family: '微软雅黑';
        padding: 6px 0 6px 10px;
        position: relative;
        border-bottom: 1px solid rgba(189, 188, 188, 0.2);
    }
    .latest-list p {
        font-size: 17px;
        color: #333;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        max-width: 90%;
    }
    .latest-list span {
        font-size: 12px;
        color: #888;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        max-width: 80%;
        display: inline-block;
    }
    .icon-iconset0481 {
       position: absolute;
       right: 20px;
       top: 15px;
       font-size: 20px;
    }
    .icon-bat2 {
        color: #d43c33;
        font-size: 12px;
    } 
</style>

