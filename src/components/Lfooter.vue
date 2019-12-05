<!--
 * @Description: 
 * @Author: 是丽丽呀
 * @Date: 2019-11-26 16:19:30
 * @LastEditors: 王磊
 * @LastEditTime: 2019-11-27 20:08:52
 -->
  <!--
 * @Description: 头部导航栏
 * @Author: 是丽丽呀
 * @Date: 2019-11-26 09:41:44
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-26 16:15:50
 -->
<template>
<div id="box">
    <ul>
        <li :class="isactive==index?'red':''" v-for="(item,index) in footers" :key="index" @touchstart='clk(index)'>
               
                <span  class="iconfont" :class="item.spanclass"></span>
                <router-link :to="item.router">
                     <span>{{item.title}}</span>
                </router-link>
                 
        </li>      
    </ul>
</div>
</template>
<script>
export default {
  name: 'Lfooter',
  data () {
    return {
      isactive:0,
      footers:[
          {
              "spanclass":"icon-shouye2",
              "title":"首页",
              "router":"/WseachPage"
          },
              {
              "spanclass":"icon-pinpaiqingcang",
              "title":"品牌清仓",
              "router":"/WshoppingCar"
          },    {
              "spanclass":"icon-9",
              "title":"9块邮",
              "router":"/WshoppingCar"
          },    {
              "spanclass":"icon-gouwuche",
              "title":"购物车",
              "router":"/WshoppingCar"
          },    {
              "spanclass":"icon-wodedangxuan",
              "title":"我的卷皮",
              "router":"/WshoppingCar"
          }
      ]
    }
  },
  methods:{
      clk(index){
          this.isactive=index;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ul{
        width: 100%;
        /* height: .2rem; */
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    li{
        font-size: 16px;
        text-align: center;
    }
    span{
        display: block;
    }
    span:first-child {
        font-size: 22px;
    }
    .red{
        color: #ff464e;
    }



</style>
