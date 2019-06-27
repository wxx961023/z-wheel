<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'TabsWheel',
        props:{
            selected:{
                type:String,
                required:true
            },
            direction:{
                type:String,
                required:true,
                default:'horizontal',
                validator(value){
                    return ['horizontal','vertical'].indexOf(value)>=0
                }
            }
        },
        created(){

        }
    }
</script>

<style lang='scss' scoped>

</style>
