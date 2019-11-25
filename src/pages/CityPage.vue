<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:12:30
 * @LastEditors: 钱端工程师
 * @LastEditTime: 2019-11-09 14:21:01
 * @Description: 
 -->
<template>
    <div class="bigbox">
        <backbox style="position:fixed;z-index:10;"></backbox>
        <citylist></citylist>
        <zimu  style="position:fixed;right:3px;top:1.4rem;"></zimu>
    </div>
</template>
<script>
import backbox from '../components/backbox';
import citylist from '../components/citylist';
import zimu from '../components/zimu';
export default {
    name:"HelloWorld",
    data (){
        return{

        }
    },
    components:{
       backbox,citylist,zimu
    }
}
</script>
<style scoped>

</style>