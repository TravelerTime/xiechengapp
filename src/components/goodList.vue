<!--
 * @Description: 
 * @Author: 王磊
 * @Date: 2019-11-09 16:37:56
 * @LastEditors: 王磊
 * @LastEditTime: 2019-11-15 19:20:50
 -->
<template>
    <div>
        <p style="display:none">{{typename}}</p>
        <div style="display:none" >{{this.$store.state.goodlist.typename}}</div>
        <div class="cen" >
                <div class="cen_a" v-for="(hot,index) in Hot" :key="index" >
                    <div class="img">
                        <router-link :to='"/Detailspage/"+hot.id'>
                            <img :src="hot.img1" alt="加载失败">
                            <!-- <img :src="hot.img1" alt="加载失败"> -->
                        </router-link>
                       
                    </div>
                    <p>{{hot.name}}</p>
                    <p><span>￥</span><span>{{hot.price}}</span>&nbsp;元起</p>
                </div>
                
            </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'goodList',
    props:['typename',"city"],//言情，武侠
    // props["cityname"],
    data () {
        return {
            allHot:[],
            Hot:[],
            // cityname:""
        }
    },
  created() {

    this.$store.dispatch('goodlist',this.city);
    
    console.log(this.city)
  },
  beforeUpdate(){
      this.Hot = this.getBooksByType(this.allHot);
  },
   updated(){
   },
   mounted(){
        // 获取name
        // console.log(this.$route.params.name)
        //  console.log(this.Hot)
        // this.Hot = "热门"
    },
  methods:{
      hots(){
        let arr=[];
         for(let i in data){
             console.log(data)
             console.log(this.typename)
             if(data[i].type==this.typename){
                 arr.push(data[i]);
             }
         }
         console.log(arr)
         return arr;
     },
      
     getBooksByType(data){//根据类型获取数据
    //  console.log(data)
    this.allHot = this.$store.state.goodlist;
         let arr=[];
         for(let i in data){
            //  console.log(data[0].type)
             console.log(this.typename)
             if(data[i].type==this.typename){
                 arr.push(data[i]);
             }
         }
        //  console.log(arr)
         return arr;
     }
  }
}
</script>

<style scoped>
.cen{
    height: 2.85rem;
    overflow: hidden;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: .13rem;
}
.cen_a{
    height: 50%;
    width: 31%;
    margin-bottom: 10px;
}
.cen>.cen_a>.img{
    height: 70%;
    width: 100%;
}
.cen>.cen_a>.img>img{
    height: 100%;
    width: 100%;
}
.cen>.cen_a>p{
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    line-height: 16px;
    margin-top: 7px;
    
}
.cen>.cen_a>p>span{
    color: #ff7417;
}
</style>