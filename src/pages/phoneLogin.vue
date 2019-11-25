<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:12:30
 * @LastEditors: 安菲
 * @LastEditTime: 2019-11-15 15:58:16
 * @Description: 
 -->
<template>
    <div class="bigbox">
        <phoneloginback></phoneloginback>
        <phonelogin></phonelogin>
    </div>
</template>
<script>
import phoneloginback from '../components/phoneloginback';
import phonelogin from '../components/phonelogin';
export default {
    name:"HelloWorld",
    data (){
        return{

        }
    },
    components:{
        phoneloginback,phonelogin
    }
}
</script>
<style scoped>
.bigbox{
    height: 100%;
    background: white;
}
</style>