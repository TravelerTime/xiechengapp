<!--
 * @Author: your name
 * @Date: 2019-11-06 19:50:02
 * @LastEditTime: 2019-11-15 00:26:58
 * @LastEditors: 王磊
 * @Description: In User Settings Edit
 * @FilePath: \zfbd:\workspace\xclx\src\pages\stroke.vue
 -->
<template>
<div>
    <div id="box">
        <div class="box">
           <div class="scenic">
                <h2>一日游</h2>
            </div>
            <div class="play">
                <ul>
                    <li>
                        <div class="zuo">
                            <img src="../assets/img/play.jpg" alt="">
                        </div>
                        <div class="you">
                            <div class="you_top">
                                <p>西安秦始皇兵马俑博物馆+华清宫+骊山一日游</p>
                            </div>
                            <div class="you_xia">
                                <div class="you_xia1">
                                    <span class="q">赠</span><span>可订今日</span><span>上门接</span><span>立即确认</span>
                                    <p>月销1.2万份</p>
                                </div>
                                <div class="you_xia2">
                                    ￥<p>219</p><span class="s">起</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="zuo">
                            <img :src="this.$store.state.attractionDetail.img">
                        </div>
                        <div class="you">
                            <div class="you_top">
                                <p>西安秦始皇兵马俑博物馆+华清宫+骊山一日游</p>
                            </div>
                            <div class="you_xia">
                                <div class="you_xia1">
                                    <span class="q">赠</span><span>可订今日</span><span>上门接</span><span>立即确认</span>
                                    <p>月销7073份</p>
                                </div>
                                <div class="you_xia2">
                                    ￥<p>239</p><span class="s">起</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="zuo">
                            <img src="../assets/img/play2.jpg" alt="">
                        </div>
                        <div class="you">
                            <div class="you_top">
                                <p>西安秦始皇兵马俑博物馆+华清宫+骊山一日游</p>
                            </div>
                            <div class="you_xia">
                                <div class="you_xia1">
                                    <span class="q">赠</span><span>可订今日</span><span>上门接</span><span>立即确认</span>
                                    <p>月销4513份</p>
                                </div>
                                <div class="you_xia2">
                                    ￥<p>209</p><span class="s">起</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
         <div class="box">
           <div class="scenic">
                <h2>当地玩乐</h2>
                <div class="sss">
                    <div class="ss ss1">
                        旅行服务
                    </div>
                    <div class="ss">
                        当地交通
                    </div>
                    <div class="ss">
                        特色体验
                    </div>
                </div>
            </div>
            <div class="play">
                <ul>
                    <li>
                        <div class="zuo">
                            <img :src="this.$store.state.attractionDetail.img">
                        </div>
                        <div class="you">
                            <div class="you_top">
                                <p>{{this.$store.state.attractionDetail.name}}中文语音讲解（由喜马拉雅提供）</p>
                            </div>
                            <div class="you_xia">
                                <div class="you_xia1">
                                    <span>可订今日</span><span>立即确认</span>
                                    <p>月销97份</p>
                                </div>
                                <div class="you_xia2">
                                    ￥<p>10</p><span class="s">起</span>
                                </div>
                            </div>
                            
                        </div>
                    </li>
                    <li>
                        <div class="zuo">
                            <img :src="this.$store.state.attractionDetail.img">
                        </div>
                        <div class="you">
                            <div class="you_top">
                                <p>{{this.$store.state.attractionDetail.name}}中文语音讲解(由口袋导游提供）</p>
                            </div>
                            <div class="you_xia">
                                <div class="you_xia1">
                                    <span>可订今日</span><span>立即确认</span>
                                    <p>月销97份</p>
                                </div>
                                <div class="you_xia2">
                                    ￥<p>5</p><span class="s">起</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="zuo">
                            <img :src="this.$store.state.attractionDetail.img">
                        </div>
                        <div class="you">
                            <div class="you_top">
                                <p>{{this.$store.state.attractionDetail.name}}中文语音讲解(由三毛游手机提供)</p>
                            </div>
                            <div class="you_xia">
                                <div class="you_xia1">
                                    <span>可订今日</span><span>立即确认</span>
                                    <p>月销36份</p>
                                </div>
                                <div class="you_xia2">
                                    ￥<p>7</p><span class="s">起</span>
                                </div>
                            </div>
                            
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
    
</template>
<script>
import axios from 'axios';
export default {
    name: 'playDetail',
    props:['detailId'],
    data () {
        return {
            hot:{

            }
        }
    },
    created(){
        // console.log(this.detailId);
        // //从后端获取数据
        // axios.get('/Hot/'+this.detailId)
        // .then(res=>{
        //     console.log(res.data);
        //     this.hot=res.data;
        //     console.log(this.hot);
        // })
        // .catch(err=>{
        //     console.log(err);
        // });
  }
}
</script>
<style scoped>
#box{
    width: 100%;
    background-color: #fff;
    margin-bottom:.6rem; 
}
.box{
    width:96%;
    background-color: #fff;
    margin: 0 auto;
    margin-bottom: 10px;
}
.scenic{
    width: 100%;
}
.scenic h2{
    line-height: .5rem;
}
.sss{
    display: flex;
    align-items: center;
    margin-bottom: 14px;
}
.ss{
    width: 25%;
    height: .35rem;
    color:black;
    border-radius: 5px;
    line-height: .35rem;
    text-align: center;
    font-size: 13px;
    border:1px solid rgb(231, 231, 231);
    margin-right: 7px;
}
.ss1{
    background-color: rgb(59, 144, 255);
    color:white;
}
li{
    width: 100%;
    height: 1rem;
    border-bottom:1px solid rgb(231, 231, 231);
    padding-bottom: .14rem;
    padding-top: .14rem;
}
.zuo{
    width: 35%;
    height: 100%;
    background-color: rgb(247, 245, 148);
    float: left;
}
.zuo img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
}
.you{
    width: 63%;
    height: 100%;
    float: right;
    margin-left:5px; 
}
.you_top{
    width: 100%;
    height: 50%;
     margin:5px 0;
}
.you_top p{
    font-size: .15rem;
    line-height: .24rem;
}
.you_xia1{
    width: 69%;
    height: 100%;
    float: left;
}
.you_xia1 span{
    border:1px solid rgb(190, 218, 255);
    color: rgb(85, 153, 243);
    margin-right:4px;
    font-size: 10px;
}
.you_xia1 .q{
    border:1px solid rgb(245, 220, 153);
    color: rgb(255, 136, 0);
}
.you_xia1 p{
    color: rgb(145, 145, 145);
    margin-top:3px;
    font-size: 12px;
}
.you_xia2{
    width: 29%;
    height: 100%;
    float: right;
    margin-top:.15rem;
    color: rgb(255, 136, 0);
    text-align: right;
}
.you_xia2 p{
    font-size: .18rem;
    display: inline;
    color: rgb(252, 93, 1);
}
.s{
    font-size: 12px;
    color:rgb(95, 95, 95);
}
</style>