<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:10:46
 * @LastEditors: 王磊
 * @LastEditTime: 2019-11-13 10:11:48
 * @Description: 
 -->
<template>
    <div class="fiv">
    <router-link to="/Index">
       <div class="smallFiv" style="margin-left:1rem;">
        <p>再次预定</p>
      </div>
    </router-link>
       <div class="smallFiv">
           <p>重发短信</p>
      </div>
       <div class="smallFiv">
          <p>取消订单</p>
      </div>
    </div>
</template>
<script>
export default {
    name:"shopsuccess3",
    data (){
        return {
           
        }
    }
}
</script>
<style scoped>
  .fiv{
    background: white;
    margin: 0 auto;
    width: 100%;
    display: flex;
    height: .46rem;
    box-shadow: 0 2px 6px rgba(0,0,0,.08);
  }
    .fiv .smallFiv{
        font-size: 13px;
    }
     .fiv .smallFiv p{
        width:.76rem;
        height: .28rem;
        line-height: .28rem;
        border: 1px solid #d5d5d5;
        border-radius: 6px;
        text-align: center;
        margin: .08rem 4px;
    }
</style>