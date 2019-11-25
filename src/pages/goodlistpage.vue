<!--
 * @Description: 
 * @Author: 王磊
 * @Date: 2019-11-08 19:56:21
 * @LastEditors: 王磊
 * @LastEditTime: 2019-11-15 16:11:45
 -->
<template>
    <div >
        <seach3></seach3>
        <topSeach></topSeach>
        <Hot :cityname="this.$route.params.c_name"></Hot>
        <periphery></periphery>
        <HotFooter></HotFooter>
    </div>
</template>
<script>
import seach3 from '../components/seach3';
import topSeach from '../components/topSeach';
import Hot from '../components/Hot';
import HotFooter from '../components/HotFooter';
import periphery from '../components/periphery';


export default {
name:"goodlistpage",

data(){
    return {
        
    }
},
components:{
    seach3,
    topSeach,Hot,HotFooter
    ,periphery
},
mounted(){
        // 获取name
        console.log(this.$route.params.c_name)
}

}

</script>

<style scoped>

</style>