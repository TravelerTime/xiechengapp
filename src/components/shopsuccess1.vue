<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:10:46
 * @LastEditors: 王磊
 * @LastEditTime: 2019-11-15 01:03:34
 * @Description: 
 -->
<template>
<div class="waibox">
    <div class="ccc">
        <h3>预购成功 ></h3>
        <p>￥<span style="font-size:18px;">{{(this.$store.state.num)*(this.$store.state.attractionDetail.price)}}</span></p>
    </div>
    <h4>预订已成功,祝您出游愉快</h4>
    <h4>订单号 10655596739</h4>
    <div class="in">
         <input type="button" value="点评赚积分">
    </div>
</div>
</template>
<script>
export default {
    name:"shopsuccess1",
    data (){
        return {
           
        }
    },
     methods:{
      back(){
          this.$router.go(-1);
      }
  }
}
</script>

<style scoped>
.waibox{
    width: 100%;
    background: #007af5;
    height: 1.8rem;
      position: relative;
    top: .38rem;
}
  .ccc{
      width: 92%;
      display: flex;
      margin: .2rem auto;
      justify-content: space-between;
      color: white;
  }
  .ccc h3{
      font-size: 22px;
      font-weight: 100;
  }
  h4{
      font-weight: 100;
      color: white;
      margin-bottom: .1rem;
      padding-left: .14rem;
  }
  .in{
    width: 90%;
    margin: .2rem auto;
  }
  .in input{
      width: 100%;
      height: .34rem;
      background: #3da2fa;
      color:#eef8ff;
      border: none;
      border-radius: 6px;
      margin: 0 auto;
  }
</style>