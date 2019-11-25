<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:10:46
 * @LastEditors: 王磊
 * @LastEditTime: 2019-11-15 15:58:45
 * @Description: 
 -->
<template>
<div class="citybox">
    <div class="hot">
        <h3>当前/历史</h3>
        <div class="fiv">
            <div class="smallFiv">
                <p><i class="el-icon-location"></i>西安</p>
            </div>
            <div class="smallFiv sel">
                <p>上海</p>
            </div>
            <div class="smallFiv">
                <p>北京</p>
            </div>
            <div class="smallFiv">
                <p>广州</p>
            </div>
            <div class="smallFiv">
                <p>深圳</p>
            </div>
            <div class="smallFiv">
                <p>香港</p>
            </div>
        </div>
    </div>
     <div class="hot">
        <h3>热门城市</h3>
        <div class="fiv">
            <div class="smallFiv"  v-for="(city,index) in citys" :key="index" >
                 <router-link  :to='"/Index/"+city.c_name'>
                <p class="gn">{{city.c_name}}</p>
                </router-link>
            </div>
        </div>
    </div>
    <div class="hot hotcity">
        <h3>当季必玩</h3>
        <div class="fiv">
            <div class="smallFiv dj">
                <img src="../assets/img/dj1.jpg" alt="">
                <p>乐东</p>
            </div>
            <div class="smallFiv dj">
                <img src="../assets/img/dj2.jpg" alt="">
                <p>琼海</p>
            </div>
            <div class="smallFiv dj">
                <img src="../assets/img/dj3.jpg" alt="">
                <p>陵水</p>
            </div>
            <div class="smallFiv dj">
                <img src="../assets/img/dj4.jpg" alt="">
                <p>上海</p>
            </div>
            <div class="smallFiv dj">
                <img src="../assets/img/dj5.jpg" alt="">
                <p>北京</p>
            </div>
            <div class="smallFiv dj">
                <img src="../assets/img/dj6.jpg" alt="">
                <p>广州</p>
            </div>
        </div>
    </div>  
</div>
</template>
<script>
import axios from 'axios';

export default {
    name:"citylist",
   //props:['typename'],//言情，武侠
    data (){
        return {
            citys:[]
        }
    },
  created() {
     //从后端获取数据     
     axios.get('/user/select_city')
    //  axios.get('/citys')
     .then(res=>{ 
         this.citys = res.data.citys;
        //  this.citys = res.data;
          console.log(this.citys);
     })
     .catch(err=>{
         console.log(err);
     });
  },
}
</script>

<style scoped>
.citybox{
    width: 100%;
    background: white;
    position: relative;
    top: .76rem;
}
.gn{
    color: black;
}
.hot{
    width: 100%;
    background: white;
    margin-bottom: 10px;
}
.hotcity{
     position: relative;
    top: 1.1rem;
}
.citybox .hotcity .dj {
    background: white;
    height: 1.34rem;
}
.hotcity .dj img{
    display: block;
    width: 100%;
    height: 1rem;
    margin-bottom: 4px;
}

.hot h3{
    height: .5rem;
    line-height: .5rem;
    margin-left: 20px;
    font-weight: 100;
}
  .fiv{
    width: 92%;
    height: .6rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
    .fiv .smallFiv{
       width: 31%;
       height: .3rem;
       background: #ebe8e8;
      border-radius: 4px;
      margin-bottom: 8px;
    }
     .fiv .sel {
       width: 31%;
       height: .3rem;
       color: #3385b1;
       background: #e2edf3;
      border-radius: 4px;
      margin-bottom: 8px;
    } 
     .fiv .smallFiv p{
        width: 100%;
        height: .3rem;
        line-height: .3rem;
        text-align: center;
    }
    .fiv .smallFiv i{
       color: #058ae9;
       line-height: .26rem;
       font-size: 16px;
       margin-right: 4px;
    }
  
</style>