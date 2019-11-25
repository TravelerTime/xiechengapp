<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:10:46
 * @LastEditors: 钱端工程师
 * @LastEditTime: 2019-11-10 22:37:56
 * @Description: 
 -->
<template>
<div class="waibox">
    <div class="top">
        <router-link to="/MePage">
       <div class="wx"><img src="../assets/ico/wx.png" alt="">
        </div> </router-link>
        <router-link to="/MePage">
         <div class="wx"><img src="../assets/ico/qq.png" alt="">
        </div></router-link>
         <div class="wx"><img src="../assets/ico/sss.png" alt="">
        </div>
    </div>
    <div class="bot">
        <span style="border:none;">登录即代表您同意我们的</span>
        <span>《服务协议》</span>和<span>《隐私政策》</span>
    </div>
</div>
</template>
<script>
export default {
    name:"denglu3",
    data (){
        return {
           
        }
    }
    
}
</script>

<style scoped>
.waibox{
    width: 90%;
    margin: 0 auto;
}
.top{
    display: flex;
    justify-content: space-around;
    margin-bottom: 26px;
}
.top .wx{
    width: .6rem;
    height: .6rem;
    border-radius: 50%;
    border:1px solid #dddcdc;
}
.top img{
    width: .3rem;
    height: .3rem;
    margin: auto; 
    margin-top: .15rem;
}
.bot{
    font-size: 12px;
    text-align: center;
    color: #888;
}
.bot span{
    border-bottom:1px solid #888;
}
</style>