<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:03:18
 * @LastEditors: 王磊
 * @LastEditTime: 2019-11-12 15:37:32
 * @Description: 
 -->
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body,ul,ol,dl,dd,p,h1,h2,h3,h4,h5,h6,input,textarea,hr{
    margin:0;
    padding:0;
}
body{ 
  font-size: 14px;
  /* background: #fafafc; */
    font-family: "微软雅黑";
}
html{
  font-size: 26.67vw;
}
html,body{
    height: 100%;
}
ul,ol{
    list-style: none;
}
a{
    text-decoration: none;
    color: black;
}
img{
    border: none;
    display: block;
}
.img a img{
    height: 100%;
    width: 100%;
}
.titleSlide li{
  list-style: none;
}

.el-message-box{
    width: 100%;
}
.el-input__inner{
  color: rgb(5, 182, 252);
  width: 1.3rem;
  font-size: 12px;
  text-align: center;
   border:1px solid rgb(5, 182, 252);
}
.el-input__inner::-webkit-input-placeholder{
  color: rgb(5, 182, 252);
  font-size: 14px;
}
</style>
