<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:10:46
 * @LastEditors: 钱端工程师
 * @LastEditTime: 2019-11-10 16:27:05
 * @Description: 
 -->
<template>
     <div class="hot">
         <div class="hh">
             <ul>
                 <li class="first"><img src="../assets/ico/saoma.png" alt=""></li>
                 <li class="there"><i class="el-icon-date"></i>
                    <i class="el-icon-setting"></i>
                    <i class="el-icon-chat-line-round"></i>
                </li>
            </ul>
            <h2>
                登录携程,开启旅程
            </h2>
            <div class="tt">
            <router-link to="/DengluPage">
            <input type="button" value="登录/注册">
            </router-link>
                <input type="button" value="手机号查单" class="inptwo">
            </div>
         </div>
    </div>
</template>
<script>
export default {
    name:"nologin1",
    data (){
        return {
           
        }
    },
 
}
</script>

<style scoped>

.hot{
    width: 100%;
    background: white;
}
.hh{
    background-image: url(../assets/img/login1.jpg);
    background-size: 100% 100%;
    height: 1.7rem;
    width: 100%;
}
.hh ul{
   display: flex;
  padding-top: 18px;
}
.hh ul .first{
    margin: 0 210px 0 20px;
}
.hh ul .there .el-icon-setting{
    margin: 0 20px;
}
.hh ul li img{
  width: .18rem;
  height: .18rem;
}
.hh ul li i{
  font-size: 20px;
  color: white;
}
  
.hh h2{
    width: 100%;
    text-align: center;
  color: white;
  margin: 15px 0;
  font-weight: 100;
}
.tt{
    text-align: center;
} 
.tt input{
    width: 32%;
    height: .36rem;
    border-bottom-right-radius: .18rem;
    border-top-right-radius: .18rem;
    border-top-left-radius: .18rem;
    border-bottom-left-radius: .18rem;
    border:none;
    text-align: center;
    background: #ff9a14;
    margin: 12px;
    color: white;
    line-height: .36rem;
    font-size: 15px;
    outline: none;
}
.tt .inptwo{
    border:1px solid white;
    background: rgb(127, 203, 223)
}
</style>