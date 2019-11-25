<!--
 * @Author: 安菲
 * @Date: 2019-11-11 20:02:13
 * @LastEditors: 安菲
 * @LastEditTime: 2019-11-12 19:13:53
 * @Description: 
 -->
<template>
<div>
    <headeradd></headeradd>
    <add></add>
</div>
</template>
<script>
import headeradd from '../components/headeradd';
import add from '../components/add';
export default {
    name:"Addpeople",
    data (){
        return {
           
        }
    },
    components:{
        headeradd,add
     } 
}
</script>

<style scoped>

</style>
