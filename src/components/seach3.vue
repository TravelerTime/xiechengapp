<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:10:46
 * @LastEditors: 王磊
 * @LastEditTime: 2019-11-13 22:44:11
 * @Description: 
 -->
<template>
    <div class="sea">
        <div class="seaLeft">
            <i class="el-icon-arrow-left" @click="back()"></i>
        </div>
        <div class="seaCen">
            <i class="el-icon-search"></i>
            <input type="text" id="seach" placeholder="请输入城市或景点" @click="seachf()"/>
            
        </div>
        <div class="seaRig">
            <i class="el-icon-location-information"></i>
        </div>
    </div>
</template>
<script>
export default {
    name:"seach3",
    data (){
        return {
           type:[]
        }
    },
     methods:{
      back(){
          this.$router.go(-1);
      },
    //   seachf(){
    //      let seach = document.getElementById("seach").value; 
         
    //   }
  }
}
</script>

<style scoped>
  .sea{
    margin: 0 auto;
    width: 100%;
    height: .44rem;
    display: flex;
    /* background:rgba(200, 54, 54, 0); */
    background: white;
    z-index: 10;
  }
    .seaLeft{
        height: 100%; 
        display: flex;
        width: 12%;
    }
        .seaLeft i{
            margin: auto 0;
            margin-left: 10px;
            font-size: 20px;
        }
    .seaCen{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 74%;  
        background: #f3f3f3;
        height: .26rem;
        border: 0;
        border-bottom-right-radius: .13rem;
        border-bottom-left-radius: .13rem;
        border-top-left-radius: .13rem;
        border-top-right-radius: .13rem;
        margin: auto 0;
        padding: 0 2px;
    }
      .seaCen img{
         width: .24rem;
    }
    .seaCen input{
        padding-left: 4px;
       width: 70%;
       margin: auto 0;
       border: none;
       outline: none;
       background:#f3f3f3; 
    } 
     .seaRig{
        width: 10%;  
        height:.26rem;
        margin: auto 0;
    }
     .seaRig i{
         margin-left: 8px;
       text-align: center;
        height:.26rem;
        line-height:.26rem;
        }
</style>