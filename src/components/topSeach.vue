<!--
 * @Description: 
 * @Author: 王磊
 * @Date: 2019-11-08 19:47:55
 * @LastEditors: 王磊
 * @LastEditTime: 2019-11-12 16:19:43
 -->

<template>
    <div class="main">
            <el-carousel height="155px">
                <el-carousel-item >
                    <img src="../assets/img/zg0d190000017zhpdF9B4.jpg" alt="加载失败">
                </el-carousel-item>
                <el-carousel-item >
                    <img src="../assets/img/zg0k12000000t9l0j1CA7.png" alt="加载失败">
                </el-carousel-item>
                <el-carousel-item >
                    <img src="../assets/img/zg0l190000017ys1gCA57.jpg" alt="加载失败">
                </el-carousel-item>
            </el-carousel>
        <div class="title">
            <div class="toptitle">
                <div>
                    <img src="../assets/img/gg_red.png" alt="加载失败">
                    <img src="../assets/img/D-menpiaowanleNEW.png" alt="加载失败" class="img2">
                    <p>景点门票</p>
                </div>
                <div>
                    <img src="../assets/img/gg_orange.png" alt="加载失败">
                    <img src="../assets/img/D-mingshenggujiNEW.png" alt="加载失败" class="img2">
                    <p>名胜古迹</p>
                </div>
                <div>
                    <img src="../assets/img/gg_green.png" alt="加载失败">
                    <img src="../assets/img/D-yanchuyanyiNEW.png" alt="加载失败" class="img2">
                     <p>演出演艺</p>
                </div>
                <div>
                    <img src="../assets/img/gg_purple.png" alt="加载失败">
                    <img src="../assets/img/image001.png" alt="加载失败" class="img2">
                     <p>一日游</p>
                </div>
                <div>
                    <img src="../assets/img/gg_blue.png" alt="加载失败">
                    <img src="../assets/img/D-youshanwanshuiNEW.png" alt="加载失败" class="img2">
                     <p>游山玩水</p>
                </div>
            </div>
            <div class="bottomtitle">
                <div>
                    <img src="../assets/img/X-dongzhiwuyuan.png" alt="">
                    <p>动植物园</p>
                </div>
                <div>
                    <img src="../assets/img/X-wenquan.png" alt="">
                    <p>温泉</p>
                </div>
                <div>
                    <img src="../assets/img/X-dongzhiwuyuan.png" alt="">
                    <p>动植物园</p>
                </div>
                <div>
                    <img src="../assets/img/X-wenquan.png" alt="">
                    <p>温泉</p>
                </div>
                <div>
                    <img src="../assets/img/X-dongzhiwuyuan.png" alt="">
                    <p>动植物园</p>
                </div>
                <div>
                    <img src="../assets/img/X-wenquan.png" alt="">
                    <p>温泉</p>
                </div>
                <div>
                    <img src="../assets/img/X-dongzhiwuyuan.png" alt="">
                    <p>动植物园</p>
                </div>
                <div>
                    <img src="../assets/img/X-wenquan.png" alt="">
                    <p>温泉</p>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>

export default {
    name:'Banner',
    data(){
        return {

        }
    },
}
</script>

<style scoped>
.main{
    height: 3.3rem;
    width: 100%;
    background: white;
}
.box{
    height: .5rem;
    width: 100%;
}
.el-carousel__item img {
    height: 100%;
    width: 100%;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
     width: 100%;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
     width: 100%;
  }
.title{
    height: 1.8rem;
    width: 95%;
    margin: 0 2.5%;
    background: white;
    border-radius: 10px;
    position: absolute;
    top:1.75rem;
    z-index: 88;
    box-shadow: 0 3px 3px gray;
}
.toptitle{
    height: 1.25rem;
    width: 100%;
    display: flex;
}
.toptitle>div{
    height: 100%;
    width: 25%;
    position: relative;
}
.toptitle>div>img{
    height: 0.5rem;
    width: .5rem;
    position: absolute;
    left: 17.5%;
    margin: auto 0;
    margin-top: .15rem;
}
.toptitle>div>p{
    text-align: center;
    color: #272725;
    margin-top: .7rem;
}
.bottomtitle{
    display: flex;
    height: 1rem;
    width: 100%;
    overflow-x: auto;
    margin-top: -.45rem;
}
.bottomtitle>div{
    text-align: center;
    height: 100%;
    width: .72rem;
    flex-shrink: 0;
}
.bottomtitle>div>img{
    height: .65rem;
    width:.65rem;
}
.bottomtitle>div>p{
    text-align: center;
    color: #272725;
    /* margin-top: .9rem; */
}

</style>