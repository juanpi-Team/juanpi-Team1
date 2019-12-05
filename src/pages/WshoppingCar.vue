<!--
 * @Description: 
 * @Author: 王磊
 * @Date: 2019-11-27 19:58:15
 * @LastEditors: 王磊
 * @LastEditTime: 2019-12-04 20:53:50
 -->
<template>
    <div>
        <WshoppCar1></WshoppCar1>
        <WshoppCar2></WshoppCar2>
    </div>
</template>

<script>
import WshoppCar1 from '../components/WshoppCar1'
import WshoppCar2 from '../components/WshoppCar2'
export default {
    name:"WshoppingCar",
    data() {
        return {
            
        }
    },
    components:{
        WshoppCar1,WshoppCar2
    },
    beforeUpdate() {
        // console.log("aaaa")
    },
}
</script>

<style scoped>

</style>