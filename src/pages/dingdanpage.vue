<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:12:30
 * @LastEditors: 钱端工程师
 * @LastEditTime: 2019-11-16 05:45:15
 * @Description: 
 -->
<template>
    <div class="bigbox">
        <dingdan1 style="position:fixed;"></dingdan1>
        <div class="shengbei">
            <dingdan2></dingdan2>
            
        </div>
        <!-- <footbox style="position:fixed; z-index:10;bottom:0;"></footbox> -->
    </div>
</template>
<script>
import dingdan1 from '../components/dingdan1';
import dingdan2 from '../components/dingdan2';
export default {
    name:"HelloWorld",
    data (){
        return{
            
        }
    },
    components:{
       dingdan1,
       dingdan2
    },
    // mounted(){
    //     // 获取name
    //     console.log(this.$route.params.c_name)
    // }
}
</script>
<style scoped>
.bigbox{
    display: flex;
    flex-direction: column;
    height: 100%;
    background: white;
}
  .shengbei{
      flex: 1;
      overflow-y: auto;
  }
</style>