<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:10:46
 * @LastEditors: 钱端工程师
 * @LastEditTime: 2019-11-10 17:46:14
 * @Description: 
 -->
<template>
<div class="waibox">
    <div class="sea">
        <i class="el-icon-arrow-left" @click="back()"></i>
         <router-link to="/ZhucePage">
            <p style="color:black;">注册</p>
        </router-link>
        
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
.sea p{
    font-size: 16px;
}
  
</style>