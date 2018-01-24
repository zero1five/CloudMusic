import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'  // 引入axios 模块

Vue.use(Vuex)

//定义一个容器  可以直接暴露出去 不需要定义一个变量

export default new Vuex.Store({
    state: {
        songs: {},
        playAddress: {},
        hotComments: {}
    },
    mutations: {
        updateSongs(state,data){
            // mutations 更新数据
            this.state.songs = data;
            //获取歌曲播放地址
            axios.get('https://api.imjad.cn/cloudmusic/?type=song&id=' + data.id)
            .then((response)=>{

                    // 歌曲的播放地址 
                    this.state.playAddress = response.data.data[0].url
                    // 获取歌曲评论信息
                    axios.get('https://api.imjad.cn/cloudmusic/?type=comments&id=' + response.data.data[0].id)
                    .then((response)=>{
                        //储存到state里 再分发到player组件的计算属性内
                        this.state.hotComments = response.data.hotComments
                    })
            });  
        }
    }, /* action提交异步操作 这里直接写成同步的 actions=>mutations 太麻烦了 */
})
