<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:10:46
 * @LastEditors: 钱端工程师
 * @LastEditTime: 2019-11-10 16:11:53
 * @Description: 
 -->
<template>
     <div class="hot">
        <div class="top">
            <i class="el-icon-s-finance"></i>
            <div class="qb">
                <p>我的钱包</p>
                <span>现金/礼品卡/返现等</span>
            </div>
        </div>
        <div class="cen">
            <div class="censma" style="border-right:1px solid #ececec;">
                <i class="el-icon-money"></i>
                <span>优惠劵</span>
                <p>领劵</p>
            </div>
            <div class="censma">
                 <i class="el-icon-present"></i>
                 <span>积分</span>
                 <p>兑好礼</p>
            </div>
        </div>  
        <ul>
            <li><span>常用信息</span><p>旅客/地址/报销凭证 &nbsp;></p></li>
            <li><span>我的收藏</span><p>收藏后静等降价通知 &nbsp;></p></li>
            <li><span>浏览历史</span><p>保留15天,随时可回看 &nbsp;></p></li>
            <li style="border-bottom:8px solid #e7e5e5;"><span>我要合作</span><p>供应商加盟/代理合作 &nbsp;></p></li>
            <li><span>出行工具</span><p>航班动态/翻译助手等 &nbsp;></p></li>
        </ul> 
    </div>
</template>
<script>
export default {
    name:"nologin2",
    data (){
        return {
           
        }
    },
 
}
</script>

<style scoped>

.hot{
    width: 100%;
}
.hot .top{
    height: .6rem;
    display: flex; 
    padding-top: 20px;
    background: white;
    border-bottom: 1px solid #ececec;
}
.hot .top i{
    font-size: 30px;
    color: #888;
    margin:0 10px 0 10px;
}

.hot .top .qb p{
    font-size: 16px;
    color: black;
    margin-bottom: 6px;
}
.hot .top .qb span{
    font-size: 12px;
    color: #888;
}
.cen{
    display: flex;
    background: white;
    height: .6rem;
    justify-content: space-around;
    margin-bottom: 8px;
}
.cen .censma{
    width: 48%;
    display: flex;
    line-height: .6rem;
}
.cen .censma i{
    font-size: 24px;
    margin: auto .1rem;
}
.cen .censma span{
    font-size: 16px;
    margin-right: .47rem;
    color: black;
}
.cen .censma p{
    font-size: 12px;
    color: #888;
}
ul{
    background: white;
}
ul li{
    height: .4rem;
    line-height: .4rem;
    border-bottom: 1px solid #ececec;
    padding: 0 8px;
    display: flex;
    justify-content: space-between;
}
ul li p{
    font-size: 12px;
    color: #888;
}
</style>