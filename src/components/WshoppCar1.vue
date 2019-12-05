<!--
 * @Description: 
 * @Author: 王磊
 * @Date: 2019-11-26 10:20:53
 * @LastEditors: 王磊
 * @LastEditTime: 2019-12-02 17:01:18
 -->
<template>
    <div class="shoppcar1">
         <p>购物车</p>
         <span id="zi"  @click="change">{{this.wenzi}}</span>
    </div>
</template>

<script>
export default {
    name: 'shoppcar1',
    data() {
        return {
           wenzi:"编辑" ,
        }
    },
     methods:{
        
      change(){
            this.$store.commit("change")
            this.wenzi = this.$store.state.wenzi;
            // if(document.getElementById("zi").innerHTML=="编辑"){
                // this.$store.dispatch("change1")
            // }
        }
  },
  beforeUpdate() {
    // console.log(document.getElementById("zi"))
    // if(document.getElementById("zi").innerHTML=="编辑"){
    //     this.$store.dispatch("change1")
    // }
    
},

}
</script>

<style scoped>
.shoppcar1{
    height: .4rem;
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgb(194, 192, 192);
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
}
.shoppcar1 p{
    font-size: .18rem;
    text-align: center;
    width: 100%;
}
.shoppcar1 span{
    font-size: .13rem;  
    display: inline-block;
    width: .35rem;
}
</style>