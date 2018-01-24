<template>
    <div class="tab">
        <ul>
            <li 
                :class="{'active': index === current}" 
                v-for="(item,index) in list"
                @click="tab(index)"
            >{{item}}
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'Tab', //这个name要和其他文件引入的名字一样
        data () {
            return {
                list: ['推荐音乐','热歌榜','搜索','Echoes'],
                 current: 0,
            }
        },
        methods: {
            tab(index){
                this.current = index;
                this.$emit('receive',index)
            }
        }
        
    }
</script>
<style>
    .tab {
        width: 100%;
        height: 40px;
        background: #fff;
        border-bottom: 2px solid #ede9e9;
        position: fixed;
        top: 64px;
        z-index: 1;
    }
    .tab li {
        width: 25%;
        display: inline-block;
        text-align: center;
        line-height: 40px;
        font-size: 13px;
        color: #363652;
        cursor: pointer;
        list-style: none;
        font-weight: 500;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .active {
        border-bottom: 2px solid #ef4136;
        color: #d33a31;
    }
</style>
