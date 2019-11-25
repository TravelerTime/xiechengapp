<!--
 * @Author: your name
 * @Date: 2019-11-06 19:50:02
 * @LastEditTime: 2019-11-15 17:20:42
 * @LastEditors: 王磊
 * @Description: In User Settings Edit
 * @FilePath: \zfbd:\workspace\xclx\src\pages\stroke.vue
 -->
<template>
    <div>
        <backDetails class="top" :detailId="this.$route.params.id"></backDetails> 
        <ticketDetail :detailId="this.$route.params.id"></ticketDetail>
        <attractionDetail :detailId="this.$route.params.id"></attractionDetail>
        <attractionDetail2></attractionDetail2>
        <footerDetail class="foot" :detailId="this.$route.params.id"></footerDetail>
        <playDetail :detailId="this.$route.params.id"></playDetail>
    </div>
</template>
<script>
import backDetails from '../components/backDetails';
import ticketDetail from '../components/ticketDetail';
import attractionDetail from '../components/attractionDetail';
import attractionDetail2 from '../components/attractionDetail2';
import footerDetail from '../components/footerDetail';
import playDetail from '../components/playDetail';
export default {
    name: 'Detailspage',
    props:['id'],
    data () {
        return {
        
        }
    },
    components:{
        backDetails,ticketDetail,attractionDetail,attractionDetail2,footerDetail,playDetail
  },
  mounted(){
        // 获取name
        console.log(this.$route.params.id)
    }
}
</script>
<style scoped>
div{
    margin: 0 auto;
}
.top{
    position:fixed;
    top:0px;
    left:0px;
    z-index: 2;
}
.foot{
    position:fixed;
    bottom:0px;
    left:0px;
    z-index: 20;
}

.mint-swipe-item>img{
    height: 100%;
    width: 100%;
}
</style>