<template>
    <div class="toast-wrapper" ref="wrapper">
        <z-button @click="showToast1">默认顶部弹窗</z-button>
        <br />
        <br />
        <z-button @click="showToast2">默认中间弹窗</z-button>
        <br />
        <br />
        <z-button @click="showToast3">默认底层弹窗</z-button>
        <br />
        <br />
        <z-button @click="showToast4">设置手动关闭</z-button>
        <br />
        <br />
        <z-button @click="showToast5">设置关闭回调</z-button>
    </div>
</template>

<script>
import Vue from "vue";
import Toast from "../../../src/toast/toast";
import Plugin from "../../../src/toast/plugin";
import Button from "../../../src/button/button";
import tabsPaneVue from '../../../src/tabs/tabs-pane';

Vue.use(Plugin);


export default {
    components:{
        'z-toast':Toast,
        'z-button':Button
    },
    name: "",
    data() {
        return {};
    },
    methods: {
        showToast1() {
            this.$toast('出现顶部位置自动关闭',{ position:'top', autoClose:2, }, this.$refs.wrapper )
        },
        showToast2() { this.$toast('出现中间位置自动关闭', { position:'middle',autoClose:2, }, this.$refs.wrapper )
        },
        showToast3() { this.$toast('出现底部位置自动关闭', { position:'bottom',autoClose:2, }, this.$refs.wrapper )
        },
        showToast4() {
            this.$toast('设置手动关闭按钮',
                {
                    autoClose:false,
                    
                },
                this.$refs.wrapper
            )
        },
        showToast5() {
            this.$toast('设置手动关闭回调函数', 
                { 
                    autoClose:false, 
                    closeButton: { 
                        text: '关闭', 
                        callback:()=> { 
                            alert('弹窗被关闭了') 
                        } 
                    } 
                }, this.$refs.wrapper )
        }
    }
}
</script>

<style lang='scss' scoped>
    .toast-wrapper {
        padding: 20px;
        width: 100%;
        margin: 0 auto;
        height: 50vh;
        border: 1px solid #333333;
        position: relative; 
        overflow: hidden;
    }
    
</style>
