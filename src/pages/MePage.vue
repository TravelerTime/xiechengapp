<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:12:30
 * @LastEditors: 钱端工程师
 * @LastEditTime: 2019-11-10 23:53:36
 * @Description: 
 -->
<template>
    <div class="bigbox">
        <me1 style="position:fixed;" :cityname="this.$route.params.name"></me1>
        <div class="shengbei">
           <me2></me2>
           <me3></me3>
        </div>
        <footbox style="position:fixed; z-index:10;bottom:0;"></footbox>
    </div>
</template>
<script>
import me1 from '../components/me1';
import me2 from '../components/me2';
import me3 from '../components/me3';
import footbox from '../components/footbox';
export default {
    name:"HelloWorld",
    data (){
        return{
            
        }
    },
    components:{
       me1,me2,me3,footbox
    }
}
</script>
<style scoped>
.bigbox{
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 100%;
    background: #f3f3f3;
}
  .shengbei{
      flex: 1;
      overflow-y: auto;
  }
  body{
    background: #f3f3f3;
  }
</style>