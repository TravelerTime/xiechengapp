<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:10:46
 * @LastEditors: 安菲
 * @LastEditTime: 2019-11-15 17:02:01
 * @Description: 
 -->
<template>
<div class="waibox">
    <div class="sea">
        <h2>手机动态密码登录</h2>
        <div class="text">
            <p>中国大陆  86</p>
            <i id="ico" class="el-icon-arrow-right"></i>
        </div>
        <div class="text">
            <input  type="text" v-model="username" id="phone" placeholder="注册或绑定手机号" value="" @blur="testf2()">
            <span id="pass"></span>
        </div>
        <div class="text">
            <input type="text" v-model="code" id="code" placeholder="短信动态码">
            <span id="o" @click="send()">发送动态码</span>
        </div>
        </div>
        <input type="button" value="登  录" id="dll" class="dl" @click="testf5()"> 
        <div class="bot">
            <span style="border:none;">登录即代表您同意我们的</span>
            <span>《服务协议》</span>和<span>《隐私政策》</span>
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
           code:""
        }
    },
    methods:{
        testf2(){
            var str1=document.getElementById("phone").value;
            var reg1= /^1\d{10}$/;
             if(reg1.test(str1)==true){
                document.getElementById("pass").innerHTML  = "";
            }else{
                document.getElementById("pass").innerHTML = "请输入正确的手机号";
            }
        },
        send(){
            var phoneVal=document.getElementById("phone").value;
            if(phoneVal==""){
                this.$toast({
                      message: '请填写手机号',
                      duration: 1500
                    })
                return;
             }
             else{
                 axios.post('/user/login_phone/'+this.username)
             }
        },
        testf5(){
            var phoneVal=document.getElementById("phone").value;
            var codeVal=document.getElementById("code").value;
            if(phoneVal==""){
                this.$toast({
                      message: '请填写手机号',
                      duration: 1500
                    })
                return;
            }else if(codeVal==""){
                this.$toast({
                      message: '请填写动态码',
                      duration: 1500
                    })
                return;
             }else{
                axios.post('/user/login/' + this.username+'?yzm='+this.code)
                .then(res=>{
                    console.log(res.data);
                    if(res.data=="ok"){
                        console.log("登录成功");
                         this.$toast({
                            message: '登录成功！',
                            position: 'top',
                            duration: 2000
                            });
                        setTimeout(()=>{
                        this.$router.push({path:'/MePage'});
                        },1500);
                        // 2.存储用户名，调转个人中心 
                        // localStorage.setItem("u_name",phoneVal);
                        // this.$router.push({path: '/DengluPage'});
                        if(res.data=="nos"){       
                        this.$toast({
                            message: '验证码错误！',
                            duration: 2000
                            });
                    }
                    }else if(res.data=="no"){
                        this.$toast({
                              message: '用户名不存在，请先注册！',
                              duration: 1500
                            });
                        setTimeout(()=>{
                            this.$router.push({path:'/ZhucePage'});
                            },1500);
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
    height: .5rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #d5d5d5;
}
#ico{
    font-size: .18rem;
    color:#8e8e8e;
}
.sea .text p{
    font-size:.16rem;
    width:93%;
    margin-left: 5px;
}
  .sea input{
      width: 70%;
      height: .5rem;
      border:none;
      padding-left: 4px;
      outline: none;
  }
  #o{
      font-size: .15rem;
  }
  #pass{
      font-size: 12px;
      color:#f03a3a;
      width: 40%;
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
  .bot{
    font-size: 12px;
    text-align: center;
    color: #888;
    margin-top:2.1rem;
}
.bot span{
    border-bottom:1px solid rgb(206, 206, 206);
}
</style>