<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:10:46
 * @LastEditors: 钱端工程师
 * @LastEditTime: 2019-11-11 17:14:08
 * @Description: 
 -->
<template>
<div class="waibox">
    <div class="sea">
        <i class="el-icon-arrow-left" @click="back()"></i>
        <p>订单详情</p>
         <!-- <router-link to="/ZhucePage">
        </router-link> -->
        <img src="../assets/ico/zx.jpg" alt="">
    </div>
</div>
</template>
<script>
export default {
    name:"shopsuccess1",
    data (){
        return {
           
        }
    },
     methods:{
      back(){
          this.$router.go(-1);
      }
  }
}
</script>

<style scoped>
.waibox{
    width: 100%;
    background: #007af5;
    height: .6rem;
    z-index: 10;
}
.sea{
    display: flex;
    justify-content: space-between;
    padding: 18px 16px 0 16px;
}
.sea i{
    font-size: 18px;
    color: white;
}
.sea p{
    font-size: 16px;
    color: white;
}
.sea img{
   width: .22rem;
   margin-top: -.1rem;
}
</style>