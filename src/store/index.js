/*
 * @Description: 
 * @Author: 王磊
 * @Date: 2019-11-14 15:37:17
 * @LastEditors: 王磊
 * @LastEditTime: 2019-12-04 21:17:24
 */
import Vue from 'vue';
import VueX from 'vueX';
import Axios from 'axios';
import axios from 'axios';

Vue.use(VueX)

let store = new VueX.Store({
    state: {
        footers:[
            {
                "spanclass":"icon-shouye2",
                "title":"首页"
            },
            {
                "spanclass":"icon-pinpaiqingcang",
                "title":"品牌清仓"
            },    
            {
                "spanclass":"icon-9",
                "title":"9块邮"
            },    
            {
                "spanclass":"icon-gouwuche",
                "title":"购物车"
            },   
            {
                "spanclass":"icon-wodedangxuan",
                "title":"我的卷皮"
            }
        ],
        isactive:0,
        wenzi:'',
        isClass:false,
        isClass1:true,
        books:[],
        pay:[]

    },
    //计算属性
    getters:{
        
    },
    mutations:{
        HotAction(state,name){
            state.currtype = name;
        },
        
        change(state){
            let zi = document.getElementById("zi").innerHTML;
            if(zi!="编辑"){
                state.wenzi = "编辑";
                state.isClass = false;
                state.isClass1 = true;
            }else{
                state.wenzi = "完成";
                state.isClass = true;
                state.isClass1 = false;
                
            }
          },
          pay(state,shuju){
              state.pay = shuju;
          }
    },
    actions:{
        // change1(context){
        //     // Axios.get('/type')
        //     Axios.get('http://localhost:3000/car')
        //     .then((response)=> {
        //         // console.log(response.data)
        //     //   context.commit('HotAction',response.data) 
        //       context.commit('change1',response.data) 
                
        //     })
        //     .catch(function (err) {
        //         console.log(err);
        //     });
        // },
    }
})

export default  store;