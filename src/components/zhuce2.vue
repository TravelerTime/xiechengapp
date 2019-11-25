<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:10:46
 * @LastEditors: 安菲
 * @LastEditTime: 2019-11-15 16:08:16
 * @Description: 
 -->
<template>
<div class="waibox">
    <div class="sea">
        <h2>欢迎新用户注册</h2>
        <div class="text">
            <input type="text" v-model="username" id="phone" placeholder="请输入国内手机号" @blur="testf()">
            <span id="pho"></span>
        </div>
        <div class="text">
            <input  type="password" v-model="password" id="password" placeholder="请输入6位以上密码" @blur="testf2()">
            <span id="pass"></span>
        </div>
        <div class="text">
            <input type="password" v-model="ok" id="ok" placeholder="请确认密码" @blur="testf3()">
            <span id="o"></span>
        </div>
        </div>
        <input type="button" value="注 册" id="dll" class="dl" @click="testf5()"> 
         <div class="sel">
            <input type="checkbox" class="chec" style="background: transparent;" id="Agree">
            <span>我已阅读并同意</span>
            <a href="https://www.casiostore.com.cn/support/agreement.html">《用户注册协议》</a>
        </div>
    </div>
</template>
<script>

import axios from 'axios';
export default {
    name:"zhuce2",
    data (){
        return {
           username:"",
           password:"",
           ok:""
        }
    },
    methods:{
        testf(){
            var str1=document.getElementById("phone").value;
            var reg1= /^1\d{10}$/;
             if(reg1.test(str1)==true){
                document.getElementById("pho").innerHTML  = "";
            }else{
                document.getElementById("pho").innerHTML = "请输入正确的手机号";
            }
        },
        testf2(){
            var str=document.getElementById("password").value;
            var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;

            if(reg.test(str)==true){
                document.getElementById("pass").innerHTML  = "";
            }else{
                document.getElementById("pass").innerHTML = "请输入6位数以上的字符";
            }
        },
        testf3(){
            var str2=document.getElementById("ok").value;
            var reg2 =document.getElementById("password").value;

            if(str2==""){
                document.getElementById("o").innerHTML="请输入你的密码！";
            }else if(reg2!=str2){
                document.getElementById("o").innerHTML  = "密码不一致，请重新输入";
            }else{
                document.getElementById("o").innerHTML = "";
            }
        },
        testf5(){
            var phoneVal=document.getElementById("phone").value;
            var pwdVal=document.getElementById("password").value;
            var oVal=document.getElementById("ok").value;
            
            var agree = document.getElementById("Agree").checked;


            if(phoneVal=="" || pwdVal==""|| oVal==""){
                this.$toast({
                      message: '请填写完整',
                      duration: 1500
                    })
                return;
             }else if(!agree){
                    this.$toast({
                          message: '请同意用户协议',
                          duration: 1500
                        })
             }else{
                axios.post('/user/regist/' + this.username+ '/'+this.password)
                .then(res=>{
                    console.log(res.data);
                    if(res.data=="regist"){
                        console.log("注册成功");
                         this.$toast({
                              message: '注册成功,请登录！',
                              duration: 1500
                            })
                        // 2.存储用户名，调转个人中心 
                        // localStorage.setItem("u_name",phoneVal);
                        this.$router.push({path: '/DengluPage'});
                    }else{
                        this.$toast({
                              message: '用户名已被使用',
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
.sea h2{
    font-size: 26px;
    text-align: center;
    margin: 50px 0;
    font-weight: normal;
}
.sea .text{
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #d5d5d5;
}
.text span{
    color: #eb3e3e;
    font-size: 12px;
    width: 65%;
}
.text .suiji input{
    border: #eb3e3e;
}
  .sea input{
      width: 100%;
      height: .5rem;
      border:none;
      padding-left: 4px;
      outline: none;
      
  }
  .sea .text1{
    width: 100%;
    display: flex;
    align-items: center;
}
#dll{
      width: 94%;
      height: .5rem;
      border:none;
      background: #ff9a14;
      color: white;
      border-radius: 6px;
      font-size: 16px;
      margin: 20px auto;
      margin-left:12px; 
      outline: none;
  }
  #checkbox{
    border-bottom: 1px solid #d5d5d5;
}
   .inputLe {
        width: 370px;
        display: flex;
        justify-content: space-between; }
       .inputLe .input {
          width: 2rem;
          text-align: center;
          height: 42px;
          text-align: left; 
          }
        .inputLe .inpu input {
            width:1.4rem;
            height: 42px;
            border: none; 
            }
     #but {
        height: 40px;
        background: #dedede;
        border:none;
        border-radius: 20px;
        width: 60px;
        color: #595757;
        outline: none; 
        }
        .sel {
        width: 353px;
        text-align: left;
        font-size: 14px;
        color: #8f8f8f;
        margin-bottom: .2rem;
        margin-left:14px;  }
        .sel a {
          color: #005bb0; }

    h3{
      font-weight: normal;
      color:red;
      font-size:.16rem;
      text-align: center;
      margin-top:10px;
  }
</style>