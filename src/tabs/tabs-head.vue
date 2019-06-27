<template>
    <div>
        <slot></slot>
        <slot name="actions"></slot>
    </div>
</template>

<script>
    export default {
        name:'TabsHeadWheel',
        inject:['eventBus'],
        data(){
            return {

            }
        }
    }
</script>

<style lang='scss' scoped>

</style>
