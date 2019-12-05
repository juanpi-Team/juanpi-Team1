<!--
 * @Description: 
 * @Author: 王磊
 * @Date: 2019-11-26 10:25:55
 * @LastEditors: 王磊
 * @LastEditTime: 2019-11-27 20:00:49
 -->
<template>
    <div>
        <Wseach1></Wseach1>
        <Wseachmain></Wseachmain>
    </div>
</template>

<script>
import Wseach1 from '../components/Wseach1';
import Wseachmain from '../components/Wseachmain';
export default {
    name:"WseachPage",
    // props:["id"],
    data() {
        return {
            type:'女装'
        }
    },
    components:{
        Wseach1,Wseachmain
    },
    created() {
    },
    mounted() {
       
    },
    beforeUpdate() {
        
    },
    methods:{
        
    }
     
}
</script>

<style scoped>

</style>