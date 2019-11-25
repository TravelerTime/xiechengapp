<!--
 * @Author: 安菲
 * @Date: 2019-11-11 20:02:13
 * @LastEditors: 安菲
 * @LastEditTime: 2019-11-12 21:37:31
 * @Description: 
 -->
<template>
<div class="waibox">
    <div class="sea">
        <i class="el-icon-arrow-left" @click="back()"></i>
        <p>新增出行人</p>
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
    background: #ffffff;
    height: .5rem;
    z-index: 10;
    border-bottom: 1px solid rgb(231, 231, 231);
}
.sea{
    padding: 15px 16px 0 16px;
}
.sea i{
    width: 39%;
    font-size: .22rem;
    color: rgb(0, 0, 0);
    float: left;
}
.sea p{
    font-size: .18rem;
    color: rgb(0, 0, 0);
}
.sea img{
   width: .22rem;
   margin-top: -.1rem;
}
</style>
