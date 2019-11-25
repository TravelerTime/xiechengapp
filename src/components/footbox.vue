<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:10:46
 * @LastEditors: 安菲
 * @LastEditTime: 2019-11-15 13:52:30
 * @Description: 
 -->
<template>
    <div class="fiv">
      <router-link to="/Index">
        <div :class="{'smallFiv':smallFiv[0]}" @touchstart="changeCls(0)">
          <img src="../assets/ico/foot1.png" alt="">
          <p>首页</p>
        </div>
      </router-link>
      <router-link to="/StrokePage">
        <div :class="{'smallFiv':smallFiv[1]}" @touchstart="changeCls(1)">
          <i class=" el-icon-date"></i>
          <p>行程</p>
        </div>
      </router-link>
        <div :class="{'smallFiv':smallFiv[2]}" @touchstart="changeCls(2)">
          <i class=" el-icon-camera"></i> 
          <p>旅拍</p>
        </div>
       <div :class="{'smallFiv':smallFiv[3]}" @touchstart="changeCls(3)">
         <i class=" el-icon-service"></i>
          <p>客服</p>
      </div>
      <router-link to="/NoLoginPage">
        <div :class="{'smallFiv':smallFiv[4]}" @touchstart="changeCls(4)">
          <i class=" el-icon-user"></i>
          <p>我的</p>
        </div>
       </router-link>
    </div>
</template>
<script>
export default {
    name:"footbox",
    data (){
        return {
           key:"0"
        }
    },
    computed:{
      smallFiv(){
        return this.$store.state.smallFiv;
      }
    },
    methods:{
      changeCls(index){
        //提交mutations
        this.$store.commit('changeCls',index);
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
    justify-content: space-around;
    box-shadow: 0 2px 6px rgba(0,0,0,.08);
     font-size: 12px;
  }
  .fiv .smallFiv{
      color:rgb(35, 111, 252);
    }
     .fiv img{
        display: block;
        width: .2rem;
        height: .2rem;
        margin-top: 6px;
    }
    .fiv i{
        text-align: center;
        font-size: 20px;
        margin-top: 6px;
        margin-left: 2px;
    }
     .fiv p{
        width: 100%;
        text-align: center;
        margin: 6px auto;
    }
</style>