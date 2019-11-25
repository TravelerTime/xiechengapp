<!--
 * @Author: your name
 * @Date: 2019-11-06 19:50:02
 * @LastEditTime: 2019-11-15 17:00:51
 * @LastEditors: 王磊
 * @Description: In User Settings Edit
 * @FilePath: \zfbd:\workspace\xclx\src\pages\stroke.vue
 -->
<template>
    <div class="box">
        <div class="scenic">
                <h2>景点门票</h2>
                <h3>{{this.$store.state.attractionDetail.name}}</h3>
        </div>
        <div class="scenic_top">
            <div class="theme">
                <p>成人票(1个身份证每天仅限预订1张)</p>
                <ul>
                    <li>最早可订明日票</li>
                    <li>随时退</li>
                </ul>
                <span>已售1000+ |  &nbsp;购买须知 ></span>
            </div>
            <div class="score">
                ￥<h2>{{this.$store.state.attractionDetail.price}}</h2>
                <div class="Booking">
                    <router-link to="/">
                        <span>立即预订</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'attractionDetail',
   props:['detailId'],
    data () {
        return {
            // hot:{

            // }
        }
    },
     created(){
        //  console.log(this.detailId)
        //从后端获取数据
        // axios.get('/Hot/'+this.detailId)
        // .then(res=>{
        //     this.hot=res.data;
        // })
        // .catch(err=>{
        //     console.log(err);
        // });
        // this.$store.dispatch('attractionDetail',"?good_id="+this.detailId);
        this.$store.dispatch('attractionDetail',this.detailId);
  }
}
</script>
<style scoped>
.box{
    width: 100%;
    background-color: #fff;
}
.scenic{
    width:95%;
    height: .9rem;
    background-color: #fff;
    border-bottom:1px solid rgb(233, 233, 233);
    margin: 0 auto;
}
.scenic h2{
    line-height: .5rem;
    margin-bottom: 11px;
}
.scenic_top{
    width:100%;
    padding: 8px;
    box-sizing: border-box;
    display: flex;
    background-color: #fff;
    margin-bottom:10px; 
}
.theme{
    width: 72%;
    height: 100%;
}
.theme p{
    line-height: .22rem;
    margin-bottom: 6px;
}
.theme ul,li{
    font-size: 12px;
    color:rgb(20, 139, 250);
    line-height: .20rem;
}
.theme span{
    font-size: 12px;
    color: rgb(54, 54, 54);
}
.score{
    width:25%;
    height: 100%;
    text-align: right;
    color: rgb(252, 93, 1);
    margin-top:10px; 
    margin-bottom:5px; 
}
.score h2{
    display: inline;
    line-height: .4rem;
}
.Booking{
    width: .9rem;
    height: .35rem;
    background-color: rgb(255, 156, 42);
    text-align: center;
    line-height: .36rem;
    border-radius: 6px;
}
.score span{
    color: #fff;
    font-size: 14px;
}
</style>