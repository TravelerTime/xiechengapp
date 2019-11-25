<!--
 * @Author: your name
 * @Date: 2019-11-06 19:50:02
 * @LastEditTime: 2019-11-15 17:25:39
 * @LastEditors: 王磊
 * @Description: In User Settings Edit
 * @FilePath: \zfbd:\workspace\xclx\src\pages\stroke.vue
 -->
<template>
    <div id="box">
        <div class="tickerImg">
            <mt-swipe :auto="0">
                <mt-swipe-item><img :src="hot.img1"></mt-swipe-item>
                <mt-swipe-item><img :src="hot.img2"></mt-swipe-item>
                <mt-swipe-item><img :src="hot.img3"></mt-swipe-item>
                <!-- <mt-swipe-item><img :src="hot.img"></mt-swipe-item> -->
            </mt-swipe>
        </div>
        <div class="box">
            <div class="scenic_top">
                <div class="theme">
                    <h2>{{hot.name}}</h2>
                    <p>{{hot.introducend}}</p>
                    <ul>
                        <li>每日 18:00闭园</li>
                        <li>| 优惠政策 |</li>
                        <li>景点介绍 ></li>
                    </ul>
                </div>
                <div class="score">
                    <h2>{{hot.score}}</h2>&nbsp;<span class="w">分</span> <br>
                    <span>{{hot.comments}}人评分</span>
                </div>
            </div>
        </div>
        <div class="scenic_center">
            <div class="bb">
                <img src="../assets/img/paihang.png">
                <p>{{hot.place}}景点人气榜  第{{hot.ranking}}名</p>
            </div>
            <div class="jiantou">></div>
        </div>
        <div class="scenic_bottom">
            <div class="bb">
                <img src="../assets/img/dingwei.png">
                <p>{{hot.address}}</p>
            </div>
            <div class="jiantou">></div>
        </div>
        <div class="scenic_bottom foot">
            <div class="bb">
                <p>&nbsp;&nbsp;&nbsp;领劵&nbsp;</p>
                <span>立减 8</span>
            </div>
            <div class="jiantou">></div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    // name: 'ticketDetail',
    props:['detailId'],
    data () {
        return {
            hot:{

            }
        }
    },
    created(){
        //从后端获取数据
        console.log("titck"+this.detailId)
        // axios.get('/Hot/'+this.detailId)
        axios.get('/user/select_goodss/'+this.detailId)
        .then(res=>{
            // this.hot=res.data;
            this.hot=res.data.Hot[0];
        })
        .catch(err=>{
            console.log(err);
        });
  }
}
</script>
<style scoped>
#box{
    overflow: hidden;
    margin-top: .5rem;
}
.tickerImg{
    width: 100%;
    height: 2.5rem;
    background-color: #fff;
}
.tickerImg img{
    width:100%;
    height: 100%;
}
.box{
    width: 100%;
    height: .88rem;
    box-sizing: border-box;
    display: flex;
    background-color: #fff;
}
.scenic_top{
    width:96%;
    height: .8rem;
    box-sizing: border-box;
    display: flex;
    background-color: #fff;
    margin: 8px auto;
}
.theme{
    width: 72%;
    height: 100%;
}
.theme p{
    font-size: 12px;
    line-height: .21rem;
    color: rgb(75, 75, 75);
}
.theme ul,li{
    display: inline;
    font-size: 12px;
    color:rgb(20, 139, 250);
}
.theme li:first-child{
    color:rgb(245, 167, 23);
}
.score{
    width:27%;
    height: .65rem;
    border-left:1px solid rgb(233, 233, 233);
    text-align: center;
}
.score h2{
    display: inline-block;
    margin:5px 0;
    font-size: .22rem;
    color: rgb(20, 139, 250);
}
.score .w{
    font-size: .19rem;
}
.score span{
    font-size: 11px;
    color: rgb(20, 139, 250);
}
.scenic_center{
    width:100%;
    height: .37rem;
    border-top:1px solid rgb(233, 233, 233);
    box-sizing: border-box;
    border-bottom:1px solid rgb(233, 233, 233);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
}
.scenic_center p{
    color: rgb(59, 59, 59);
    display: inline;
}
.scenic_center img{
    width:.24rem;
    margin:0 3px;
}
.scenic_bottom img{
    width:.23rem;
    margin:0 3px;
}
.scenic_bottom p{
    line-height: .15rem;
    color: rgb(59, 59, 59);
}
.scenic_bottom{
    width:100%;
    height: .35rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
}
.foot{
    height: .4rem;
    margin:10px 0;
}
.foot span{
    width: .4rem;
    height: .18rem;
    color:white;
    margin-bottom: 5px;
    background-color: rgb(245, 93, 93);
    font-size: 12px;
    text-align: center;
}
.bb{
    display: flex;
    align-items: center;
}
.jiantou{
    width:.25rem;
    float: right;
    color: rgb(170, 170, 170);
}
</style>