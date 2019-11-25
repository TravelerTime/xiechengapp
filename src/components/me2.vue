<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:10:46
 * @LastEditors: 安菲
 * @LastEditTime: 2019-11-15 21:31:17
 * @Description: 登录后我的页面
 -->
<template>
     <div class="hot">
         <div class="hh">
            <div class="ren">
                <div class="pic">
                    <img src="../assets/img/tuxiang.jpg" alt="">
                </div>
                <div class="rig">
                    <div class="top">
                        <h3 id="name">{{str}}</h3>
                        <span style="margin:auto 10px;">实名认证 ></span>
                    </div>
                    <div class="bot">
                        <span>领会员福利</span>
                        <span>信用生活</span>
                    </div>
                </div>
            </div>
            <div class="four">
                <ul>
                    <li><p>0</p><span>我的收藏</span></li>
                    <li><p>0</p><span>浏览历史</span></li>
                    <li><p>100</p><span>我的积分</span></li>
                    <li><p>0</p><span>优惠劵</span></li>
                </ul>
            </div>
            <div class="hbot">
                <img src="../assets/ico/hy.jpg" alt="">
                <div class="cj">
                    <p>成为超级会员</p>
                    <span>享超值特权,全年可省3596元</span>
                </div>
                <h6>立即开通 ></h6>
            </div>
         </div>
    </div>
</template>
<script>
export default {
    name:"me2",
    data (){
        return {
           str:"---"
        }
    },
    created(){     
        this.Checkuser();
    },
    methods:{
        Checkuser(){
            let user = localStorage.getItem("u_name");
            // console.log(user);
            if(user!=null){
                this.str=user;
            }
        }
    }
 
}
</script>

<style scoped>

.hot{
    width: 100%;
    height: 100%;
    background: #f3f3f3;
    margin-top: .42rem;
}
.hh{
    background: #5fa2e0;
    width: 100%;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    height: 1.9rem;
} 
.ren{
      display: flex;
      padding-top: 4px;  
}
.ren .pic{
    width: .8rem;
    height: .8rem; 
    border-radius: 50%;
    overflow: hidden; 
    margin: 10px 10px 0 30px;
}
.ren .pic img{
    width: 100%;
    height: 100%;    
}
.ren .rig{
    height: .4rem;
    padding-top: 16px;
    color: #f2fafd;
}
.ren .rig .top{
    display: flex;
    margin-bottom: 10px;
}
.ren .rig .top h3{
   font-size: 24px;
 font-weight: 100;
}
.ren .rig span{
   font-size: 12px;
   display: block;
   width: .7rem;
   text-align: center;
   height: .2rem;
    line-height: .2rem;
    background: #488ac0;
    border-top-right-radius: .15rem;
    border-bottom-right-radius: .15rem;
    border-bottom-left-radius: .15rem;
    border-top-left-radius: .15rem;
    margin-right: 10px;
}
.rig .bot{
    display: flex;
}
.four ul{
    display: flex;
    justify-content: space-around;
    color: #f2fafd;
}
.four ul p{
    text-align: center;
}
.four ul span{
     font-size: 12px;
}
.hbot{
    width: 92%;
    background: white;
    border-radius: 8px;
    height: .6rem;
    display: flex;
    margin: 24px auto;
}
.hbot img{
    width: .4rem;
    height: .4rem;
    margin: .1rem;
}
.hbot .cj{
    margin-top:.1rem;
}
.hbot .cj p{
  font-size: 15px;
  color: #3e3e3e;
}
.hbot .cj span{
  font-size: 12px;
  color: #b9b9b9;
}
.hbot h6{
    font-weight: 100;
    margin-top: .18rem;
    font-size: 15px;
    margin-left: .34rem;
    color:#7a7a7a;
}
</style>
  <div class="hbot">
    <img src="" alt="">
    <div class="cj">
        <p>成为超级会员</p>
        <span>享超值特权,全年可省3596元</span>
    </div>
    <h6>立即开通 ></h6>
</div>