<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:10:46
 * @LastEditors: 钱端工程师
 * @LastEditTime: 2019-11-12 09:40:37
 * @Description: 
 -->
<template>
    <div class="domain">
        <div class="one">
            <img style="height:.65rem;width:1.08rem;" src="../assets/ico/bk1.jpg" alt="">
            <img src="../assets/ico/bk4.jpg" alt="">
            <img  style="height:.634rem;width:1.08rem;" src="../assets/ico/bk8.jpg" alt="">`
        </div>
        <div class="two">
            <img style="height:.65rem;" src="../assets/ico/bk2.jpg" alt="">
            <img src="../assets/ico/bk5.jpg" alt="">
            <img src="../assets/ico/bk9.jpg" alt="">
        </div>
        <div class="the">
                <img style="height:.65rem;width:1.58rem;" src="../assets/ico/bk3.jpg" alt="">
            <div class="tt1">
                <img src="../assets/ico/bk6.jpg" alt="">
                <img src="../assets/ico/bk7.jpg" alt="">
            </div>
            <div class="tt2">
                <img src="../assets/ico/bk10.jpg" alt="">
                <img src="../assets/ico/bk11.jpg" alt=""> 
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"d0main",
    data (){
        return {
           
        }
    }
}
</script>

<style scoped>
  .domain{
    width: 94%;
    display: flex;
    position: relative;
    top: -.55rem;
     margin: 0 auto;
  }
  .one{
      width: 1.08rem;
  }
  .one img{
      width: 100%;
  }
  .two{
      width: .78rem;
      margin: 0 1px;
  }
  .two img{
      width: 100%;
  }
   .the{
      width: 1.58rem;
  }
  .the img{
      width: 100%;
  }
  .the .tt1{
      display: flex;
      width:.786rem;
      height:.65rem;
  }
  .the .tt1 img{
      margin-right: 1px;
  }
.the .tt2{
      display: flex;
      width:.786rem;
      height:.65rem;
  }
  .the .tt2 img{
      margin-right: 1px;
  }
    img{
        margin-bottom:1px;
    }
   
</style>