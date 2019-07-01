<template>
    <div>
        <div class="box">
            <z-input value="张三" disabled></z-input>
            <z-input value="李四" readonly></z-input>
            <z-input value="王五"></z-input>
        </div>

        <div class="box">
            <z-input v-model="message"></z-input>
            <span>message:{{message}}</span>
        </div>
        <div class="box">
            <z-input value="" error="姓名不能少于两个字"></z-input>
        </div>
    </div>
</template>

<script>
import Input from '../../../src/input/input'
export default {
    name: "",
    components:{
        'z-input':Input
    },
    data() {
        return {
            message:''
        };
    }
};
</script>

<style lang='scss' scoped>
    .box{
        padding:10px 0;
    }
</style>
