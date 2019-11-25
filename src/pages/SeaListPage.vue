<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:12:30
 * @LastEditors: 王磊
 * @LastEditTime: 2019-11-13 21:07:36
 * @Description: 
 -->
<template>
    <div class="bigbox">
        <seach3 style="position:fixed;"></seach3>
        <shoplist  :listtype="this.$route.params.name"></shoplist>
    </div>
</template>
<script>
import seach3 from '../components/seach3';
import shoplist from '../components/shoplist';

export default {
    name:"HelloWorld",
    data (){
        return{
            
        }
    },
    components:{
       seach3,shoplist
    }, 
    mounted(){
        // 获取name
        console.log(this.$route.params.name)
    }
}
</script>
<style scoped>
.bigbox{
    background: white;
    display: flex;
    flex-direction: column;
    height: 100%;
}
</style>