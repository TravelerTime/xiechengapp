<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:12:30
 * @LastEditors: 王磊
 * @LastEditTime: 2019-11-13 10:15:16
 * @Description: 
 -->
<template>
    <div class="bigbox">
        <zhuce1></zhuce1>
        <zhuce2></zhuce2>
        <!-- <zhuce3></zhuce3> -->
    </div>
</template>
<script>
import zhuce1 from '../components/zhuce1';
import zhuce2 from '../components/zhuce2';
// import zhuce3 from '../components/zhuce3';
export default {
    name:"HelloWorld",
    data (){
        return{

        }
    },
    components:{
       zhuce1,
       zhuce2
    //    zhuce3
    }
}
</script>
<style scoped>
.bigbox{
    height: 100%;
    background: white;
}
</style>