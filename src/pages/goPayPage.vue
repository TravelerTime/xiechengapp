<!--
 * @Description: 
 * @Author: 王磊
 * @Date: 2019-11-10 19:28:32
 * @LastEditors: 王磊
 * @LastEditTime: 2019-11-14 14:07:32
 -->
<template>
    <div>
        <goPayBack :detailId="this.$route.params.id"></goPayBack>
        <useData :detailId="this.$route.params.id"></useData>
        <ticket :detailId="this.$route.params.id"></ticket>
        <people></people>
        <message></message>
        <goPayFooter></goPayFooter>
    </div>
</template>

<script>
import goPayBack from '../components/goPayBack';
import useData from '../components/useData';
import ticket from '../components/ticket';
import people from '../components/people';
import message from '../components/message';
import goPayFooter from '../components/goPayFooter';


export default {
    name:"goPayPage",
    data(){
        return {
            // num : 0,
            // money : 0,
            // totalMoney : 0,
            // money : document.getElementById("money").innerHTML,
            // reduceCount : reduceCount(),
            // addCount : addCount()
        }
    },
    components: {
        goPayBack,useData,ticket,people,message,goPayFooter
    },
    created:{
        
        // num : document.getElementById("num"),
        // money : document.getElementById("qian"),
        // // console.log(money)
        // totalMoney : num*money,
        // money : totalMoney,
        // reduceCount(){
        //     num--;
        //     if(num<=1){
        //         num=1;
        //     }
        //     console.log(num)
        //     console.log(money)
        //     totalMoney = num*money;
        //     console.log(document.getElementById("money"))
        //     document.getElementById("money").innerHTML = totalMoney;
        // },
        // addCount(){
        //     num++;
        //     totalMoney = num*money;
        //     document.getElementById("money").innerHTML = totalMoney;
        // }
    },
    methods:{
       
        // 获取name
        // console.log(this.$route.params.id)
        
    },
    updated:{
        
    }
}
// var num = 0;
// var money = 0;
// var totalMoney = 0;
//  window.onload = function(){
//         num = document.getElementById("num").value;
//         money = document.getElementById("qian");
//         console.log(money)
//         console.log(money)
//         console.log(money)
//         totalMoney = num*money;
//         document.getElementById("money").innerHTML = totalMoney;
//         document.getElementById("reduceCount").onclick = function(){
//             num--;
//             if(num<=1){
//                 num=1;
//             }
//             console.log(num)
//             console.log(money)
//             totalMoney = num*money;
//             document.getElementById("money").innerHTML = totalMoney;
//         }
//         document.getElementById("addCount").onclick = function(){
//             num++;
//             totalMoney = num*money;
//             document.getElementById("money").innerHTML = totalMoney;
//         }
        
//     }

//.onclick = function(){
            
    // }
</script>
<style  scoped>
html,body{
    background: #C0C7CF;
}
</style>