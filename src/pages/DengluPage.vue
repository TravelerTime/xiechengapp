<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:12:30
 * @LastEditors: 钱端工程师
 * @LastEditTime: 2019-11-10 17:11:38
 * @Description: 
 -->
<template>
    <div class="bigbox">
        <denglu1></denglu1>
        <denglu2></denglu2>
        <denglu3></denglu3>
    </div>
</template>
<script>
import denglu1 from '../components/denglu1';
import denglu2 from '../components/denglu2';
import denglu3 from '../components/denglu3';
export default {
    name:"HelloWorld",
    data (){
        return{

        }
    },
    components:{
       denglu1,
       denglu2,
       denglu3
    }
}
</script>
<style scoped>
.bigbox{
    height: 100%;
    background: white;
}
</style>