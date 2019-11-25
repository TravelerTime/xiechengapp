<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:10:46
 * @LastEditors: 钱端工程师
 * @LastEditTime: 2019-11-15 22:25:43
 * @Description: 
 -->
<template>
    <div class="fiv">
      <div class="smallFiv">
          <img src="../assets/ico/fiv1.jpg" alt="">
          <p>攻略'景点</p>
      </div>
       <div class="smallFiv">
            <router-link :to='"/goodlistpage/"+this.cityname'>
                <img src="../assets/ico/fiv2.jpg" alt="">
                <p>门票'玩乐</p>
            </router-link> 
      </div>
       <div class="smallFiv">
          <img src="../assets/ico/fiv3.jpg" alt="">
          <p>美食林</p>
      </div>
       <div class="smallFiv">
          <img src="../assets/ico/fiv4.jpg" alt="">
          <p>周边游</p>
      </div>
       <div class="smallFiv">
          <img src="../assets/ico/fiv5.jpg" alt="">
          <p>一日游</p>
      </div>
    </div>
</template>
<script>
export default {
    name:"fiv",
    props:["cityname"],
    data (){
        return {
           
        }
    }
}
</script>

<style scoped>
  .fiv{
    margin: 0 auto;
    width: 3.5rem;
    height: .6rem;
    display: flex;
    background:white;
    justify-content: space-around;
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
    position: relative;
    top: -.66rem;
    z-index: 2;
    box-shadow: 0 2px 6px rgba(0,0,0,.08);
  }
    .fiv .smallFiv{
        font-size: 12px;
    }
     .fiv .smallFiv img{
         display: block;
        width: .4rem;
        margin: 0 auto;
    }
     .fiv .smallFiv p{
        width: 100%;
        text-align: center;
    }
</style>