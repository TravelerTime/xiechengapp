<!--
 * @Author: your name
 * @Date: 2019-11-06 19:50:02
 * @LastEditTime: 2019-11-15 20:21:32
 * @LastEditors: 王磊
 * @Description: In User Settings Edit
 * @FilePath: \zfbd:\workspace\xclx\src\pages\stroke.vue
 -->
<template>
    <div id="box">
        <div class="box">
            <div class="but like" plain @click="open3">
                <img src="../assets/img/like.png" alt="">
                    加入收藏
            </div>
            <div class="but Booking">
                <img src="../assets/img/Booking.png" alt="">
                <router-link :to='"/goPayPage/"+this.$store.state.attractionDetail.id'>
                    立即预订
                </router-link> 
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'footerDetails',
    props:["detailId"],
    data () {
        return{
        //    allHot:[]
        //     // Hot:[] 
        }
    },
    created() {
     //从后端获取数据     
    //  axios.get('/Hot/'+this.detailId)
    //  .then(res=>{ 
    //      this.allHot = res.data;//内部数据，由于没有渲染在组件里，所以，没有触发组件更新
    //      console.log(this.allHot)
    //  })
    //  .catch(err=>{
    //      console.log(err);
    //  });
    // console.log(this.detailId)
    // this.$store.dispatch('footerDetail',this.detailId);
  },
    methods: {
      open3() {
        this.$notify({
          title: '收藏成功！',
          message: '世界这么大，很想出去走走，来一次说走就走的旅行吧。',
          position: 'bottom-left'
        });
      }
    }
}
</script>
<style scoped>
a{
    color:white;
    font-size: 16px;
}
#box{
    width:100%;
    height: .5rem;
    background-color: rgb(255, 255, 255);
    margin-top:14px;
}
.box{
    width:96%;
    height: 100%;
    margin:0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.but{
    width: 35%;
    height: .4rem;
    border-radius: 10px;
    color:white;
    background-color: rgb(60, 141, 247);
     display: flex;
    justify-content: center;
    align-items: center;
}
.but img{
    width: .25rem;
    margin-right: 5px;
}
.Booking{
background-color: rgb(255, 156, 42);
}
</style>