<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:10:46
 * @LastEditors: 安菲
 * @LastEditTime: 2019-11-15 15:57:36
 * @Description: 
 -->
<template>
<div class="waibox">
    <div class="sea">
        <i class="el-icon-arrow-left" @click="back()"></i>
    </div>
   
</div>
</template>
<script>
export default {
    name:"denglu1",
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
}
.sea{
    display: flex;
    justify-content: space-between;
    padding: 18px 16px 0 16px;
}
.sea i{
    font-size: 18px;
    color: black;
}
</style>