<!--
 * @Author: 李栋
 * @Date: 2019-11-11 11:13:16
 * @LastEditors: 钱端工程师
 * @LastEditTime: 2019-11-11 11:43:21
 * @Description: 
 -->
<template>
    <div>
        <header>
            <h2>登录后可查看或添加行程</h2>
            <router-link to="/DengluPage">
                <div class="denglu">
                        <p>登 录</p>
                    </div>
            </router-link>
        </header>
    </div>
</template>
<script>
export default {
    name: 'stroke1',
    data () {
        return {
        
        }
    }
}
</script>
<style scoped>
header{
    height:1.5rem;
    width: 100%;
    text-align: center;
    background: url(../assets/img/timg.jpg) center center;
    padding-top:.35rem ;
    font-size: .15rem;
}
header h2{
    font-weight: normal;
    color: #fff;
}
.denglu{
    width: 1.2rem;
    height: .4rem;
    background-color: rgb(50, 98, 253);
    border-radius: .25rem;
    margin: .24rem auto;
    line-height: .4rem;
}
.denglu p{
    color: white;
}
</style>
