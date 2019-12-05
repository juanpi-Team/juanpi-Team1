<!--
 * @Description: 
 * @Author: 王磊
 * @Date: 2019-11-26 14:27:57
 * @LastEditors: 王磊
 * @LastEditTime: 2019-11-27 19:25:48
 -->
<template>
    <div class="dinwei">
        <div class="seach3">
            <div class="img">
                <img :src="this.banimg" alt="加载失败">
            </div>
            <div class="list">
                <p style="display:none">{{typename}}</p>
                <li v-for="(item,index) in sech3list" :key="index">
                    <img :src="item.img" alt="">
                    <p>{{item.name}}</p>
                </li>
                
            </div>
        </div>
    </div>
</template>

<script>
// import Axios from 'axios'
import axios from 'axios';
export default {
    name:"Wseach3",
    props:["typename","banimg"],
    data() {
        return {
            list:[],
            sech3list:[]
        }
    },
    created() {
        axios.get('http://localhost:3000/List')
        .then(res=>{
            for(let i=0;i<res.data.length;i++){
                    if(this.typename==res.data[i].type){
                    this.sech3list.push(res.data[i]);
                }
            }
            this.list=res.data;
        })
        .catch(err=>{
            console.log(err);
        });
    },
    Updated() {
    },
    methods: {
        getBooksByType(data){//根据类型获取数据
         let arr=[];
         for(let i in data){
             if(data[i].type==this.typename){
                 arr.push(data[i]);
             }
         }
         return arr;
     }
    },
    beforeUpdate() {
        this.sech3list = [];
        this.sech3list = this.getBooksByType(this.list);
    },
        
}
</script>

<style scoped>
.seach3{
    width: 100%;
}
.img {
    margin-left: .12rem;
    margin-top: .15rem;
    margin-bottom: .15rem;
}
.img img{
    height: 1rem;
}
.list{
    margin: 0 .19rem;
    display: flex;
    flex-wrap: wrap;
}
.list li{
    width: 30%;
    height: 1rem;
    margin-right: 5%;
    margin-bottom: .15rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.list li:nth-of-type(3n){
     margin-right:0;
}
.list li img{
    width: 80%;
    height: 70%;
    margin-bottom: 14px;
}
.list li p{
    font-size: .13rem;
}
</style>