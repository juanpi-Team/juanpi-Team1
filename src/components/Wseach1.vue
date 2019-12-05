<!--
 * @Description: 
 * @Author: 王磊
 * @Date: 2019-11-26 10:20:53
 * @LastEditors: 王磊
 * @LastEditTime: 2019-11-27 17:27:36
 -->
<template>
    <div class="seach1">
         <i class="el-icon-arrow-left" @click="back()"></i>
         <input type="text">
         <img src="../assets/img/search.png" alt="加载失败">
    </div>
</template>

<script>
export default {
    name: 'seach1',
    data() {
        return {
            
        }
    },
     methods:{
      back(){
          this.$router.go(-1);
      }
  }
    
}
</script>

<style scoped>
.seach1{
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
i{
    font-size: .2rem;
    display: block;
}
input{
    display: block;
    border: 1px solid grey;
    outline: none;
    height: 60%;
    width: 85%;
    margin-left: 3%;
    border-radius: 5px;
    text-align: center;
}
img{
    width: .2rem;
    height: .2rem;
    position: absolute;
    left: 9%;
}
</style>