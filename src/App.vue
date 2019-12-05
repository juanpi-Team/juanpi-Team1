<!--
 * @Description: 
 * @Author: 王磊
 * @Date: 2019-11-26 09:46:38
 * @LastEditors: 王磊
 * @LastEditTime: 2019-12-02 14:16:20
 -->
<template>
  <div id="app">
    <router-view/>
    <Lfooter class="footer" />
  </div>
</template>

<script>
import Lfooter from './components/Lfooter'
export default {
  name: 'App',
  data() {
    return {
     
    }
  },
  components:{
    Lfooter
  },
 
  methods: {
    
  },
}
</script>

<style>
.footer{
  position: fixed;
  bottom:0;
  left: 0;
  width: 100%;
  color: rgb(179, 180, 180);
}
body,ul,ol,dl,dd,p,h1,h2,h3,h4,h5,h6,input,textarea,hr{
    margin:0;
    padding:0;
}
html{
  font-size: 26.67vw;
}
ul,ol,li{
    list-style: none;
}
a{
    text-decoration: none;
    color: black;
}
img{
    border: none;
    display: block;
}
html,body{
  height: 100%;
}
</style>
