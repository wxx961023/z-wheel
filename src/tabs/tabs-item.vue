<template>
    <div class="tabs-item" :class="classes" @click="xxx">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'TabsItemWheel',
        inject:['eventBus'],
        data(){
            return {
                active:false
            }
        },
        props:{
            name:{
                type:String|Number,
                required:true
            }
        },
        computed:{
            classes(){
                return {
                    active:this.active
                }
            }
        },
        created(){
            this.eventBus.$on('update:selected',(name)=>{
                console.log(this.active)
                this.active = name === this.name;
            })
        },
        methods:{
            xxx(){
                console.log(this.name)
                this.eventBus.$emit('update:selected',this.name)
            }
        }
    }
</script>

<style lang='scss' scoped>
    .tabs-item{
        flex-shrink: 0;
        padding: 0 1em;
        &.active{
            background: red;
        }
    }
</style>
