<!--
 * @Author: 安菲
 * @Date: 2019-11-11 20:02:13
 * @LastEditors: 王磊
 * @LastEditTime: 2019-11-15 20:27:50
 * @Description: 
 -->
<template>
    <div class="Box">
        <div class="sec">
            <div class="text name">
                <span>中文姓名</span>
                <input id="name" v-model="name" type="text" placeholder="须与证件上的名字一致" @blur="testf()">
            </div>
            <p class="p" id="ming"></p>
            <div class="text pass">
                <span>身份证</span>
                <input id="card" v-model="card" type="text" placeholder="请填写证件号码" @blur="cardf()" value="622821200012110201">
            </div>
            <p class="p" id="hao"></p>
        </div>
        <div class="box">
        <router-link to="/goPayPage">
            <input class="but" type="button" value="完成" @click="testf2()">
        </router-link>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:"add",
    data (){
        return{
            name:"",
            card:""
        }
    },
    methods:{
        testf(){
            var str1=document.getElementById("name").value;
            var reg1= /^[\u4e00-\u9fa5]{2,4}$/;
             if(reg1.test(str1)==true){
                document.getElementById("ming").innerHTML  = "";
            }else{
                document.getElementById("ming").innerHTML = "中文姓名不能填写英文、数字、特殊字符";
            }
        },
        cardf(){
            var str=document.getElementById("card").value;
            var reg = /^[1-9]\d{9}(0[1-9]|1[0-2])\d{5}(\d|X)$/;

            if(reg.test(str)==true){
                document.getElementById("hao").innerHTML  = "";
            }else{
                document.getElementById("hao").innerHTML = "请输入正确的身份证号码";
            }
        },
        testf2(){
            console.log("aaaa")
            var name = document.getElementById("name").value;
            var card = document.getElementById("card").value;
            if(name=="" || card ==""){
                alert("姓名或身份证号错误")
                return;
            }else{
                // console.log(name)
                console.log(this.name)
                console.log(this.name)
                console.log(this.name+ '/'+this.card+ '/'+1)
                axios.post('/user/insert_card/' + this.name+ '/'+this.card+ '/'+"1")
                .then(res=>{
                    console.log(res.data);
                    if(res.data=="ok"){
                        console.log("添加成功");
                //          this.$toast({
                //               message: '注册成功,请登录！',
                //               duration: 1500
                //             })
                        // 2.存储用户名，调转个人中心 
                        // localStorage.setItem("u_name",phoneVal);
                        // this.$router.push({path: '/DengluPage'});
                    }else{
                //         this.$toast({
                //               message: '用户名已被使用',
                //               duration: 1500
                //             })
                            console.log("添加失败");
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
.Box{
    width: 100%;
    margin-top: 14px;
}
.sec{
    width: 95%;
    background-color: #fff;
    margin:auto;
    border-radius: 5px;
}
.text{
    width: 100%;
    line-height: .5rem;
    display: flex;
    align-items: center;
}
.pass{
    border-top: 1px solid rgb(221, 221, 221);
}
.text span{
    display: block;
    width: 25%;
    margin-left: .2rem;
    font-size: .16rem;
    color: rgb(99, 99, 99);
}
.text input{
    outline: none;
    border: 0;
    height: .4rem;
}
.p{
    margin-left: 1.08rem;
    color: rgb(231, 63, 63);
    line-height: .25rem;
    font-size: 12px;
}
.box{
    width: 100%;
    margin-top:.2rem;
}
.but{
    width: 93%;
    height: .5rem;
    margin-left: .13rem;
    border-radius: 8px;
    background-color: rgb(251, 145, 24);
    margin-bottom:.3rem;
    outline: none;
    font-size: .19rem;
    color:#fff;
    border:none;
}
</style>
