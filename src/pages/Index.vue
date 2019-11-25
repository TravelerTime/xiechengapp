<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:12:30
 * @LastEditors: 钱端工程师
 * @LastEditTime: 2019-11-15 16:22:15
 * @Description: 
 -->
<template>
    <div class="bigbox">
        <seach style="position:fixed;" :cityname="this.$route.params.c_name"></seach>
        <div class="shengbei">
            <banner></banner>
            <fiv :cityname="this.$route.params.c_name"></fiv>
            <domain></domain>
            <tenbox></tenbox>
            <welcome :cityname="this.$route.params.c_name"></welcome>
            <videobox></videobox>
            <hotlist></hotlist>
        </div>
        <footbox style="position:fixed; z-index:10;bottom:0;"></footbox>
    </div>
</template>
<script>
import seach from '../components/seach';
import banner from '../components/banner';
import fiv from '../components/fiv';
import domain from '../components/domain';
import tenbox from '../components/tenbox';
import welcome from '../components/welcome';
import videobox from '../components/videobox';
import hotlist from '../components/hotlist';
import footbox from '../components/footbox';
export default {
    name:"HelloWorld",
    data (){
        return{
            
        }
    },
    components:{
       seach,banner,fiv,domain,tenbox,welcome,videobox,hotlist,footbox
    },
    mounted(){
        // 获取name
        console.log(this.$route.params.c_name)
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