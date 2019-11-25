<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:10:46
 * @LastEditors: 钱端工程师
 * @LastEditTime: 2019-11-16 05:38:09
 * @Description: 
 -->
<template>
<div class="waibox">
    <div class="sea">
        <div class="seaLeft">
            <i class="el-icon-arrow-left" @click="back()"></i>
        </div>
        <p style="font-size:16px;">全部订单</p>
        <span>手机查单</span>   
    </div>
    <h2>打开行程，规划您的精彩旅行</h2>
</div>
</template>
<script>
export default {
    name:"dingdan1",
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
    background:white;
    height: .46rem;
    box-shadow: 0 2px 6px rgba(0,0,0,.08);
}
.waibox h2{
    font-weight: 100;
    background: pink;
    width: 100%;
    height: .3rem;
    font-size: 12px;
    line-height: .3rem;
    padding-left: 10px;
}
  .sea{
    margin: 0 auto;
    width: 95%;
    height: .5rem;
    display: flex;
    z-index: 10;
    justify-content: space-between;
    align-items: center;
  }
    
   
</style>