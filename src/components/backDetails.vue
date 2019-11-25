<!--
 * @Author: your name
 * @Date: 2019-11-06 19:50:02
 * @LastEditTime: 2019-11-15 16:59:16
 * @LastEditors: 王磊
 * @Description: In User Settings Edit
 * @FilePath: \zfbd:\workspace\xclx\src\pages\stroke.vue
 -->
<template>
    <div id="box" class="bb">
        <div class="box">
            <div class="hea back">
                    <i class="el-icon-arrow-left" @click="testf()"></i>
            </div>
            <div class="scenic">
                <span>{{this.$store.state.attractionDetail.name}}</span>
            </div>
            <div class="hea forward">
                <i class="el-icon-share"></i>
            </div>
            <div class="hea more">
                <i class="el-icon-more"></i>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'backDetails',
     props:['detailId'],
    data () {
        return {
            hot:{

            }
        }
    },
    created(){
        // console.log(this.detailId);
        // this.$store.dispatch('footerDetail',this.detailId)
        // this.$store.state.goodlist.name
        //从后端获取数据
        // axios.get('/Hot/'+this.detailId)
        // // axios.get('/user/select_goods'+"?good_id="+this.detailId)
        
        // .then(res=>{
        //     console.log(res.data);
        //     console.log(res.data);
        //     console.log(res.data);
        //     console.log(res.data);
        //     // this.hot=res.data;
        //     this.hot=res.data;
        //     // this.hot=res.data.Hot[0];
        //     console.log(this.hot);
        // })
        // .catch(err=>{
        //     console.log(err);
        // });
  },
  methods: {
      testf(){
          this.$router.go(-1);
      }
  },
}
</script>
<style scoped>
#box{
    width:100%;
    background-color: rgb(255, 255, 255);
}
.box{
    width:96%;
    display: flex;
    margin: 7px auto;
}
#box .el-icon-arrow-left,.el-icon-share,.el-icon-more{
    position: relative;
    top:5px;
    left: 7px;
    font-size: .26rem;
    color: rgb(99, 99, 99);
    z-index: 3;
    font-weight: normal;
}
.back{
    margin-left: 5px;
}
.hea{
     width: 10.5%;
}
.scenic{
    width: 62%;
    height: .35rem;
    text-align: center;
}
span{
    font-size: .16rem;
    color: rgb(90, 90, 90);
    line-height: .3rem;
}
.forward{
    margin-right: 7px;
}
</style>