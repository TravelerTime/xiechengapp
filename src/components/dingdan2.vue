<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:10:46
 * @LastEditors: 钱端工程师
 * @LastEditTime: 2019-11-16 05:43:48
 * @Description: 
 -->
<template>
<div>
<div class="waibox">
   <p style="margin-top:1rem;">预定日期:11-11</p>
   <div class="top">
      <span>  
          *** -景点门票
    </span>
       <span>预订成功</span>
   </div>
   <div class="cen">
       <span style="margin:20px;">
           11-12有效 
       </span>
       <span>1张</span>
   </div>
   <div class="bot" style="margin:20px;">
       <h6>更多</h6>
       <span>取消</span>
       <span>再次预定</span>
       <span>点评</span>
   </div>
</div>
   <div class="ss">
        <h3>已显示近一年全部订单</h3>
        <input type="button" value="查看一年前订单">
   </div>
   </div>

</template>
<script>
export default {
    name:"dingdan2",
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
    width: 96%;
    margin:0 auto;
    background:white;
    padding: 8px;
    box-shadow: 0 2px 6px rgba(0,0,0,.08);
}
.waibox p{
    width: 1rem;
    background: rgb(88, 86, 204);
    height: .26rem;
    text-align: center;
    color: white;
    font-size: 12px;
    border-top-left-radius: .13rem;
    border-bottom-right-radius: .13rem;
    border-bottom-left-radius: .13rem;
    border-top-right-radius: .13rem;
    line-height: .26rem;
    padding-left: 10px;
    margin: 10px 0;
}
  .sea{
    margin: 0 auto;
    width: 95%;
    height: .5rem;
    display: flex;
    z-index: 10;
    justify-content: space-between;
    align-items: center;
  }
    .top{
        display: flex;
        justify-content: space-between;
    }
    .bot{
        display: block;
        margin-left:.6rem;
    }
     .bot span{
       border:1px solid #ececec;
       text-align: center;
        margin: 20px 10px;
    }
      .bot h6{
       font-weight: 100;
       float: left;
       margin-right: 20px;
       text-align: center;
       font-size: 16px;
    }
   .ss{
       text-align: center;
   }
   .ss h3{
       margin: 20px;
   }
</style>