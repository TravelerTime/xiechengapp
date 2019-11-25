<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:10:46
 * @LastEditors: 钱端工程师
 * @LastEditTime: 2019-11-11 17:30:12
 * @Description: 
 -->
<template>
<div class="waibox">
    <div class="sea">
        <div class="seaLeft">
            <i class="el-icon-arrow-left" @click="back()"></i>
        </div>
        <div class="seaCen">
            <i class="el-icon-search"></i>
            <input type="text" placeholder="全球城市(如北京/beijing/bj)"/>
        </div>
    </div>
    <div class="seaRig">
        <div class="nei">
            境内·港珠澳
        </div>
        <div class="wai">
            境外
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:"backbox",
    data (){
        return {
           
        }
    },
     methods:{
      back(){
          this.$router.go(-1);
      }
  }
}
</script>

<style scoped>
.waibox{
    width: 100%;
    background:white;
    height: .76rem;
    box-shadow: 0 2px 6px rgba(0,0,0,.08);
}
  .sea{
    margin: 0 auto;
    width: 95%;
    height: .5rem;
    display: flex;
    z-index: 10;
  }
    .seaLeft{
        height: .5rem;
        width: 10%;
        line-height: .54rem;
        padding-left: 6px;
    }
    .seaLeft i{
       font-size: 20px;
    }
    .seaCen{
        display: flex;
        align-items: center;
        width: 88%;  
        background: #ebe8e8;
        height: .26rem;
        border: 0;
        border-bottom-right-radius: .13rem;
        border-bottom-left-radius: .13rem;
        border-top-left-radius: .13rem;
        border-top-right-radius: .13rem;
        margin: auto 0;
        padding: 0 2px;
    }
      .seaCen i{
        margin-left: 10px;
        margin-right: 6px;
    }
    .seaCen input{
        padding-left: 4px;
        width: 70%;
       margin: auto 0;
        background: #ebe8e8;
       border: none;
       outline: none;
    } 
     .seaRig{
        width: 100%; 
        display: flex; 
        justify-content: space-around;
    }
    .seaRig .nei{
        height: .24rem;
        border-bottom: 3px solid  #0b86f0;
    }
</style>