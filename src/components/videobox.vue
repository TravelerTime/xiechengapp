<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:10:46
 * @LastEditors: 王磊
 * @LastEditTime: 2019-11-13 11:22:57
 * @Description: 
 -->
<template>
    <div class="videobox">
        <div class="videoTop">
            <p>玩法研究院</p>
            <span>更多 ></span>
        </div>
        <div class="two">
            <video loop muted autoplay width="100%">
                <source src="../assets/video/s5.mp4" type="video/mp4"/>
            </video>  
        </div>
        <div class="pi">
            <p>你要去相信,没有到不了的明天</p>
        </div>
        <div class="picthe">
            <div class="spc">
                <img src="../assets/img/pic4.jpg" alt="">
                <p>网红打卡地</p>
                <span>潮人都去这里</span>
            </div>
            <div class="spc">
                <img src="../assets/img/pic3.jpg" alt="">
                <p>心灵圣地</p>
                <span>接受朝圣的洗礼</span>
            </div>
            <div class="spc">
                <img src="../assets/img/pic5.jpg" alt="">
                <p>攀登者</p>
                <span>挑战自我，创造极限</span>
            </div>
        </div> 
    </div>
</template>
<script>
export default {
    name:"videobox",
    data (){
        return {
           
        }
    }
}
</script>
<style scoped>
   .videobox{
       width: 96%;
       margin: 10px auto 0;
       background: white;
       border-radius: 10px;
       box-shadow: 0 2px 6px rgba(0,0,0,.08);
       position: relative;
        top:-.55rem;
   }
   .videobox .videoTop{
       display: flex;
       height: .28rem;
       justify-content: space-between;
       padding: 10px 8px;
   }
    .videobox .videoTop p{
       font-size: 16px;
       color: #444;
       height: .28rem;
       line-height: .28rem
   }
    .videobox .videoTop span{
       font-size: 12px;
       color: #b1b1b1;
        height: .28rem;
       line-height: .28rem
   }
   .two{
       width:96%;
       height: 1.8rem;
       margin: 0 auto;
       border-radius: 10px;
       overflow: hidden;
   }
    .pi{
        height: 30px;
        font-size: 16px;
        line-height: 30px;
        text-align: center;
        width: 96%;
        position: relative;
        color: white;
        width: 96%;
        z-index: 10;    }
        .pi p{
            width: 100%;
             position: absolute;
        top: -.6rem;
        
        }
    .picthe{
        width:96%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        position: relative;
        top: -.22rem;
    }
    .spc {
        text-align: center;
    }
   .spc img{
       width:1.08rem;
       border-radius: 6px;
       margin-bottom: 8px;
   }
    .spc p{
      margin-bottom: 4px;
   }
   .spc span{
       font-size: 12px;
   }
</style>