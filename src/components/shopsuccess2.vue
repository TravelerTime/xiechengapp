<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:10:46
 * @LastEditors: 王磊
 * @LastEditTime: 2019-11-15 14:05:10
 * @Description: 
 -->
<template>
<div class="waibox">
    <div class="sea">
       <h6>{{this.$store.state.attractionDetail.name}}门票大小同价×{{this.$store.state.num}}份<span style="color:black;font-size:16px;float:right;line-height:.6rem;">></span></h6>
       <span>使用日期</span><p>{{this.$store.state.savedata}}</p>
       <span>预约时段</span><p>取票时间8:00-16:00</p>
       <span>使用方法</span><p>凭身份证取票进入</p>
    </div>
    <div class="ccc">
        <ul>
            <li>取票地址</li>
            <li class="address">{{this.$store.state.attractionDetail.address}}</li>
            <li style="color:#4bb3ff;">实景图</li>
        </ul>
        <ul>
            <li>取票时间</li>
            <li>09:00~12:00(上午)</li>
            <li>12:00~16:00(下午)</li>
        </ul>
    </div>
    <div class="ccc">
        <ul>
            <li>进入地址</li>
            <li class="address" >{{this.$store.state.attractionDetail.address}}</li>
        </ul>
        <ul>
            <li>进入时间</li>
            <li>09:00~16:00</li>
        </ul>
    </div>
    <div class="the">
        <span>出行人 :</span><p>李栋</p>
        <span>身份证 :</span><p>610124*********2432</p>
        <span>手机 :</span><p>182****2865</p>
        <h6><span>退改规则</span>随时退<i class="el-icon-arrow-down"></i></h6>
    </div>
    <div class="fou">
        <h3>{陕西省博物馆}</h3>
    <router-link to="/Detailspage">
        <span>景点详情</span>
    </router-link>
    </div>
</div>
</template>
<script>
export default {
    name:"shopsuccess2",
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
    height: 100%;
    position: relative;
    top: .4rem;
}
.sea{
    width: 94%;
    margin: 0 auto;
}
.sea h6{
    font-size: 16px;
    color: #070707;
    border-bottom: 1px solid #ececec;
    height: .6rem;
    line-height: .6rem;
    font-weight: 100;
}
.sea span{
    font-size: 12px;
    color: #9d9d9d;
    float: left;
    margin-right: .18rem;
    height: .3rem;
    line-height: .3rem;
}
.sea p{
    font-size: 13px;
    color: #424242;
    height: .3rem;
    line-height: .3rem;
}
.ccc{
     width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    background:#ececec;
    padding: .16rem;
    border-radius: 8px;
    margin-bottom: .2rem;
}
.ccc ul{
    width: 48%;

}
.ccc ul li{
    width: 100%;
    text-align: left;
    height: .3rem;
    line-height: .3rem;
}
.address{
    /* width:100%; */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.the{
    width: 92%;
    margin: 0 auto;
}
.the span{
    font-size: 12px;
    color: #9d9d9d;
    float: left;
    margin-right: .18rem;
    height: .36rem;
    line-height: .36rem;
    width:.5rem;
}
.the p{
    font-size: 13px;
    color: #424242;
    height: .36rem;
    line-height: .36rem;
}
.the h6{
    height: .6rem;
     color: #424242;
    height: .36rem;
    line-height: .36rem;
    font-weight: 100;
    border-top: 1px solid #ececec;
}
.fou{
    display: flex;
    height: .5rem;
    border-top: .18rem solid #ececec; 
    border-bottom: .18rem solid #ececec; 
    width: 100%;
    margin-bottom: .5rem;
}
.fou h3{
    margin-left: .18rem;
    line-height: .5rem;
}
.fou span{
    color:#429eeb;
    line-height: .5rem;
    margin-left: 1.6rem;
}
</style>