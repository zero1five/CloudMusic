<template>
    <div id="firstScreen">
        <div class="header">
            <p>{{msg}} | <i class="icon iconfont icon-juzhuanchang"></i></p>
            <i class="icon iconfont icon-wxbsousuotuiguang"></i>
        </div>
        <tab v-on:receive="changeValue"></tab>
        <div id="oneScreen">
            <recommended></recommended>
            <latest></latest>
        </div>
        <div id="twoScreen" style="display:none">
            <hot-song></hot-song>
        </div>
        <div id="threeScreen" style="display:none">
            <search></search>
        </div>
        <div id="fourScreen" style="display:none">
            <p>1.0版本的网易云SPA</p>
            <p>- Vue / Vuex / Vue-router / Vue-cli </p>
            <p>- Axios / Easy-Mock</p>
            <p>完成了:<br />
               - 使用Vuex集中管理数据层，减少 Ajax 请求<br />
               - vue-router管理单页面应用路由<br />
               - 使用Easy-Mock 模拟部分数据，实现前后端数据分离<br/>
               - Axios 基于 Promise 对象，实现 Ajax 请求<br/>
               - 引入 fastclick 插件，解决移动端 click 事件的 300ms 延迟
            </p>
            <br/>
            <p>后续改进:<br />
               - 实现上下回弹效果，更接近 native app 效果<br />
               - 完善player组件<br />
               - 抽离原生JS代码.....<br/>
            </p>
            <br/>
            <p>
                <a href="https://zhuanlan.zhihu.com/p/30246788" style="color:#B9A7C2;">API来源</a> - 感谢CeuiLiSA大神
            </p>
        </div>
    </div>
</template>
<script>
    import Tab from '@/components/tab'   // 引入tab组件
    import Recommended from '@/components/firstScreen/recommended' // 引入推荐歌单组件
    import Latest from '@/components/firstScreen/latest'  // 引入最新音乐组件
    import HotSong from '@/components/hotSong'  // 热歌榜
    import Search from '@/components/search'   // 搜索

    export default {
        name: 'firstScreen', //这个name要和其他文件引入的名字一样
        data () {
            return {
                msg: '网易云音乐',
            }
        },
        components: {
            Tab, //注册 => 然后在template中使用标签
            Recommended,
            Latest,
            HotSong,
            Search
        },       
        methods: {
            changeValue(data) {
                if(data === 0){
                    document.getElementById('oneScreen').style.display = 'block';
                    document.getElementById('twoScreen').style.display = 'none';
                    document.getElementById('threeScreen').style.display = 'none';
                    document.getElementById('fourScreen').style.display = 'none';

                }
                if(data === 1){
                    document.getElementById('oneScreen').style.display = 'none';
                    document.getElementById('twoScreen').style.display = 'block';
                    document.getElementById('threeScreen').style.display = 'none';
                    document.getElementById('fourScreen').style.display = 'none';
                }
                if(data === 2){
                    document.getElementById('oneScreen').style.display = 'none';
                    document.getElementById('twoScreen').style.display = 'none';
                    document.getElementById('threeScreen').style.display = 'block';
                    document.getElementById('fourScreen').style.display = 'none';
                }
                if(data === 3){
                    document.getElementById('oneScreen').style.display = 'none';
                    document.getElementById('twoScreen').style.display = 'none';
                    document.getElementById('threeScreen').style.display = 'none';
                    document.getElementById('fourScreen').style.display = 'block';
                }              
            }
        } 
    }
</script>
<style>
    .header {
        width: 100%;
        height: 64px;
        background: #d43c33;
        line-height: 64px;
        position: fixed;
        top: 0;
        z-index: 1;
    }
    .header p {
        font-size: 19px;
        font-weight: bold;
        color: #fff;
        display: inline-block;
        padding: 0 0 0 25px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    .icon-wxbsousuotuiguang {
        float: right;
        margin-right: 15px;
        color: #fff;
        font-weight: bold;
    }
    ::-webkit-scrollbar{
    display:none;
    }
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
    #fourScreen {
        margin-top: 124px;
        padding: 10px;
        color: #D3BD74;
        line-height: 25px;
        font-size: 15px;
        text-indent: 5px;
    }  
    a:link,a:visited,a:hover,a:active {
        text-decoration: none;
    } 
</style>
