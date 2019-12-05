<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Author: wanglei
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 王磊
 * @LastEditTime: 2019-12-04 21:49:38
 -->
<template>
    <div class="box">
        <div id="box">
            <!-- 购物车列表 -->
            <ul>
                <li class="goodsBox" v-for="(book,index) in books" :key="index">
                    <div class="cen">
                        <div class="radioBox">
                            <input type="checkbox" v-model="book.isChecked"  >
                        </div>
                        <div class="rig">
                            <div class="goodsImgBox">
                                <img :src="book.img" alt="加载失败">
                            </div>
                           <div class="goodsInfoBox"> <!-- 购物车列表 -->
                                    <p>{{book.name}}</p>
                                    <p :class="{cen1:isClass,cen2:isClass}" @click="select(book.id)"> <span>{{book.deocra}}&nbsp;&nbsp;{{book.size}}</span> <span class="el-icon-arrow-down" /></p>
                                    <p :class="{last:isClass1,goodsTotalBox1:isClass}">
                                        ￥<span class="price">{{book.price}}</span> 
                                        <i>￥<i>{{book.oldprice}}</i></i>
                                       <i class="lasti"> x<i class="lasti2">{{book.count}}</i></i>
                                        <span>
                                                
                                        </span> 
                                    </p>
                                    <!-- 加减按钮 -->
                                    <span :class="{add:isClass,goodsTotalBox1:isClass1}">
                                        <input class="btnReduce" type="button" value=" - " @touchstart="reduceCount(index)">
                                        <input class="count" type="text" v-model="book.count" style="width:0.2rem;">
                                        <input class="btnAdd" type="button" value=" + " @touchstart="addCount(index)">
                                    </span>
                            </div>
                        </div>
                    </div>
                </li>                                     
            </ul>
        </div>
        <!-- 结算切换 -->
        <div :class="{goodsTotalBox:this.$store.state.isClass1,goodsTotalBox1:this.$store.state.isClass}">
            <div class="left">
                <span>
                    <input type="checkbox"  id="allCheckBox" v-model="allcheck" @click="checkall" style="vertical-align: middle;">
                    <label for="allCheckBox"  style="vertical-align: middle;">全选</label>
                </span>  
                <span style="display:inline-block;width:40%;height:100%;color:black;font-size:.15rem;text-align:center;line-height:.5rem;">合计：<span id="totalMoney">{{totalMoney}}</span></span>
            </div>
            <p class="right" style="width:33%;" @click="pay">结算</p>
        </div>
        <div :class="{goodsTotalBox:this.$store.state.isClass,goodsTotalBox1:this.$store.state.isClass1}">
            <div class="left">
                <span>
                    <input type="checkbox"  id="allCheckBox" v-model="allcheck" @click="checkall" style="vertical-align: middle;">
                    <label for="allCheckBox"  style="vertical-align: middle;">全选</label>
                </span>  
                <span style="background:orange;display:inline-block;width:40%;height:100%;color:white;font-size:.18rem;text-align:center;line-height:.5rem;" plain @click="open3">移入收藏夹</span>
                <!-- <el-button style="background:orange;display:inline-block;width:40%;height:100%;color:white;font-size:.18rem;text-align:center;line-height:.5rem;text-align:center" :plain="true" @click="open">移入收藏夹</el-button> -->
            </div>
            <p class="right" @click="deleted" style="width:33%;">删除</p>
        </div>
        <!-- 弹出框改变商品属性 -->
        <div :class="{messg1:isShow2,messg2:isShow1}">
            <div class="imgT">
                <div class="img1">
                    <img :src="this.desListimg" alt="加载失败">
                </div>
                <div class="PC">
                    <div>
                        <p>￥<span>53</span></p>
                        <p>已选择：<span>{{this.desListsize}}{{this.desListdeocra}}</span></p>
                    </div>
                    <div>
                        <i class="el-icon-close" @click="select"></i>
                    </div>
                </div>
            </div>
            <div class="color">
                <p>颜色</p>
                <div>
                    <li class="li1" v-for="(item,index) in deocras" :key="index" @click="changLi1(index)" style="color:black">
                        {{item.deocra}}
                    </li>
                </div>
            </div>
            <div class="color">
                <p>尺寸</p>
                <div>
                    <li class="li1" v-for="(item,index) in sizes" :key="index" @click="changLi2(index)">
                        {{item.size}}
                    </li>
                </div>
            </div>
            <div class="sure" @click="close(id)">
                确定
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'ShoppingCar',
  data () {
    return {
        books:[],
        allcheck:false,
        isClass:false,
        isClass1:true,
        isShow1:false,
        isShow2:true,
        desListimg:"",
        desListsize:"",
        desListdeocra:"",
        deocras:[],
        imgs:[],
        sizes:[],
        id:0,
        tempB:[],
        totalMoney1:0
        
    }
  },
  created() {
     axios.get('http://localhost:3000/car')//商品列表
     .then(res=>{
         let tempBooks = res.data;
         //给每个商品增加属性 isChecked
         for(let i in tempBooks){
             tempBooks[i].isChecked = false;
         }
         this.books = tempBooks;
     })
     .catch(err=>{
         console.log(err);
     })
  },
  computed:{
      totalMoney:function () {          
          let money = 0;
          let isAllCheck = true;
          for(let i in this.books){
              if(this.books[i].isChecked){
                  money+=this.books[i].count*this.books[i].price;
              }else{
                  isAllCheck = false;
              }
          }
          this.allcheck = isAllCheck;
          this.totalMoney1 = money;
          return money;
      }
  },
  methods:{
      open3() {
        this.$notify({
          title: '收藏成功！',
          message: '喜欢就带我回家吧。',
          position: 'top-center'
        });

        // let payarr = [];
           for(let i=0;i<this.books.length;i++){
               if(this.books[i].isChecked){
                   axios.post('http://localhost:3000/collect',this.books[i])
                    .then(res=>{
                    console.log('修改成功',res.data)
                        
                    });
               }
           }
        // let add = 
        //  axios.patch('http://localhost:3000/collect',add)
        // .then(res=>{
        // // console.log('修改成功',res.data)
        //     this.tempB = res.data;
        //     // console.log(this.tempB)
        //     for(let i=0; i<this.books.length;i++){
        //         if(this.books[i].id==this.tempB.id){
        //             this.books[i]=this.tempB
        //         //    console.log(this.books[i])
        //         }
        //     }
        // //    console.log(this.books)
        // });
      },
      reduceCount(index){//减号
          if(this.books[index].count <= 1){
              this.books[index].count=1;
              return;
          }
          this.books[index].count--;
      },
      addCount(index){//加号
          this.books[index].count++;
      },
    
      checkall(){//选择商品
          this.books.forEach(item=>{
              item.isChecked = event.target.checked;
          });
      },
      select(id){//弹出框改变商品属性
        //   console.log(id)
          this.id = id;
          if(this.isClass){
              if(this.isShow2){
                  this.isShow1 = true;
                  this.isShow2 = false;
                //   console.log(this.isShow1)
              }else{
                  this.isShow1 = false;
                  this.isShow2 = true;
              }
          }else{
              return;
          }
          axios.get('http://localhost:3000/desList/'+id)//商品详情
            .then(res=>{
                let desList  = res.data;
                this.deocras = desList.deocra
                this.imgs = desList.img
                this.sizes = desList.size
                // console.log(desList.deocra)
                // console.log(desList.img)
                // console.log(desList.size)
            })
            .catch(err=>{
                console.log(err);
            })
          axios.get('http://localhost:3000/car/'+id)//购物车的商品
            .then(res=>{
                let list = res.data;
                // console.log(list)
                this.desListimg = list.img;
                this.desListsize = list.size;
                this.desListdeocra = list.deocra;
                // console.log(this.desListimg)
                // console.log(this.desListsize)
            })
            .catch(err=>{
                console.log(err);
            })
      },
      pay(){
          let payarr = [];
           for(let i=0;i<this.books.length;i++){
               if(this.books[i].isChecked){
                   payarr.push(this.books[i])
               }
           }
        //    console.log(payarr)
        //    console.log(this.totalMoney1)
        this.$store.commit('pay',[payarr,this.totalMoney1])
      },
      changLi1(index){//改变商品属性
          this.desListimg = this.imgs[index].img;
           this.desListdeocra = this.deocras[index].deocra;
        // console.log(this.imgs[index].img)
          let zong = this.$el.children[3].children[1].children[1];
          for(let i=0;i<zong.children.length;i++){
              zong.children[index].style.color = "white";
              zong.children[i].style.color = "black";
              zong.children[index].style.background = "rgb(247, 52, 52)";
              zong.children[i].style.background = "white";
          }
      },
      changLi2(index){
          this.desListsize = this.sizes[index].size;
          let zong = this.$el.children[3].children[2].children[1];
          for(let i=0;i<zong.children.length;i++){
              zong.children[index].style.color = "white";
              zong.children[i].style.color = "black";
              zong.children[index].style.background = "rgb(247, 52, 52)";
              zong.children[i].style.background = "white";
          }
        //   console.log(zong.children.length)
      },
      close(id){//关闭商品项情况
        //   console.log(id)
            this.isShow1 = false;
            this.isShow2 = true;
            axios.patch('http://localhost:3000/car/'+id,{
                deocra:this.desListdeocra,
                size:this.desListsize,
                img:this.desListimg
            })
            .then(res=>{
            // console.log('修改成功',res.data)
                this.tempB = res.data;
                // console.log(this.tempB)
               for(let i=0; i<this.books.length;i++){
                   if(this.books[i].id==this.tempB.id){
                       this.books[i]=this.tempB
                    //    console.log(this.books[i])
                   }
               }
            //    console.log(this.books)
            });
            
      },
      deleted(){
        //   console.log(this.books)
          for(let i=0;i<this.books.length;i++){
            //   console.log(this.books[0].id)
              if(this.books[i].isChecked){
                  axios.delete('http://localhost:3000/car/'+this.books[i].id)
                  .then((res)=>{
                    //   console.log('删除成功')
                     axios.get('http://localhost:3000/car')//商品列表
                    .then(res=>{
                        // console.log(res.data)
                        this.books = res.data;
                    })
                    .catch(err=>{
                        console.log(err);
                    })
                  })
                 
                }
              }
          }
        
  },
  beforeUpdate() {
      this.isClass = this.$store.state.isClass;
      this.isClass1 = this.$store.state.isClass1;      
  },
  updated() {
    
  },
  beforeMount() {
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  margin: 0 auto;
  width:98%;
  font-size: .15rem;
  height: 100%;
  overflow: hidden;
}

