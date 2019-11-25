<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:10:46
 * @LastEditors: 钱端工程师
 * @LastEditTime: 2019-11-15 16:29:57
 * @Description: 
 -->
<template>
    <div class="welbox">
        <div class="welTop">
            <div class="pic">
                <img src="../assets/ico/tq.png" alt="">
                <span>9℃</span>
            </div>
            <h3>您好,欢迎来到{{citys.name}}</h3>
        </div>
        <div class="welBot">
            <div class="more">
                <p>排行榜</p>
                <span>更多 ></span>
            </div>
            <div class="box">
                <div class="there" >
                    <img :src="citys.img1" alt="">
                    <ul>
                        <li><span style="color:#d2303b">1</span>{{citys.one1}}</li>
                        <li><span>2</span>{{citys.one2}}</li>
                        <li><span>3</span>{{citys.one3}}</li>
                    </ul>
                    </div> 
                <div class="there" >
                    <img :src="citys.img2" alt="">
                    <ul>
                        <li><span style="color:#d2303b">1</span>{{citys.two1}}</li>
                        <li><span>2</span>{{citys.two2}}</li>
                        <li><span>3</span>{{citys.two3}}</li>
                    </ul>
                    </div> 
                <div class="there" >
                    <img :src="citys.img3" alt="">
                    <ul>
                        <li><span style="color:#d2303b">1</span>{{citys.there1}}</li>
                        <li><span>2</span>{{citys.there2}}</li>
                        <li><span>3</span>{{citys.there3}}</li>
                    </ul>
                </div> 
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
           citys:[]
        }
    },
     props:['cityname'],
    created() {
     //从后端获取数据     
     axios.get('/user/select_city_by_list?c_name='+this.cityname)
    //  axios.get('/citys')

     .then(res=>{ 
        //  let more = res.data;
         this.citys = res.data.citys[0];
         console.log(res.data.citys[0].one1)
        //  for(var i =0;i<more.length;i++){
        //     if(more[i].name==this.cityname){
        //             this.citys = more[i];
        //             break;
        //         }
        //  }
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
    top:-.55rem;
    margin-top:10px;
  }
  .welTop{
      width: 100%;
      height: .26rem;
      display: flex;
  }
   .welTop .pic{
       width: 30%;
       height: 100%;
       display: flex;
       margin-left: 6px;
   } 
   .welTop .pic span{
      font-size: 12px;
      display: inline-block;
      height: .26rem;
      line-height: .26rem;
   } 
   .welTop .pic img{
       width: .24rem;
       height: .24rem;
   }
   .welBot{
       width: 96%;
       margin: 10px auto;
       background: white;
       border-radius: 10px;
       box-shadow: 0 2px 6px rgba(0,0,0,.08);
       padding-bottom: .01rem;
   }
   .welBot .more{
       display: flex;
       height: .28rem;
       justify-content: space-between;
       padding: 10px 8px;
   }
    .welBot .more p{
       font-size: 16px;
       color: #444;
       height: .28rem;
       line-height: .28rem
   }
    .welBot .more span{
       font-size: 12px;
       color: #b1b1b1;
         height: .28rem;
       line-height: .28rem
   }
   .there{
       width:96%;
       margin: 0 auto;
       background: #f7f6fc;
       height: 1rem;
       display: flex;
       border-radius: 6px;
       margin-bottom: .12rem;
   }
   .there img{
       width:1.5rem;
       height: 100%;
       margin-right: 20px;
   }
    .there ul li{
      line-height:.32rem;
   }
   .there ul li span{
       color: #c5844e;
       margin-right: 6px;
   }
</style>