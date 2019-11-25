<!--
 * @Description: 
 * @Author: 王磊
 * @Date: 2019-11-11 16:36:15
 * @LastEditors: 王磊
 * @LastEditTime: 2019-11-12 14:27:49
 -->
<template>
<div class="big">
    <div class="message">
        <p>联系信息</p>
        <p id="yang">联系手机<input type="text" placeholder="接受确认短信" id="phone" @blur="testf()">
        <img src="../assets/img/bb.png" alt="加载失败">
        </p>
        
    </div>
    </div>
</template>

<script>
export default {
    name:"message",
    data(){
        return {
            
        }
    },
    methods: {
        testf(){
            var str = document.getElementById("phone").value;
            console.log(str)
            var reg = /^1\d{10}$/;
            if(reg.test(str)==true){
                document.getElementById("yang").style.backgroundColor = "white";
                document.getElementById("phone").style.backgroundColor = "white";
            }else{
                document.getElementById("yang").style.backgroundColor = "pink";
                document.getElementById("phone").style.backgroundColor = "pink";
            }
        }
    },
    
}
</script>

<style scoped>
.big{
    height: .88rem;
    width: 100%;
    margin-top: .2rem;
    background: white;
}
.message{
    height: 100%;
    width: 95%;
    margin: 0 auto;
}
.message>p:nth-of-type(1){
    font-size: .18rem;
    line-height: .45rem;
    border-bottom: 1px solid rgb(190, 189, 189);
}
.message>p:nth-of-type(2){
    height: .4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.message>p:nth-of-type(2)>input{
    height: .3rem;
    border: none;
    outline: none;
    margin-left: -.7rem;
}
.message>p:nth-of-type(2)>img{
    width: .2rem;
    height: .2rem;
}
</style>