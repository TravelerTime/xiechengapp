<!--
 * @Description: 
 * @Author: 王磊
 * @Date: 2019-11-11 15:24:33
 * @LastEditors: 王磊
 * @LastEditTime: 2019-11-15 20:30:13
 -->
<template>
    <div class="people">
        <div class="cen">
            <b>出行人信息 <p>须填写<span>{{this.$store.state.num}}个</span>出行人</p></b>
        </div>
        <div class="center">
            <p v-for="(user,index) in peos" :key="index" @click="changeuser(user)">{{user.name}}</p>
            <el-button class="p" @click="drawer = true" type="primary" style="margin-left: 16px;">新增/更换</el-button>
            <el-drawer
                title="只需选择1个出行人"
                :visible.sync="drawer"
                :direction="direction"
                :before-close="handleClose" class="aa">
                <router-link to="/Addpeople" >
                    <input type="button" value="新增出行人" class="chuXing">
                </router-link>
                
            </el-drawer>
        </div>
        <div class="peopleBottom">
            <div class="peoLef">出行人</div>
            <div class="peoRig">
                <div class="peoRig_1" v-for="(peo,index) in peos" :key="index">
                    <p>{{peo.name}}</p>
                    <b>身份证<span>{{peo.Card}}</span></b>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
        data() {
      return {
        drawer: false,
        direction: 'btt',
        users:[],
        usermesg:{},
        peos:[]
      };
    },
    beforeUpdate(){
        //从后端获取数据
        // axios.get('/user')
        // .then(res=>{
        //     // console.log(res.data);
        //     this.users=res.data;
        // })
        // .catch(err=>{
        //     console.log(err);
        // });
        this.$store.dispatch('people',1);
        this.peos = this.$store.state.people;
        console.log(this.$store.state.people)
  },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      changeuser(usermesg){
          this.usermesg=usermesg;
          console.log(this.usermesg)
      }
    }

}
</script>

<style scoped>
.people{
    /* height: 3rem; */
    /* overflow: hidden; */
    width: 100%;
    margin-top:.1rem;
    background: white;
    /* background: green; */
}
.cen{
    /* height: .41rem; */
    width: 95%;
    margin: 0 auto;
}
.cen>b{
    display: block;
    width: 100%;
    font-size: .17rem;
    font-weight: normal;
    line-height: .4rem;
    border-bottom: 1px solid rgb(190, 189, 189);
}
.cen>b>p{
    color: rgb(110, 110, 109);
    display: inline-block;
    font-size: .12rem;
}
.cen>b>p>span{
    color: rgb(250, 162, 48)
}
.center{
    /* height: .7rem; */
    width: 95%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    border-bottom: 1px solid rgb(190, 189, 189);
}
.center>p{
    height:.35rem ;
    width: 16%;
    line-height: .35rem;
    border-radius: 5px;
    padding-left: 10px;
    padding-right: 10px;
    margin-right: 10px;
    background: white;
    color: #0284f6;
    border:1px solid #0284f6;
    text-align:center;
    margin-top: 10px;
    margin-bottom: 6px;
}
.center>p:nth-of-type(1){
    color: white; 
    background:#0284f6;
}
.center>.p{
    color: #0284f6;
    background:white;
}
.peopleBottom{
    /* height: .5rem; */
    width: 95%;
    margin: 0 auto;
    display: flex;
    border-bottom: 1px solid rgb(190, 189, 189);

}
.peoLef{
    width: 23%;
    /* height: 100%; */
    /* display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: .3rem; */
    margin: auto 0;
    }
.peoRig{
    width:77%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    /* overflow-y: auto; */
    /* border-bottom: 1px solid rgb(190, 189, 189); */
}
.peoRig_1{
    /* float: left; */
    width: 100%;
    /* background: pink; */
    padding-bottom: 5px;
}
.peoRig_1>p{
    margin: 5px 0;
}
.peoRig_1>b{
    font-weight: normal;
    color: rgb(108, 109, 109);
}
.rig{
    float: right;
    width: .2rem;
    height: .2rem;
}
.rig>img{
    width: 100%;
    height: 100%;
}
.aa{
    /* height: 5rem;
    width: 100%; */
    text-align: center;
}
.chuXing{
    color: #0284f6;
    background:white;
    width: 75%;
    height: .4rem;
    border: .0003rem solid #0284f6;
    outline: none;
}
</style>