<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:10:46
 * @LastEditors: 钱端工程师
 * @LastEditTime: 2019-11-11 08:48:17
 * @Description: 
 -->
<template>
    <div class="tenbox">
        <div class="smallTen">
            <img src="../assets/ico/ten1.jpg" alt="">
            <p>自由行</p>
        </div>
        <div class="smallTen">
            <img src="../assets/ico/ten2.jpg" alt="">
            <p>WIFI电话卡</p>
        </div>
        <div class="smallTen">
            <img src="../assets/ico/ten3.jpg" alt="">
            <p>保密 · 签证</p>
        </div>
        <div class="smallTen">
            <img src="../assets/ico/ten4.jpg" alt="">
            <p>换钞 · 购物</p>
        </div>
        <div class="smallTen">
            <img src="../assets/ico/ten5.jpg" alt="">
            <p>当地向导</p>
        </div>
        <div class="smallTen">
            <img src="../assets/ico/ten6.jpg" alt="">
            <p>特价机票</p>
        </div>
        <div class="smallTen">
            <img src="../assets/ico/ten7.jpg" alt="">
            <p>礼品卡</p>
        </div>
        <div class="smallTen">
            <img src="../assets/ico/ten8.jpg" alt="">
            <p>申卡 · 借钱</p>
        </div>
        <div class="smallTen">
            <img src="../assets/ico/ten9.jpg" alt="">
            <p>旅拍</p>
        </div>
        <div class="smallTen">
            <img src="../assets/ico/ten10.jpg" alt="">
            <p>更多</p>
        </div>
    </div>
</template>
<script>
export default {
    name:"tenbox",
    data (){
        return {
           
        }
    }
}
</script>

<style scoped>
  .tenbox{
    width: 100%;
    height: 1.1rem;
    justify-content: space-around;
    flex-wrap: wrap;
    display: flex;
    position: relative;
    top:-.55rem;
    padding-bottom: 6px;
  }
    .tenbox .smallTen{
        font-size: 12px;
        width: .7rem;
        margin: 0 auto;
    }
     .tenbox .smallTen img{
         margin-bottom: 4px;
        width: 100%;
    }
     .tenbox .smallTen p{
        width: 100%;
        text-align: center;
    }
</style>