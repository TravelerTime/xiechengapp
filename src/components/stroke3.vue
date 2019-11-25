<!--
 * @Author: 李栋
 * @Date: 2019-11-11 11:13:16
 * @LastEditors: 钱端工程师
 * @LastEditTime: 2019-11-11 13:27:23
 * @Description: 
 -->
<template>
    <div>
        <div class="bg3">
            <mt-swipe :auto="3000">
                <mt-swipe-item><img src="../assets/img/ban1.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/img/ban3.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/img/ban2.jpg" alt=""></mt-swipe-item>
            </mt-swipe>
        </div>
    </div>
</template>
<script>
export default {
    name: 'stroke3',
    data () {
        return {
        
        }
    }
}
</script>
<style scoped>
.bg3{
    width: 100%;
    height: 1.5rem;
    border-radius: 14px 14px 0px 0px;
    position: relative;
    left: 0;
    top: -14px;
} 
 .bg3 img{
    width: 100%;
    height: 1.2rem;
} 
</style>
