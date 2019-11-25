<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:10:46
 * @LastEditors: 王磊
 * @LastEditTime: 2019-11-15 21:28:36
 * @Description: 
 -->
<template>
    <div class="welbox">
        <div class="welBot">
            <div class="more">
                <p>全部</p>
                <p style="color:#0285f7;border-bottom:3px solid #0285f7;">景点门票</p>
                <p>酒店</p>
                <p>跟团游</p>
                <p>自由行</p>
                <p>一日游</p>
                <p>美食</p>
                <p>当地向导</p>
                <p>购物</p>
                <p>文章</p>
                <p>精选榜</p>
            </div>
            <div class="xingji">
                <p>景点星级<i class="el-icon-caret-bottom"></i></p>
                <p>景点城市<i class="el-icon-caret-bottom"></i></p>
                <p>智能排序<i class="el-icon-caret-bottom"></i></p>
            </div>
            <div class="box">
               <router-link to="/Detailspage">
                    <div class="there"  v-for="(item,index) in seachs" :key="index" >
                        <img :src="item.img1" alt="">
                        <ul>
                            <li><h3>{{item.name}}</h3></li>
                            <li><span style="color:#3189c8;font-weight:800;font-size:18px;margin-right:8px;">{{item.score}}分</span>{{item.comments}}条评论<span>|&nbsp;{{item.sea}}</span> </li>
                            <li style="color:#6cb7e1;margin-top:3px;">"{{item.introducend}}"</li>
                            <li style="color:#d4595c;">{{item.place}}景点人气榜第{{item.ranking}}名</li>
                            <li>距市中心{{item.juli}}公里</li>
                            <li><span style="margin-right:62px;font-size:16px;">{{item.place}}·中国</span><span style="color:#ff6300;font-size:18px;margin-right:4px;"> ￥{{item.price}}</span>起</li>
                        </ul>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:"welcome",
    data (){
        return {
           seachs:[]
        }
    },
     props:[
        "listtype"
    ],
    created() {
     //从后端获取数据     
    //  axios.get('/Hot')
     axios.get('/user/select_goodsa')
     
     .then(res=>{ 
         let more = res.data.Hot;
         console.log(more)
        //  console.log(this.listtype);
         for(var i =0;i<more.length;i++){
            if(more[i].sea==this.listtype){
                    this.seachs.push(more[i]);
                    console.log(this.seachs)
                    break;
                }
         }
     })
     .catch(err=>{
         console.log(err);
     });
  },
}
</script>
<style scoped>
  .welbox{
    width: 100%;
    position: relative;
    top:.3rem;
    margin-top:10px;
  }
   .welBot{
       width:100%;
   }
   .welBot .more{
       display: flex;
       height: .28rem;
       width:100%;
       white-space: nowrap;
       overflow-x: auto;
       margin: 15px 0;
       border-bottom: 2px solid #eeeeee;
   }
   .welBot .more::-webkit-scrollbar {
        display: none;
    }
    .welBot .more p{
       margin: 0 10px;
       font-size: 16px;
       color: black;
   }
    .welBot .more span{
       font-size: 12px;
       color: #b1b1b1;
         height: .28rem;
       line-height: .28rem
   }
   .xingji{
       display: flex;
       justify-content: space-around;
       margin-bottom: 20px;
   }
   .there{
       width:100%;
       display: flex;
       border-radius: 6px;
       margin-bottom: .12rem;
   }
   .there img{
       width:1.5rem;
       height: 1.4rem;
       margin-right: 10px;
       border-radius: 6px;
   }
   ul{
       width: 60%;
       padding-bottom: 6px;
       border-bottom:1px solid rgb(216, 214, 214);
   }
   ul li{
       height: .23rem;
   }
   
</style>