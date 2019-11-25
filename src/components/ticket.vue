<!--
 * @Description: 
 * @Author: 王磊
 * @Date: 2019-11-11 11:51:53
 * @LastEditors: 王磊
 * @LastEditTime: 2019-11-15 17:38:20
 -->
<template>
    <div class="ticket">
        <div class="ticketTop">
            <div class="ticketLeft">
                <b>成人票</b>
                <span>随时退&nbsp;&nbsp;无须取票</span>
                <p>适用条件&nbsp;|&nbsp;购买须知&nbsp;></p>
            </div>
            <div class="ticketRight">
                <span>￥<span id="qian">{{this.$store.state.attractionDetail.price}}</span></span>
                <input type="button" value="+" @click="addCount()" id="addCount">
                <input type="text" value="1" id="num">
                <input type="button" value="-" @click="reduceCount()" id="reduceCount">
                

            </div>
        </div>
        <p>每单最多可购10份。<span style="color:red;">不可购买当天门票</span></p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:"ticket",
    props:['detailId'],
    data(){
        return{
            // hot:{

            // }
        }
    },
    created(){
        //从后端获取数据
        // axios.get('/Hot/'+this.detailId)
        // .then(res=>{
        //     this.hot=res.data;
        // })
        // .catch(err=>{
        //     console.log(err);
        // });
  },
    methods: {
        reduceCount(){
            //  console.log(document.getElementById("num").value)
            //     if(document.getElementById("num").value<=1){
            //         // console.log(document.getElementById("num").value)
            //         document.getElementById("num").value=1;
            //         return;
            //     }else{
            //         document.getElementById("num").value = (document.getElementById("num").value)-1;
            //     }
            this.$store.commit('reduceCount');
            // this.$store.commit('incage');
            document.getElementById("num").value = this.$store.state.num
            //  console.log(document.getElementById("num").value);
            //  console.log(this.$store.state.num)
            //  console.log(this.$store.state.attractionDetail.price)
      },
        addCount(){
            this.$store.commit('addCount');
            document.getElementById("num").value = this.$store.state.num
        //   document.getElementById("num").value =1+Number(document.getElementById("num").value);
      },
      checkall(){
        //   console.log(this.allcheck);
        //   console.log(event.target.checked);
          this.books.forEach(item=>{
              item.isChecked = event.target.checked;
          });
      }
    },
    
}
</script>

<style scoped>
.ticket{
    height: 1.05rem;
    width: 95%;
    margin: 0 auto;
    background: white;
}
.ticketTop{
    height: .75rem;
    width: 100%;
    display: flex;
}
.ticketLeft{
    height: 100%;
    width: 50%;
}
.ticketLeft>b{
    font-size: .15rem;
    font-weight: normal;
    line-height: .3rem;
}
.ticketLeft>span{
    color: rgb(118, 119, 119);
    font-size: .1rem;
    display: block;
}
.ticketLeft>p{
    color: rgb(127, 198, 245);
    font-size: .1rem;
    line-height: .3rem;
}
.ticketRight{
    height: 100%;
    width: 50%;
    text-align: right;
}
.ticketRight>span{
    display: block;
    margin-top: .12rem;
    color: rgb(240, 115, 57)
}
.ticketRight>input{
    display:block;
    color: rgb(11, 108, 173);
    float: right;
    width: .3rem;
    height: .3rem;
    text-align: center;
    border-radius: 50%;
    border: 1px solid rgb(127, 198, 245);
    outline: none;
    background: white;
}
.ticketRight>#num{
    color: black;
    border-radius:100%;
    border:none;
}
.ticket>p{
    width: 100%;
    color: rgb(112, 111, 111);
    line-height: .3rem;
    font-size: .12rem;
    background: rgb(250, 237, 220);
}
</style>