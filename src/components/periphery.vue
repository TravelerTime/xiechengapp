<!--
 * @Description: 
 * @Author: 王磊
 * @Date: 2019-11-09 19:52:52
 * @LastEditors: 王磊
 * @LastEditTime: 2019-11-12 09:45:28
 -->
<template>
    <div class="hei">
        <p>热门周边</p>
        <div class="imgBox">
            <div class="imgBox_img"><img src="../assets/img/350m0w000000ky9ll016C_C_290_290_Q60.jpg" alt="加载失败"></div>
            <div class="imgBox_img"><img src="../assets/img/100s0s000000hqdpnDB41_C_439_329_Q60.jpg" alt="加载失败"></div>
            <div class="imgBox_img"><img src="../assets/img/100v0t000000iv7mm32BE_C_439_329_Q60.jpg" alt="加载失败"></div>
            <div class="imgBox_img"><img src="../assets/img/CghzgVVijruAAV-HAAHghj31c9M832_C_290_290_Q60.jpg" alt="加载失败"></div>
            <div class="imgBox_img"><img src="../assets/img/CghzfFWw30-AJStgABSORWHIOzk192_C_290_290_Q60.jpg" alt="加载失败"></div>
            <div class="imgBox_img"><img src="../assets/img/CghzgFWwsIaANfJlABj4D5wsLnE990_C_439_329_Q60.jpg" alt="加载失败"></div>
            <div class="imgBox_img"><img src="../assets/img/100c0a0000004ny65AEDC_C_290_290_Q60.jpg" alt="加载失败"></div>
            <div class="imgBox_img"><img src="../assets/img/CggYHVXKpmKARDfSAAWx74jM8jQ242_C_439_329_Q60.jpg" alt="加载失败"></div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.imgBox{
    display: flex;
    justify-content: space-between;
    overflow-x: auto;
    width: 100%;
    height: 1.3rem;
}
.imgBox_img{
    width: 1.2rem;
    height: 100%;
    margin-left: 3px;
    border-radius: 6px;
    flex-shrink: 0;
}
.imgBox_img img{
    width: 100%;
    height: 100%;
}
.hei{
    margin-top: 10px;
    overflow: hidden;
    background: white;
    margin-bottom: .8rem;
}
.hei>p{
    font-size: .2rem;
    line-height: .2rem;
    margin:15px 0; 
}
</style>