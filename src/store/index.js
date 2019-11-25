/*
 * @Description: 
 * @Author: 王磊
 * @Date: 2019-11-14 15:37:17
 * @LastEditors: 王磊
 * @LastEditTime: 2019-11-15 18:23:30
 */
import Vue from 'vue';
import VueX from 'vueX';
import Axios from 'axios';
import axios from 'axios';

Vue.use(VueX)

let store = new VueX.Store({
    state: {
        Hot:[],
        type:[],
        currtype:[],
        // hotcurrtype:"热门",
        goodlist:[],
        attractionDetail:[],
        num:1,
        savedata:"",
        smallFiv:[
          true,
          false,
          false,
          false,
          false
         ],
        people:[]
    },
    //计算属性
    getters:{
        
    },
    mutations:{
        HotAction(state,name){
            state.currtype = name;
        },
        goodlist(state,goodlist){
            state.goodlist = goodlist;
        },
        attractionDetail(state,attractionDetail){
            state.attractionDetail = attractionDetail;
        },
        reduceCount(state){
            // let num1 = state.num--;
            // console.log(state.num)
            state.num--;
            // num1--;
            // console.log(state.num)
            if(state.num<=1){
                state.num = 1;
            }
            // state.totalMoney = state.num*state.attractionDetail.price;
        },
        addCount(state){
            state.num++;
            
        },
        changeCls(state,index){
              state.smallFiv.forEach((item,index,arr)=>{
                arr[index]=false;
              })
              state.smallFiv[index]=true;
        },
        people(state,people){
            state.people = people;
        }
    },
    actions:{
        HotAction(context,n){
            console.log(n)
            // Axios.get('/type')
            Axios.get('/user/select_sent')
            .then((response)=> {
                console.log(response.data)
            //   context.commit('HotAction',response.data) 
              context.commit('HotAction',response.data.type) 
                
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        
        goodlist(context,n){
            console.log("goodlist"+n)
            // axios.get('/Hot')
            axios.get('/user/select_goods/'+n)
            .then(res=>{ 
                console.log(res.data.Hot)
                // context.commit('goodlist',res.data)
                context.commit('goodlist',res.data.Hot)
            })
            .catch(err=>{
                console.log(err);
            });
        },
        attractionDetail(context,n){
            console.log(n)
            axios.get('/user/select_goodss/'+n)
            // axios.get('/Hot/'+n)
            .then(res=>{
                console.log(res.data)
                // context.commit('attractionDetail',res.data)
                context.commit('attractionDetail',res.data.Hot[0])
            })
            .catch(err=>{
                console.log(err);
            });
        },
        people(context,n){
            axios.get('/user/select_card/'+n)
            .then(res=>{
                console.log(res.data.card);
                // this.users=res.data;
                context.commit('people',res.data.card)
            })
            .catch(err=>{
                console.log(err);
            });
        }
    }
})

export default  store;