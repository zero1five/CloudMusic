<template>
    <div id="search">
        <div class="m-input">
          <div class="input-cover">
            <i class="icon iconfont icon-wxbsousuotuiguang icon-search"></i>
            <input 
                type="text" 
                placeholder="搜索歌曲、歌手、专辑"
                v-model="value"
                @keyup="getlist(value)"
                id="searchInput"
            >
          </div>
        </div>
        <div class="hot-search">
            <div class="hot-title">热门搜索</div>
            <div 
                class="hot-label"
                v-for="item in hotTitle"
                @click="submitValue(item)"
            >
                {{item.title}}
            </div>
        </div>
        <ul v-show="isShow">
            <li v-for="(item,index) in playlist" class="latest-list" @click="submitData(item)">
                <p id="specialFont">{{index + 1}} | {{item.name}}</p>
                <span><i class="icon iconfont icon-bat2"></i> {{item.ar[0].name}} - {{item.alia[0]}}</span>
                <i class="icon iconfont icon-iconset0481"></i>
            </li> 
        </ul>
    </div>
</template>
<script>
    const hotTitle = [{
        title: '周杰伦'
    },{
        title: 'BIGBANG'
    },{
        title: '说散就散'
    },{
        title: '林俊杰'
    },{
        title: '无问西东'
    },{
        title: '红昭愿'
    },{
        title: '起风了'
    },{
        title: 'Jony J'
    },{
        title: '王杰'
    },{
        title: '想你'
    }]

    import axios from 'axios'
    export default {
        name: 'search',
        data () {
            return {
                playlist: {},
                isShow: false,
                hotTitle,
            }
        },
        methods: {
            getlist(value) {
                if(value != ''){
                    this.isShow = true;
                    axios({
                        methods: 'get',
                        url: 'https://api.imjad.cn/cloudmusic/?type=search&search_type=1&s=' + value
                    })
                    .then((response)=>{
                        this.playlist = response.data.result.songs

                    })
                }else {
                    this.isShow = false;
                }
            },
            submitValue(item){
                axios({
                        methods: 'get',
                        url: 'https://api.imjad.cn/cloudmusic/?type=search&search_type=1&s=' + item.title
                })
                .then((response)=>{
                        this.isShow = true;
                        this.playlist = response.data.result.songs
                })             
            },
             submitData(item){
                 this.$store.commit('updateSongs',item)
             }
        }
    }
</script>
<style>
    #search {
        margin-top: 104px;
    }
    #specialFont {
        font-size: 15px;
    }
    .m-input {
        padding: 15px 10px;
        border-bottom: 1px solid rgba(109, 108, 108, 0.1);
    }
    .input-cover {
        position: relative;
        width: 100%;
        height: 30px;
        padding: 0 30px;
        box-sizing: border-box;
        background: #ebecec;
        border-radius: 30px;
    }
    .hot-search {
        padding: 15px 10px 0;
    }
    .hot-title {
        padding: 0px 0 10px 7px;
        font-size: 13px;
        color: #666;
    }
    .hot-label {
        display: inline-block;
        height: 32px;
        margin-right: 8px;
        margin-bottom: 8px;
        padding: 0 14px;
        font-size: 14px;
        line-height: 32px;
        color: #333;
        border: 1px solid rgb(208, 205, 205);
        border-radius: 15px;
        cursor: pointer;
    }
    .m-input input {
        width: 100%;
        height: 30px;
        line-height: 18px;
        background: transparent;
        font-size: 14px;
        color: #333;
        border: none;
    }
    .m-input input:focus {
        outline:none;
    }
    .icon-search {
        position: absolute;
        color: #c2bfbf;
        font-size: 16px;
        left: 8px;
        top: 6px;
    }
</style>

