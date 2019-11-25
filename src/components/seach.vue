<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:10:46
 * @LastEditors: 钱端工程师
 * @LastEditTime: 2019-11-15 22:26:21
 * @Description: 
 -->
<template>
    <div class="sea">
        <div class="seaLeft">
            <router-link to="/CityPage">
            <p><span id="city">{{cityname}}</span><i class="el-icon-arrow-down"></i></p></router-link>
        </div>
        <div class="seaCen">
            <img src="../assets/ico/ss.png" alt="">
             <router-link to="/SeachPage">
             <input type="text" placeholder="请输入城市或景点"/>
             </router-link>
             <i class="el-icon-microphone" style="font-size:20px;"></i>
        </div>
        <div class="seaRig">
            <!-- <img src="../assets/ico/dh.png" alt=""> -->
            <i class="el-icon-chat-line-round"></i>
        </div>
    </div>
</template>
<script>
export default {
    name:"seach",
    data (){
        return {
           
        }
    },
    props:[
        "cityname"
    ],
    mounted(){
        console.log("页面加载完成");
       
        if(this.cityname==null){
            return document.getElementById("city").innerHTML='西安';
        }else{
            document.getElementById("city").innerHTML=this.cityname;
        }

    }
}
</script>

<style scoped>
  .sea{
    background:white;
    margin: 0 auto;
    width: 100%;
    height: .44rem;
    display: flex;
    color: black;
    /* background:rgba(200, 54, 54, 0); */
    z-index: 10;
  }
    .seaLeft{
        height: 100%; 
        display: flex;
        padding-left: 8px;
    }
        .seaLeft p{
           font-size: 14px;
           color: black;
          line-height: .44rem;
          height: .44rem;
          margin-right: 8px;
        }
        .seaLeft i{
            font-size: .16rem;
            height: .24rem;
            margin-left: 4px;
        }
    .seaCen{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 70%;  
        background: #ececec;
        height: .26rem;
        border: 0;
        border-bottom-right-radius: .13rem;
        border-bottom-left-radius: .13rem;
        border-top-left-radius: .13rem;
        border-top-right-radius: .13rem;
        margin: auto 0;
        padding: 0 2px;
    }
      .seaCen img{
         width: .24rem;
    }
    .seaCen input{
        padding-left: 4px;
       width: 70%;
       margin: auto 0;
       border: none;
       outline: none;
        background: #ececec;
    } 
     .seaRig{
        width: 10%;  
        height:.26rem;
        margin: auto 0;
    }
     .seaRig i{
       margin-left: 6px;
         color: black;
         font-size: .2rem;
         line-height:.26rem; 
         margin-left: .1rem;

        }
</style>