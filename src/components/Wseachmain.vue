<!--
 * @Description: 
 * @Author: 王磊
 * @Date: 2019-11-26 10:20:53
 * @LastEditors: 王磊
 * @LastEditTime: 2019-11-27 19:20:26
 -->
<template>
    <div class="big">
        <div class="seach2">
            <li v-for="(item,index) in type" :key="index" @click="changetype(item.name,item.img)" :class="{'smallFiv':smallFiv[index]}" @touchstart="changeCls(index)">{{item.name}}</li>
        </div>
        <div class="sec">
            <Wseach3 :typename="currtype" :banimg="banimg"></Wseach3>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Wseach3 from './Wseach3'
export default {
    name: 'seach2',
    props:["detailId"],
    data() {
        return {
           type:[] ,
           currtype:"女装",
           banimg:'../../static/img/ban1.png',
           smallFiv:[
               false,
               false,
               false,
               false,
               false,
               false,
               false,
               false,
               false,
               false,
               false,
               false,
               false
           ]
        }
    },
  created() {
      axios.get('http://localhost:3000/type')
        .then(res=>{
            // console.log(res.data);
            this.type=res.data;
            //  console.log(this.type);
        })
        .catch(err=>{
            console.log(err);
        });
  },
   methods:{
      changetype(typename,banimg){
        //   console.log(typename);
          this.currtype = typename;
          this.banimg = banimg;
        //   console.log("父组件：Hot"+this.currtype);
        //   this.$emit('func',this.currtype)
        // this.$store.commit('changetype',typename)
      },
      changeCls(index){
        this.smallFiv.forEach((item,index,arr)=>{
            arr[index]=false;
          })
        this.smallFiv.splice(index,1,true);
        },

  },
  beforeMount() {
      
  },
   mounted() {
    //    console.log(this.currtype)
   }, 
   beforeCreate() {
       
   },
   beforeUpdate() {
       
   },
   updated() {
    //    changeCls(index)
      
   },
   components:{
       Wseach3
   }
}
</script>

<style scoped>
.sec{
    width: 75%;
    overflow: hidden;
    position: fixed;
    top:.4rem;
    left: 25%;
    overflow-y: auto;
}
.big{
    display: flex;
    width: 100%;
    margin-top: .4rem;
    overflow-y: auto;
    overflow: hidden;
}
.seach2{
    width: .8rem;
    position: fixed;
    left: 0;
    top:.4rem;
    overflow-y: auto;
    background: rgb(235, 235, 235);
}
.seach2 li{
    font-size: 16px;
    height: .4rem;
    width: .8rem;
    line-height: .4rem;
    text-indent: 8px;
    border-bottom: 1px solid rgb(194, 192, 192);
}
.smallFiv{
      background: white;
      border-left: 2px solid red;
    }
</style>