<!--
 * @Author: your name
 * @Date: 2019-11-06 19:50:02
 * @LastEditTime: 2019-11-13 20:10:01
 * @LastEditors: 王磊
 * @Description: In User Settings Edit
 * @FilePath: \zfbd:\workspace\xclx\src\pages\stroke.vue
 -->
<template>
<div>
    <div id="box">
        <div class="box">
           <div class="scenic">
                <h2>门票+交通</h2>
            </div>
            <div class="scenic_top">
                <div class="theme">
                    <p>
                        成人票:{{seachs.name}}门票+{{seachs.place}}市区至景区往返直通车(直通车(早/午班可选) )
                    </p>
                    <ul>
                        <li>最早可订明日票</li>
                        <li>有条件退</li>
                    </ul>
                    <span>已售5000+ |  &nbsp;购买须知 ></span>
                </div>
                <div class="score">
                    ￥<h2>138</h2><span class="s">起</span>
                    <div class="Booking">
                        <span>立即预订</span>
                    </div>
                </div>
            </div>
            <div class="scenic_top">
                <div class="theme">
                    <p>
                        优待票:(不含{{seachs.name}}门票)·{{seachs.name}}门票+{{seachs.place}}市区至景区往返直通车(直通车(早/午班可选) )
                    </p>
                    <ul>
                        <li>最早可订明日票</li>
                        <li>有条件退</li>
                    </ul>
                    <span>已售1000+ |  &nbsp;购买须知 ></span>
                </div>
                <div class="score">
                    ￥<h2>18</h2><span class="s">起</span>
                    <div class="Booking">
                        <span>立即预订</span>
                    </div>
                </div>
            </div> 
        </div>
    </div>
     <div id="box">
        <div class="box">
           <div class="scenic">
                <h2>多景点联票</h2>
                <div class="sss">
                    <div class="ss ss1">
                        兵马俑+华清宫
                    </div>
                    <div class="ss">
                        兵马俑+VR影院
                    </div>
                    <div class="ss">
                        兵马俑+秦陵地宫
                    </div>
                </div>
            </div>
            <div class="scenic_top">
                <div class="theme">
                    <p>成人票</p>
                    <ul>
                        <li>最早可订明日票</li>
                        <li>有条件退</li>
                    </ul>
                    <span>已售4000+ |  &nbsp;购买须知 ></span>
                </div>
                <div class="score">
                    ￥<h2>235</h2>
                    <div class="Booking">
                        <span>立即预订</span>
                    </div>
                </div>
            </div>
            <div class="scenic_top">
                <div class="theme">
                    <p><span class="tj">携程推荐</span> 成人票（提前一天）</p>
                    <ul>
                        <li>最早可订明日票</li>
                        <li>有条件退</li>
                    </ul>
                    <span>已售2.9万+ |  &nbsp;购买须知 ></span>
                </div>
                <div class="score">
                    ￥<h2>225</h2>
                    <div class="Booking">
                        <span>立即预订</span>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</div>
    
</template>
<script>
import axios from 'axios';
export default {
    name: 'attractionDetail2',
    props:['name'],
    data () {
        return {
            seachs:{

            }
        }
    },
    created(){
        console.log(this.$router.seachlist.name);
        //从后端获取数据
        axios.get('/seachlist/'+this.$router.seachlist.name)
        .then(res=>{
            console.log(res.data);
            this.seachs=res.data;
        })
        .catch(err=>{
            console.log(err);
        });
  }
}
</script>
<style scoped>
#box{
    width: 100%;
    background-color: #fff;
    margin-bottom:10px; 
}
.box{
    width:96%;
    background-color: #fff;
    margin: 0 auto;
}
.scenic{
    width: 100%;
}
.scenic h2{
    line-height: .5rem;
    margin-bottom: 10px;
}
.sss{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10px;
}
.ss{
    width: 30%;
    height: .35rem;
    color:black;
    border-radius: 5px;
    line-height: .35rem;
    text-align: center;
    font-size: 13px;
    border:1px solid rgb(231, 231, 231);
}
.ss1{
    background-color: rgb(59, 144, 255);
    color:white;
}
.scenic_top{
    width:100%;
    box-sizing: border-box;
    display: flex;
    background-color: #fff;
    border-top:1px solid rgb(233, 233, 233);
    padding-bottom: 10px;
}
.theme{
    width: 67%;
    height: 100%;
    margin:7px 0;
    margin-right: 18px;
}
.theme p{
    line-height: .22rem;
    margin-bottom: 6px;
}
.theme ul,li{
    font-size: 12px;
    color:rgb(20, 139, 250);
    line-height: .20rem;
}
.theme li:last-child{
    color:rgb(245, 167, 23);
}
.theme span{
    font-size: 12px;
    color: rgb(54, 54, 54);
}
.theme .tj{
    background-color: rgb(255, 30, 86);
    color: #fff;
    font-size: 11px;
}
.score{
    width:25%;
    height: 100%;
    text-align: right;
    color: rgb(252, 93, 1);
    margin-top:.25rem; 
    margin-bottom:5px; 
}
.score h2{
    display: inline;
    line-height: .4rem;
}
.score .s{
    font-size: 12px;
    color:rgb(95, 95, 95);
}
.Booking{
    width: .9rem;
    height: .35rem;
    background-color: rgb(255, 156, 42);
    text-align: center;
    line-height: .36rem;
    border-radius: 6px;
}
.score span{
    color: #fff;
    font-size: 14px;
}
</style>