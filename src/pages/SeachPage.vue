<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:12:30
 * @LastEditors: 钱端工程师
 * @LastEditTime: 2019-11-10 11:22:49
 * @Description: 
 -->
<template>
    <div class="bigbox">
        <seachSS style="position:fixed;"></seachSS>
        <seachList></seachList>
        <!-- <seachList :cityname="this.$route.params.name"></seachList> -->
    </div>
</template>
<script>
import seachSS from '../components/seachSS';
import seachList from '../components/seachList';

export default {
    name:"HelloWorld",
    data (){
        return{

        }
    },
    components:{
       seachSS,seachList
    }, 
    // mounted(){
    //     // 获取name
    //     // console.log(this.$route.params.name)
    // }
}
</script>
<style scoped>
.bigbox{
    display: flex;
    flex-direction: column;
    height: 100%;
}
</style>