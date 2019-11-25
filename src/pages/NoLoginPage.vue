<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:12:30
 * @LastEditors: 钱端工程师
 * @LastEditTime: 2019-11-10 16:41:08
 * @Description: 
 -->
<template>
    <div class="bigbox">
        <nologin1></nologin1>
        <nologin2></nologin2>
        <footbox style="position:fixed; z-index:10;bottom:0;"></footbox>
    </div>
</template>
<script>
import nologin1 from '../components/nologin1';
import nologin2 from '../components/nologin2';

import footbox from '../components/footbox';
export default {
    name:"HelloWorld",
    data (){
        return{

        }
    },
    components:{
       nologin1,nologin2,footbox
    },
}
</script>
<style scoped>
.bigbox{
     height: 100%;
    background: #e7e5e5;
}
  
</style>