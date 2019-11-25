<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:10:46
 * @LastEditors: 钱端工程师
 * @LastEditTime: 2019-11-16 02:57:31
 * @Description: 
 -->
<template>
<div class="waibox">
    <div class="sea">
        <p>携程账号登录</p>
        <input type="text" v-model="username" id="phone" placeholder="国内手机号/用户名" class="fir" value="">
        <div class="mima">
            <input type="password" v-model="password" id="password" placeholder="登录密码" value="">
            <img src="../assets/ico/bkj.png" alt="">
            <span>找回密码</span>
        </div>
        <input type="button" value="登 录" class="dl" id="denglu"  @click="testf()">
        <div class="two">
            <router-link to="/phoneLogin">
                <span>手机动态密码登录</span> 
            </router-link>
            <span>境外手机登录</span>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios';
export default {
    name:"denglu2",
    data (){
        return {
           username:"",
           password:""
        }
    },
    methods:{
        testf(){
            let phoneVal = document.getElementById("phone").value; 
            console.log(phoneVal)
            let pwdVal = document.getElementById("password").value;
            console.log(pwdVal)
             if(phoneVal=="" || pwdVal==""){
                 this.$toast({
                            message: '用户名和密码不能为空',
                            duration: 1500
                            })
                return;
             }else{
                axios.post('/user/login/' + this.username+'?u_pass='+this.password)
                .then(res=>{
                    console.log(res.data);
                    if(res.data=="ok"){
                        console.log("成功");
                        // 2.存储用户名，调转个人中心 
                        localStorage.setItem("u_name",phoneVal);
                        this.$router.push({path: '/MePage'});
                        this.$toast({
                            message: '登录成功!',
                            position: 'top',
                            duration: 2000
                            })
                        setTimeout(()=>{
                        this.$router.push({path:'/MePage'});
                        },1500);       
                    }else{
                        this.$toast({
                              message: '用户名或密码错误',
                              duration: 1500
                            })
                    }
                })
                .catch(err=>{
                    console.log(err);
                })
             }   
        }
    }
}

</script>

<style scoped>
.waibox{
    width: 100%;
    margin-bottom: 120px;
}
.sea{
    width: 94%;
    margin: 0 auto;
}
.sea p{
    font-size: 26px;
    text-align: center;
    margin: 50px 0;
}
  .sea input{
      width: 100%;
      height: .5rem;
      border:none;
      padding-left: 4px;
      outline: none;
  }
  .sea .fir{
      border-bottom: 1px solid #d5d5d5;
  }
  .mima{
      display: flex;
      border-bottom: 1px solid #d5d5d5;
  }
  .mima img{
      width: .2rem;
      height: .2rem;
      margin:auto 6px;
  }
  .sea .mima span{
      margin: auto 0;
      height: .26rem;
      width:.8rem;
      font-size: 14px;
      line-height: .26rem;
      border-left: 1px solid #d5d5d5;
      padding-left: 8px;
      color: #3d3d3d;
  }
  .sea .mima input{
      width: 70%;
      margin-bottom:1px;
  }
  .sea .dl{
      border:none;
      background: #ff9a14;
      color: white;
      border-radius: 6px;
      font-size: 16px;
      margin: 28px 0;
  }
  .two {
      display: flex;
      justify-content: space-between;
  }
  h2{
      font-weight: normal;
      color:red;
      font-size:.16rem;
      text-align: center;
      margin-top:10px;
  }
</style>