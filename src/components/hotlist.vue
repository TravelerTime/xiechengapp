<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:10:46
 * @LastEditors: 钱端工程师
 * @LastEditTime: 2019-11-12 09:43:59
 * @Description: 
 -->
<template>
<div class="hot">
    <h3>当地热门</h3>
    <div class="fiv">
        <div class="smallFiv">
            <img src="../assets/ico/four1.png" alt="">
            <p style="font-weight:800;font-size:15px;">精选</p>
        </div>
        <div class="smallFiv">
            <img src="../assets/ico/four2.png" alt="">
            <p>景点</p>
        </div>
        <div class="smallFiv">
            <img src="../assets/ico/four3.png" alt="">
            <p>美食</p>
        </div>
        <div class="smallFiv">
            <img src="../assets/ico/four4.png" alt="">
            <p>一日游</p>
        </div>
    </div>
    <div class="list">
        <img src="../assets/img/pic1.jpg" alt="">
        <img src="../assets/img/pic2.jpg" alt="">
        <img src="../assets/img/erhai4.jpg" alt="">
        <img src="../assets/img/erhai1.jpg" alt="">
        <img src="../assets/img/erhai5.jpg" alt="">
        <img style="width:100%;height:100%;" src="../assets/img/erhai.jpg" alt="">
    </div>
</div>
</template>
<script>
export default {
    name:"hotlist",
    data (){
        return {
           
        }
    }
}
</script>

<style scoped>
.hot{
    width: 100%;
    background: white;
    position: relative;
    top: -.4rem;
}
.hot h3{
    height: .5rem;
    line-height: .5rem;
    font-size: 17px;
    margin-left: 20px;
    font-weight: 100;
}
  .fiv{
    margin: 0 auto;
    width: 100%;
    height: .6rem;
    display: flex;
    background:white;
    justify-content: space-around;
  }
    .fiv .smallFiv{
        font-size: 13px;
    }
     .fiv .smallFiv img{
         display: block;
        width: .3rem;
        margin: 6px auto;
    }
     .fiv .smallFiv p{
        width: 100%;
        text-align: center;
    }
    .list{
        margin-bottom: .4rem;
    }
    .list img{
        margin-top: 20px;
        width: 100%;
    }
</style>