<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:10:46
 * @LastEditors: 钱端工程师
 * @LastEditTime: 2019-11-16 04:27:48
 * @Description: 登录后我的页面
 -->
<template>
     <div class="hot">
         <div class="hh">
            <div class="four">
                <ul>
            <router-link to="/dingdanpage">
                    
                    <li><img style="margin-left:12px;" src="../assets/img/fk1.jpg" alt=""><span>全部订单</span></li>
            </router-link>
                    <li><img src="../assets/img/fk2.jpg" alt=""><span>待付款</span></li>
                    <li><img src="../assets/img/fk3.jpg" alt=""><span>未出行</span></li>
                    <li><img src="../assets/img/fk4.jpg" alt=""><span>待点评</span></li>
                </ul>
            </div>
            <div class="qian">
                <div class="tw">
                    <p>我的钱包</p>
                    <span>查看钱包·礼品卡·现金 ></span>
                </div>
                <div class="four twoo">
                    <ul>
                        <li><img src="../assets/img/qianbao1.jpg" alt=""><span>拿去花</span></li>
                        <li><img src="../assets/img/qianbao2.jpg" alt=""><span>借现金</span></li>
                        <li><img src="../assets/img/qianbao3.jpg" alt=""><span>理财</span></li>
                        <li><img src="../assets/img/qianbao4.jpg" alt=""><span>白金卡</span></li>
                    </ul>
                </div>
            </div>
            <div class="qian">
                <div class="tw">
                    <p>我的工具</p>
                    <span>查看全部工具 ></span>
                </div>
                <div class="four twoo nine">
                    <ul>
                        <li><img style="margin-left:.27rem;margin-top:-.04rem;width:.48rem;height:.34rem;" src="../assets/img/nine1.jpg" alt=""><span>常用信息</span></li>
                        <li><img src="../assets/img/nine2.jpg" alt=""><span>银联付款码</span></li>
                        <li><img src="../assets/img/nine3.jpg" alt=""><span>出行清单</span></li>
                        <li><img src="../assets/img/nine4.jpg" alt=""><span>航班助手</span></li>
                        <li><img src="../assets/img/nine5.jpg" alt=""><span>一生旅行</span></li>
                        <li><img src="../assets/img/nine6.jpg" alt=""><span>会员权益码</span></li>
                        <li><img src="../assets/img/nine7.jpg" alt=""><span>我的旅拍</span></li>
                        <li><img src="../assets/img/nine8.jpg" alt=""><span>用户调研</span></li>
                    </ul>
                </div>
            </div>
         </div>
    </div>
</template>
<script>
export default {
    name:"me3",
    data (){
        return {
           
        }
    },
 
}
</script>

<style scoped>

.hot{
    width: 100%;
    height: 100%;
    background: #f3f3f3;
    margin-top: .4rem;
} 
.hh{
    width: 92%;
    margin: 0 auto;
    border-radius: 10px;
}
.four{
    height: .8rem;
    background: white;
    margin-bottom: 12px;
    padding-bottom: 8px;
     border-radius: 10px;
}
.four ul{
   display: flex;
   justify-content: space-around;
  padding-top: 12px;
}
.qian .nine{
    height: 1.6rem;
    margin-bottom: .68rem;
}
.qian .nine ul{
      display: flex;
    justify-content: space-around;
    padding: 12px;
    flex-wrap: wrap;
}
.qian .nine ul li{
    width: 24%;
    margin-bottom: 10px;
}
ul li{
   text-align: center;
    
}
.four ul .first{
    margin: 0 2.1rem 0 .2rem;
}
.four ul .there .el-icon-setting{
    margin: 0 20px;
}
.four ul li img{
    margin-bottom: 6px;
  width: .4rem;
  height: .4rem;
}
.twoo ul li img{
    width: .2rem;
    height: .2rem;
    margin: 10px auto;
    
}
.qian{
     margin-top: 14px;
     background: white;
     border-radius: 10px;
}
 .qian .tw{
     width: 92%;
     margin: 0 auto;
     display: flex;
     justify-content: space-between;
     border-bottom: 1px solid #ececec;
     padding: 14px 10px;
 }
 .tw p{
     font-size: 16px;
 }
 .tw span{
     font-size: 12px;
 }
</style>