<!--
 * @Description: 
 * @Author: 王磊
 * @Date: 2019-11-10 20:03:44
 * @LastEditors: 王磊
 * @LastEditTime: 2019-11-15 17:36:45
 -->
<template>
    <div class="useTop">
        <p>使用日期</p>
        <div class="useTop_A">
            <div class="left">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" @click="saveData(0)" ><p>今天&nbsp;<span class="datas">{{str}}</span></p><span>￥{{hot.price}}</span></div>
                        <div class="swiper-slide a"  @click="saveData(1)"><p>明天&nbsp;<span class="datas">{{str1}}</span></p><span>￥{{hot.price}}</span></div>
                        <div class="swiper-slide"  @click="saveData(2)"><p>后天&nbsp;<span class="datas">{{str2}}</span></p><span>￥{{hot.price}}</span></div>
                        <div class="swiper-slide"  @click="saveData(3)"><p><span class="datas">{{str3}}</span></p><span>￥{{hot.price}}</span></div>
                        <div class="swiper-slide"  @click="saveData(4)"><p><span class="datas">{{str4}}</span></p><span>￥{{hot.price}}</span></div>
                        <div class="swiper-slide"  @click="saveData(5)"><p><span class="datas">{{str5}}</span></p><span>￥{{hot.price}}</span></div>
                        <div class="swiper-slide"  @click="saveData(6)"><p><span class="datas">{{str6}}</span></p><span>￥{{hot.price}}</span></div>
                    </div>
                </div>
            </div>
            <div class="right" style="width:60px; z-index:22;">
               <el-date-picker v-model="value1" type="date" placeholder="选择日期" style="background:pink; width:200px;">
                </el-date-picker>
                <!-- <el-date-picker v-model="value1" type="date" class="p" value="更多日期" placeholder="更多日期" style="width:30px;baground:pink;">更多日期</el-date-picker> -->
            </div>
        </div>
    </div>
</template>

<script>
// import CollapseTransition from 'element-ui/lib/transitions/collapse-transition' ;
import Swiper from 'swiper';
import axios from 'axios';
// import Vue from 'vue'
// console.log(new Date().getDay()+1);
export default {
    name:"useData",
    props:['detailId'],
    data(){
        return {
            str:new Date().getMonth()+1+"-"+(new Date().getDate()+0),
            str1:new Date().getMonth()+1+"-"+(new Date().getDate()+1),
            str2:new Date().getMonth()+1+"-"+(new Date().getDate()+2),
            str3:new Date().getMonth()+1+"-"+(new Date().getDate()+3),
            str4:new Date().getMonth()+1+"-"+(new Date().getDate()+4),
            str5:new Date().getMonth()+1+"-"+(new Date().getDate()+5),
            str6:new Date().getMonth()+1+"-"+(new Date().getDate()+6),
            // str3_1:new Date().getMonth().getDate().getDay(),
        drawer: false,
        direction: 'btt',
        show3: true,
        hot:{

            },

        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
      };
    },
    methods: {
      saveData(index){
        let sata = document.getElementsByClassName("datas");
        let sss="";
        console.log(index)
        for(let i=0;i<sata.length;i++){
          if(i = index){
           sss =  sata[i].innerHTML
           console.log(sss)
          } 
          this.$store.state.savedata = sss;
          console.log(sss)
          return sss;
          
        }
        
        
        
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    },
    created(){
  //       //从后端获取数据
  //       axios.get('/Hot/'+this.detailId)
  //       .then(res=>{
  //           this.hot=res.data;
  //       })
  //       .catch(err=>{
  //           console.log(err);
  //       });
  this.hot = this.$store.state.attractionDetail;
  console.log(this.$store.state.attractionDetailot);
  },
    components:{
        ontachstart(){
            for(let i=0;i<document.getElementsByTagName("swiper-slide").length;i++){
                
            }
        }
    }  
}
window.onload = function (){
    var mySwiper = new Swiper('.swiper-container',{
    loop: false,
    slidesPerView: '3',
    loopedSlides: 5,
  })
}
</script>

<style scoped>
@import url(https://unpkg.com/swiper/css/swiper.css);
/* */
.is-selected {
    color: #1989FA;
  }
  .el-calendar{
      width: 100%;
      margin: 0;
  }
.transition-box {
    margin-bottom: 10px;
    width: 65%;
    height: 45%;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
    position: absolute;
    top: 19%;
    left: 35%;
    /* display: none; */
  }
.useTop{
    height:1.4rem;
    width: 100%;
    margin-top: .1rem;
}
.useTop>p{
    font-size: .2rem;
    line-height: .2rem;
    margin-bottom:.1rem;
    margin-left: 2.5%;
}
.useTop_A{
    height: 1rem;
    overflow: hidden;
    width: 95%;
    margin: 0 auto;
    border-radius: 8px;
    border-radius: 10px;
    background: #f8f8f8;
}
.left{
    height: 85%;
    width: 75%;
    margin-top:.08rem;
    margin-left: .1rem;
    float: left;
    display: flex;
    align-items: center;
    background: #e6e6e6;
}
.right{
    height: 80%;
    width: 15%;
    float: left;
    margin-top:.1rem;
    margin-left: .1rem;
    display: flex;
    align-items: center;
    justify-content:center;
    overflow: hidden;
   
}

.right>.el-date-editor>span>i{
    width: 100%;
    height: 100%;
    color: rgb(5, 182, 252);
    font-size: .15rem;
    float: left;
    display: flex;
    align-items: center;
    justify-content:center;
}
.right>.el-date-editor>span>.el-input__suffix{
    display: block;
    width: 55px;
    height: 100%;
    color: rgb(5, 182, 252);
    font-size: .15rem;
    float: left;
    display: flex;
    align-items: center;
    justify-content:center;
}
/* .swiper-wrapper{
    display: flex;
    flex-shrink: 0;
} */
.swiper-slide{
    height: .6rem;
    width: .76rem;
    margin-left: .1rem;
    border-radius: 10px;
    text-align: center;
    border:1px solid rgb(190, 228, 250);
    background: #fdfffe;
    /* flex-shrink: 0; */
}
.swiper-slide>p{
    height: .3rem;
    width: 100%;
    font-size: .12rem;
    color: rgb(5, 182, 252);
    line-height: .3rem;
    text-align: center;
    /* margin-bottom: .05rem; */
}
.swiper-slide>span{
    color: rgb(240, 115, 57)
}
</style>