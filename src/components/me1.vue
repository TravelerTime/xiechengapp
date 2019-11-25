<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:10:46
 * @LastEditors: 钱端工程师
 * @LastEditTime: 2019-11-10 23:55:44
 * @Description: 登录后我的页面
 -->
<template>
         <div class="hh">
             <ul>
                 <li class="first"><img src="../assets/ico/saoma.png" alt=""></li>
                 <li class="there"><i class="el-icon-date"></i>
                    <i class="el-icon-setting"></i>
                    <i class="el-icon-chat-line-round"></i>
                </li>
            </ul>
         </div>
</template>
<script>
export default {
    name:"me1",
    data (){
        return {
           
        }
    },
 
}
</script>

<style scoped>

.hh{
    background: #5fa2e0;
    height: .42rem;
    width: 100%;
}
.hh ul{
   display: flex;
  padding-top: 12px;
}
.hh ul .first{
    margin: 0 2.1rem 0 .2rem;
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
 
</style>
