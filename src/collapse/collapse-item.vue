<template>
    <div class="collapse-item">
        <div class="title" @click="toggle">
            {{title}}
        </div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name:'CollapseItemWheel',
        data(){
            return {
                open:false
            }
        },
        props:{
            title:{
                type:String,
                required:true
            }
        },
        mounted() {
            this.eventBus && this.eventBus.$on('update:selected',(vm)=>{
                if(vm !== this){
                    this.close()
                }
            })
        },
        inject:['eventBus'],
        methods:{
            toggle(){
                if(this.open){
                    this.open = false
                }else{
                    this.open = true
                    this.eventBus && this.eventBus.$emit('update:selected',this)
                }
            },
            close(){
                this.open = false
            }
        }
    }
</script>

<style lang='scss' scoped>
    $border-radius: 4px;
    $border-color:#ddd;
    .collapse-item{
        > .title{
            border:1px solid $border-color;
            margin-top:-1px;
            margin-right:-1px;
            margin-left:-1px;
            min-height: 32px;
            display: flex;
            align-items:center;
            padding:0 8px;
        }
        &:first-child{
            > .title{
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }
        }
        &:last-child{
            > .title:last-child{
                border-bottom-left-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
        }
        > .content{
            padding:8px;
        }
    }
</style>
