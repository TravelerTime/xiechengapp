<!--
 * @Author: 李栋
 * @Date: 2019-11-07 20:10:46
 * @LastEditors: 王磊
 * @LastEditTime: 2019-11-15 21:15:42
 * @Description: 
 -->
<template>
     <div class="hot">
         <div class="hh">
             <h3>热门推荐</h3>
             <h3 style="color:#0285f7;border-bottom:2px solid #0285f7;">携程热搜</h3>
             <h3>附近推荐</h3>
             <h3>精彩推荐</h3>
         </div>
        <div class="fiv">
            <div class="smallFiv"  v-for="(seach,index) in seachs" :key="index" >
                <router-link  :to='"/SeaListPage/"+seach.name'>
                    <p class="gn">{{seach.name}}</p>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:"seachList",
    data (){
        return {
            seachs:[]
        }
    },
  created() {
     //从后端获取数据     
    //  axios.get('/sea')
     axios.get('/user/select_sear')
     .then(res=>{ 
        //  this.seachs = res.data;
         this.seachs = res.data.sea;
         console.log(this.seachs)
     })
     .catch(err=>{
         console.log(err);
     });
  },
 
}
</script>

<style scoped>
 .gn{
    color: black;
}
.hot{
    width: 100%;
    background: white;
    margin-bottom: 10px;
    position: relative;
    top: 50px;
}
.hh{
    display: flex;
    justify-content: space-around;
    height: .4rem;
    margin-bottom: 20px;
}
.hh h3{
   font-size: 14px;
   height: .4rem;
   line-height:.4rem; 
   font-weight: 100;
}
  .fiv{
    width: 92%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
    .fiv .smallFiv{
       width: 33%;
       height: .3rem; 
      margin-bottom: 8px;

    }
     .fiv .smallFiv p{
        width: 100%;
        height: .3rem;
        line-height: .3rem;
        text-align: center;
    }
    
</style>