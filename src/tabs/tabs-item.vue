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
                this.active = name === this.name;
            })
        },
        methods:{
            xxx(){
                this.eventBus.$emit('update:selected',this.name,this)
            }
        }
    }
</script>

<style lang='scss' scoped>
    $blue:#409EFF;
    .tabs-item{
        flex-shrink: 0;
        padding: 0 1em;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
        &.active{
            color:$blue;
            font-weight: bold;
        }
    }
</style>
