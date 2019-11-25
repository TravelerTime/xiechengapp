<!--
 * @Description: 
 * @Author: 王磊
 * @Date: 2019-11-10 19:33:16
 * @LastEditors: 王磊
 * @LastEditTime: 2019-11-15 17:35:56
 -->
<template>
    <div class="goBack">
         <div class="seaLeft">
            <i class="el-icon-arrow-left" @click="back()"></i>
         </div>
        <p>{{hot.name}}</p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    props:['detailId'],
    data () {
        return {
            hot:{

            }
        }
    },
    created(){
        //从后端获取数据
        // this.$store.dispatch('gopay',this.detailId);
        // axios.get('/user/select_goodss/'+this.detailId)
        
        // // axios.get('/Hot/'+this.detailId)
        // .then(res=>{
        //     this.hot=res.data.Hot[0];
        //     // this.hot=res.data;
        // })
        // .catch(err=>{
        //     console.log(err);
        // });
        this.hot = this.$store.state.attractionDetail;
        // console.log( this.hot);
  },
   methods:{
      back(){
          this.$router.go(-1);
      }
  }
}
</script>

<style scoped>
.goBack{
    position: fixed;
    top: 0;
    z-index: 2;
    height: .4rem;
    width: 100%;
    background: white;
    display: flex;
    /* border-bottom: 1px solid rgb(218, 216, 216); */
    box-shadow: -3px 2px 2px rgb(231, 230, 230);
}
  .seaLeft{
        height: .5rem;
        padding-left: 6px;
    }
i{
    font-size: .24rem;
    line-height: .4rem;  
    }
.goBack>p{
    font-size: .18rem;
    line-height: .4rem;
    margin:0 auto;
    text-align: center;
}
</style>