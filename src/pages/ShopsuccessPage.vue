<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:12:30
 * @LastEditors: 钱端工程师
 * @LastEditTime: 2019-11-11 17:10:16
 * @Description: 
 -->
<template>
   <div class="bigbox">
        <shopsuccess0 style="position:fixed;"></shopsuccess0>
        <div class="shengbei">
           <shopsuccess1></shopsuccess1>
           <shopsuccess2></shopsuccess2>
        </div>
        <shopsuccess3 style="position:fixed; z-index:10;bottom:0;"></shopsuccess3>
    </div>
</template>
<script>
import shopsuccess0 from '../components/shopsuccess0';
import shopsuccess1 from '../components/shopsuccess1';
import shopsuccess2 from '../components/shopsuccess2';
import shopsuccess3 from '../components/shopsuccess3';

export default {
    name:"HelloWorld",
    data (){
        return{
            
        }
    },
    components:{
       shopsuccess0,
       shopsuccess1,
       shopsuccess2,
       shopsuccess3
    }
}
</script>
<style scoped>
.bigbox{
    display: flex;
    flex-direction: column;
    height: 100%;
    background: #fafafc;
}
  .shengbei{
      flex: 1;
      overflow-y: auto;
  }
</style>