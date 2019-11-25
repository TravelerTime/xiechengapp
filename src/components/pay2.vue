<!--
 * @Author: your name
 * @Date: 2019-11-06 19:50:02
 * @LastEditTime: 2019-11-12 00:04:46
 * @LastEditors: 钱端工程师
 * @Description: In User Settings Edit
 * @FilePath: \zfbd:\workspace\xclx\src\pages\stroke.vue
 -->
<template>
<div>
    <div class="box">
        <div class="pay">
            <el-radio v-model="radio1" label="1" border>
                <img src="../assets/img/pay1.jpg" alt="">
                <p> 支付宝</p>
            </el-radio>
            <el-radio v-model="radio1" label="2" border>
                <img src="../assets/img/pay2.jpg" alt="">
                <p>QQ钱包</p>
            </el-radio>
            <el-radio v-model="radio1" label="3" border>
                <img src="../assets/img/pay3.jpg" alt="">
                <p>微信支付</p>
            </el-radio>
        </div>
    </div>
    <div class="box">
        <router-link to="/ShopsuccessPage">
             <input class="but" type="button" value="确认支付">
        </router-link>
    </div>
</div>
</template>
<script>
export default {
    data() {
      return {
        radio1: '1'
      };
    },
    methods: {
     
     }
    
  }
</script>
<style scoped>
.box{
    width: 100%;
    margin-top:.2rem;
}
.el-radio{
    display: flex;
    width: 95%;
    height: .6rem;
    margin: 0 auto;
    background-color: #fff;
    border: 0;
    box-shadow: rgb(213, 235, 255) 0px 0px 1px 1px ;
    align-items: center;
}
.el-radio img{
    display: inline-block;
    width:.3rem;
}
.el-radio p{
    line-height: .3rem;
    float: right;
    margin-left: 14px;
    color: #000;
    font-size: .16rem;
}
.but{
    width: 93%;
    height: .46rem;
    margin-left: .13rem;
    border-radius: 8px;
    background-color: rgb(251, 145, 24);
    margin-bottom:.3rem;
    outline: none;
    font-size: .19rem;
    color:#fff;
    border: none;
}
</style>