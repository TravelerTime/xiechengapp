<!--
 * @Author: your name
 * @Date: 2019-11-06 19:50:02
 * @LastEditTime: 2019-11-12 00:00:06
 * @LastEditors: 钱端工程师
 * @Description: In User Settings Edit
 * @FilePath: \zfbd:\workspace\xclx\src\pages\stroke.vue
 -->
<template>
    <div>
        <headerPay></headerPay>
        <pay1></pay1>
        <pay2></pay2>
    </div>
</template>
<script>
import headerPay from '../components/headerPay';
import pay1 from '../components/pay1';
import pay2 from '../components/pay2';
export default {
    name: 'PayPage',
    data () {
        return {
        
        }
    },
    components:{
        headerPay,pay1,pay2
  }
}
</script>
<style scoped>
</style>