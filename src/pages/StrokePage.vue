<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:12:30
 * @LastEditors: 钱端工程师
 * @LastEditTime: 2019-11-11 11:46:57
 * @Description: 
 -->
<template>
    <div class="bigbox">
        <stroke1></stroke1>
        <stroke2></stroke2>
        <stroke3></stroke3>
        <stroke4></stroke4>
         <footbox style="position:fixed; z-index:10;bottom:0;"></footbox>
    </div>
</template>
<script>
import stroke1 from '../components/stroke1';
import stroke2 from '../components/stroke2';
import stroke3 from '../components/stroke3';
import stroke4 from '../components/stroke4';
import footbox from '../components/footbox';

export default {
    name:"HelloWorld",
    data (){
        return{
            
        }
    },
    components:{
       stroke1,stroke2,stroke3,stroke4,footbox
    },
}
</script>
<style scoped>
.bigbox{
    background: white;
    height: 100%;
}
</style>