<!--
 * @Author: 李栋
 * @Date: 2019-11-07 21:29:42
 * @LastEditors: 钱端工程师
 * @LastEditTime: 2019-11-15 22:26:40
 * @Description: 
 -->
<template>

<div>
  <div class="tickerImg">
            <mt-swipe :auto="0">
                <mt-swipe-item><img src="../assets/img/banner0.png" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/img/banner1.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/img/banner2.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/img/banner3.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/img/banner4.jpg" alt=""></mt-swipe-item>
            </mt-swipe>
        </div>
</div>
 

</template>

<script>
// import Swiper from 'swiper'

export default {
  name: 'banner',
  data () {
    return {
      // imgs:[
      //   {
      //       src:"static/img/banner0.png",
      //   },
      //   {
      //       src:"static/img/banner1.jpg",
      //   },
      //   {
      //       src:"static/img/banner2.jpg",
      //   },
      //   {
      //       src:"static/img/banner3.jpg",
      //   },
      //   {
      //       src:"static/img/banner4.jpg",
      //   }
      //   ]
    }
  },
  //  mounted:function(){
  //       //此时已经有dom了。
  //       var mySwiper = new Swiper ('.swiper-container',{
  //             autoplay:true,
  //             loop:true,
  //             speed:300,
  //             grabCursor:true,
  //             pagination: {
  //               el: '.swiper-pagination',
  //               dynamicBullets: true,
  //               dynamicMainBullets: 2
  //             },
  //       })  
  //   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tickerImg{
    width: 100%;
    height: 2.5rem;
    background-color: #fff;
    position: relative;
    top: -.26rem;
}
.tickerImg img{
    width:100%;
    height: 100%;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
}
</style>
