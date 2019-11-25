<!--
 * @Description: 
 * @Author: 王磊
 * @Date: 2019-11-11 16:59:36
 * @LastEditors: 王磊
 * @LastEditTime: 2019-11-15 00:53:42
 -->
<template>
    <div class="goPayFooter">
        <div class="goPayfoo">
            <p>总额:￥<i id="money">{{(this.$store.state.num)*(this.$store.state.attractionDetail.price)}}</i> <span>明细︿</span></p>
            <span>
                <img src="../assets/img/cc.png" alt="加载失败">
                <p>在线咨询</p>
            </span>
            
                <router-link to="/PayPage">
                    <input type="button" value="去支付">
                </router-link>
            
        </div>
    </div>
</template>

<script>
export default {
    name:"goPayFooter",
    data(){
        return{
            
        }
    }
    
}
</script>

<style scoped>
.goPayFooter{
    position: fixed;
    bottom: 0;
    z-index: 2;
    margin-top: .2rem;
    height: .6rem;
    width: 100%;
    box-shadow: -3px -2px 2px rgb(218, 217, 217);
    background: white;
}
.goPayfoo{
    height: 100%;
    width: 95%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
p{
    font-size: .12rem;
    color: #c57b3a
}
p>span{
    color: #4890ca;
}
p>i{
    font-style: normal;
}
.goPayfoo>span{
    display: block;
    text-align: center;
    /* margin-left: .4rem; */
}
img{
    width: .2rem;
    height: .2rem;
    margin :0 auto;
}
input{
    height: .4rem;
    width: 100%;
    background: #ff7f02;
    border-radius: 5px;
    border: none;
    outline: none;
    color: white;
    font-size: .15rem;
}

a{
    margin-top: .37rem;
    display: block;
     height:.8rem;
    width: 40%;
    /* margin:  auto 0; */
}
</style>