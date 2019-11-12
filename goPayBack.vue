<!--
 * @Description: 
 * @Author: 王磊
 * @Date: 2019-11-10 19:33:16
 * @LastEditors: 王磊
 * @LastEditTime: 2019-11-11 17:45:34
 -->
<template>
    <div class="goBack">
        <span @click="back()">＜</span>
        <p>秦始皇陵兵马俑博物馆门票</p>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods: {
        back(){
          this.$router.go(-1);
      }
    },
}
</script>

<style scoped>
.goBack{
    position: fixed;
    top: 0;
    z-index: 2;
    height: .35rem;
    width: 100%;
    background: white;
    display: flex;
    /* border-bottom: 1px solid rgb(218, 216, 216); */
    box-shadow: -3px 2px 2px rgb(231, 230, 230);
}
.goBack>span{
    display: block;
    height: .35rem;
    width: .35rem;
    font-size: .35rem;
    line-height: .28rem;
}
.goBack>p{
    font-size: .18rem;
    line-height: .35rem;
    margin:0 auto;
}
</style>