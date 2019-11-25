<!--
 * @Author: your name
 * @Date: 2019-11-06 19:50:02
 * @LastEditTime: 2019-11-15 14:02:01
 * @LastEditors: 王磊
 * @Description: In User Settings Edit
 * @FilePath: \zfbd:\workspace\xclx\src\pages\stroke.vue
 -->
<template>
    <div>
        <div class="shang">
            <p class="p">{{this.$store.state.attractionDetail.name}}</p>
            <p class="q">请在120分钟内完成支付，否则该订单将被取消</p>
        </div>
        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="收费详情" name="1">
                <div class="top">
                    <div class="zuo">费用明细</div>
                    <div class="you">
                        <div class="you1">
                            <div class="you11">景点门票</div>
                            <div class="you12">￥{{this.$store.state.attractionDetail.price}}x{{this.$store.state.num}}</div>
                        </div>
                        <div class="you2">
                            <span> {{this.$store.state.savedata}}{{this.$store.state.attractionDetail.name}}门票成人票 <br>
                                （1个身份证每天仅限一定一张）</span>
                        </div>
                    </div>
                </div>
                <div class="top">
                    <div class="zuo">出行人：</div>
                <div class="you">
                    <div class="you1">
                        <div class="you11 yoo">安菲</div>
                        <!-- <div class="you12"></div> -->
                    </div>
                    <div class="you2">
                        <span>身份证&nbsp;&nbsp;&nbsp;622821********0897</span>
                    </div>
                </div>
                </div>
            </el-collapse-item>
        </el-collapse>
        <div class="box">
            <p>应付费用：</p><span>￥</span><span class="ss"><h2 >{{(this.$store.state.num)*(this.$store.state.attractionDetail.price)}}</h2>.00 </span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        activeNames: ['1']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>
<style scoped>
div{
    text-indent: 12px;
}
.shang{
    width: 100%;
    height: .65rem;
    background-color: #fff;
    line-height: .24rem;
    overflow: hidden;
}
.p{
    font-size: .18rem;
    margin-top:7px;
}
.q{
    color: rgb(130, 129, 129);
}
.zuo{
    width: 25%;
    height: .7rem;
    font-size: .16rem;
    float: left;
    color: rgb(93, 93, 93);
}
.you{
    width: 75%;
    height: .7rem;
    float: right;
}
.you11{
    width: 73%;
    float: left;
    text-indent: 0px;
    font-size: .15rem;
}
.yoo{
    width: 100%;
}
.you12{
    width:27%;
    float: right;
    font-size: .15rem;
}
.you2{
    font-size: 13px;
    color: rgb(99, 99, 99);
    text-indent: 0px;
    line-height: .2rem;
}
.el-collapse-item__content{
    padding-bottom: 0px; 
}
.top{
    height:.8rem ;
}
.box{
    width: 100%;
    height: .4rem;
    background-color: #fff;
    display: flex;
    align-items: center;
    box-shadow: 0px 1px 3px 1px rgb(199, 199, 199);
}
.box p{
    color:rgb(135, 134, 134);
}
.box span{
    text-indent: 0px;
    color:rgb(233, 132, 0);
}
.box h2{
    display: inline;
}
</style>