#box{
    margin-top: .4rem;
    width: 100%;
    flex: 1;
    overflow-y: auto;
     float: left;
}

#box>ul{
    width: 100%;
}
#box>ul>li{
    margin: 8px auto;
    width: 100%;
}
#box .goodsBox .cen{
    width: 100%;
    display: flex;
    align-items: center;
    height: 1.3rem;
}
#box .goodsBox .cen .rig{
    width: 100%;
    display: flex;
    align-items: center;
    height: 1.4rem;
    border-bottom: 1px solid rgb(175, 173, 173);
}
#box .goodsBox:nth-last-of-type(1) .cen .rig:nth-last-of-type(1){
     border-bottom:0;
}
#box div{
    height: 100%;
}
#box .radioBox{
    width: 12%;
    height: 1.1rem;
    line-height: 1.1rem;
    text-align: center;
}
#box .goodsImgBox{
    width:30%;
    height: 1.1rem;
}
#box .goodsImgBox img{
    width:100%;
    height: 100%;
}
#box .goodsInfoBox{
    width: 65%;
    height: 1.1rem;
    margin-left: 5%;
    position: relative;
    /* background: cadetblue; */
}
.goodsInfoBox p:nth-last-of-type(3){
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.goodsInfoBox .cen1{
    color: rgb(148, 147, 146);
    line-height: .35rem;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.goodsInfoBox .cen2{
    display:inline-block;
    width: 98%;
    height: .18rem;
    color: rgb(25, 114, 25);
    margin-top: .1rem;
    border-radius: 10px;
    white-space: nowrap;
    border:1px solid rgb(25, 114, 25);
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.goodsInfoBox p:nth-last-of-type(2) span:nth-of-type(1){
    display:inline-block;
    width: 80%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
     /* margin-top: .1rem; */
}
.last{
    width: 100%;
    color: rgb(241, 41, 41);
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
}
.goodsInfoBox p:nth-last-of-type(1) i{
    font-style: normal;
    color: rgb(148, 147, 146);
}
.goodsInfoBox p:nth-last-of-type(1) i:nth-last-of-type(2){
    text-decoration: line-through;
    margin-left: 3%;
}
.goodsInfoBox p:nth-last-of-type(1) .lasti{
    display: inline-block;
    color: rgb(148, 147, 146);
    margin-left: 48%;
}
.goodsInfoBox p:nth-last-of-type(1) .lasti .lasti2{
   color: rgb(148, 147, 146);
    /* margin-left: 60%; */
}
.goodsInfoBox .add{
    position: absolute;
    bottom:0;
    right: 0;
    border:1px solid rgb(177, 176, 176);
}
.btnReduce, .btnAdd, .count{
    width: .3rem;
    height: .25rem;
    border:0;
    text-align: center;
    background: white;
    outline: none;
}
.btnReduce{
    border-right:1px solid rgb(177, 176, 176);
}
.btnAdd{
    border-left:1px solid rgb(177, 176, 176);
}
#pId{
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    overflow:hidden;
}
input[type="checkbox"]{
    display: inline-block;
    width: .22rem;
    height: .2rem;
    margin: 0 9px;
    appearance: none;
    background: #fff;
    border-radius: 50%;
    border: 1px solid rgb(82, 81, 81);
    outline: none;
}

input[type="checkbox"]:checked{/* 复选框选中的样式 使用带有对号的 背景图片打底*/
   background: url("../assets/img/eglass-check.png") no-repeat;
    background-size: 100% 100%;
    border: none;
}
.goodsTotalBox{
    width: 100%;
    height: .5rem;
    position: fixed;
    bottom:.52rem;
    z-index: 4;
    left: 0;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgb(167, 165, 165);
    background: #fff;
}
.left{
    height: 100%;
    width: 67%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.right{
    width: 28%;
    height: 100%;
    text-align: center;
    line-height: .5rem;
    background: rgb(235, 58, 58);
    font-size: .2rem;
    color: #fff;
    
}
.goodsTotalBox1{
    display: none;
}
.messg1{
    /* position: fixed; */
    height: 5rem;
    width: 100%;
    z-index: 7;
    transform: translateY(5rem);
    transition: all 1s;
    margin-top: .5rem;
    z-index: -2;
    float: left;
    /* display: none; */
    opacity: 0;
}
.messg2{
    position: fixed;
    bottom: 0;
    left: 0;
    /* height: 5rem; */
    width: 100%;
    z-index: 7;
    transform: translateY(0);
    transition: all 1s;
    background: white;
    float: left;
}
.imgT{
    height: .8rem;
    width: 100%;
    position: relative;
}
.img1{
    width: 1rem;
    height: 1rem;
    border: 1px solid skyblue;
    position: absolute;
    top: -.22rem;
    left: .15rem;
}
.img1 img{
    height: 100%;
    width: 100%;
   
}
.PC{
    width: 65%;
    height: 100%;
    float: right;
    display: flex;
    justify-content: space-between;
}
.PC div:nth-of-type(1){
    width: 80%;
    height: .8rem;
}
.PC div:nth-of-type(1) p:nth-of-type(1){
    width: 100%;
    font-size: .18rem;
    color: rgb(247, 52, 52);
}
.PC div:nth-of-type(1) p:nth-of-type(2){
    width: 100%;
    font-size: .14rem;
} 
.PC div:nth-of-type(2){
    width: 15%;
    height: .4rem;
} 
.PC div:nth-of-type(2) i{
    display: block;
    width: .4rem;
    height: .4rem;
    font-size: .3rem;
}
.color{
    width: 100%;
    font-size: .15rem;
    margin-bottom: .1rem;
}
.color p{
     font-size: .2rem;
     line-height: .5rem;
}
.color div{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.li1{
    width: 30%;
    height: .3rem;
    margin-right: 3.85%;
    text-align: center;
    line-height: .3rem;
    margin-bottom: .1rem;
    border: 1px solid black;
    overflow: hidden;
}
.li2{
    width: 30%;
    height: .3rem;
    margin-right: 3.85%;
    text-align: center;
    line-height: .3rem;
    margin-bottom: .1rem;
    border: 1px solid black;
    overflow: hidden;
    background: rgb(247, 52, 52);
    color: #fff;
}
.color div li:nth-of-type(3n){
    margin-right: 0;
}
.sure{
    width: 100%;
    height: .4rem;
    background: rgb(247, 52, 52);
    text-align: center;
    line-height: .4rem;
    color: #fff;
    font-size: .2rem;
    z-index: 2;
}
</style>
/*