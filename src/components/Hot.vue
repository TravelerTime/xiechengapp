<!--
 * @Description: 
 * @Author: 王磊
 * @Date: 2019-11-09 15:56:28
 * @LastEditors: 钱端工程师
 * @LastEditTime: 2019-11-15 16:40:57
 -->
<template>
<div class="main">
    <div class="box">
        <div class="Hot">
            <div class="people">
                <p>人气景点</p>
            </div>
            <div class="titleSlide">
                <li v-for="(item,index) in this.$store.state.currtype" :key="index" @click="changetype(item.name)" >{{item.name}}</li>
            </div>
            <div>
                <goodList :typename="currtype" :city = this.$route.params.c_name></goodList>
            </div>
            <p>更多景点></p>
        </div>
    </div>
</div>
</template>
<script>
import Axios from 'axios';
import goodList from './goodList';
export default {
    name: 'Hot',
    props:["cityname"],
  data () {
    return {
       types:[],
       currtype:""
    }
  },
  components:{
    goodList
  },    
  created(){
    // Axios.get('/type')
    // .then((response)=> {
    //     // console.log(response.data);
    //     this.types = response.data;
    //     this.currtype = this.types[0].name;//把拿到的类型的第一个赋给当前类型。
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });
    // console.log(this.cityname)
    this.$store.dispatch('HotAction');
    this.types = this.$store.state.currtype;
    this.currtype = this.$store.state.hotcurrtype
    //  console.log("hot"+this.currtype);
    this.currtype = this.types[0].name;
    //  console.log("created"+this.$store.state.hotcurrtype);
    console.log(this.cityname)
    console.log(this.cityname)
  },
  methods:{
      changetype(typename){
        //   console.log(typename);
          this.currtype = typename;
          console.log("父组件：Hot"+this.currtype);
      }

  },
  mounted(){
        // 获取name
        console.log("mounted.hot"+this.$route.params.c_name)
},
}
</script>
<style scoped>
.box{
    width: 95%;
    margin: 0 auto; 
    background: white;
    
}
.Hot{
    height:4.1rem;
    width: 95%;
    margin: 0 auto;
    margin-top: .2rem;
}
.Hot .people{
    height: .3rem;
    width: 100%;
    margin-bottom: .1rem;
}
.Hot .people>p{
    font-size: .25rem;
    line-height: .3rem;
}
.Hot .titleSlide{
    width: 100%;
    height: .3rem;
    display: flex;
    justify-content: space-between;
    overflow-x: auto;
    margin-bottom: 12px;
}
.Hot .titleSlide li{
    flex-shrink: 0;
    height: 100%;
    line-height: .3rem;
    background: #f7f7f7;
    padding-left: 10px;
    padding-right: 10px;
    margin-right: 30px;
    border-radius: 20px;
}
.Hot .titleSlide li:nth-child(1){
    background: #0086f6;
}
.Hot>p{
    margin-top: .1rem;
    font-size: .15rem;
    text-align: center;
    color: #0086f6;
}
</style>