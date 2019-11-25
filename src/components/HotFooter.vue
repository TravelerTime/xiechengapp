<!--
 * @Description: 
 * @Author: 王磊
 * @Date: 2019-11-09 20:27:53
 * @LastEditors: 王磊
 * @LastEditTime: 2019-11-12 09:42:08
 -->
<template>
    <div>
        <div class="HotFooter">
            <div class="myFooter">
                <span class="el-icon-time"></span>
                <p>浏览历史</p>
            </div>
            <div class="myFooter"><span class="el-icon-collection"></span>
            <p>收藏</p></div>
            <div class="myFooter"><span class="el-icon-s-ticket"></span>
            <p>优惠券</p></div>
            <div class="myFooter"><span class="el-icon-tickets"></span>
            <p><router-link to="/goPayPage">订单</router-link> </p></div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.HotFooter{
    position: fixed;
    bottom: 0;
    height: .5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    background: white;
    z-index: 2;
}
.myFooter{
    height: 100%;
    width: 20%;
    text-align: center;
    padding-top: 3px;
}
.myFooter>span{
    font-size: 25px;
    color: rgb(56, 56, 56)
}
.myFooter>p{
    margin-top: 3px;
}
</style>