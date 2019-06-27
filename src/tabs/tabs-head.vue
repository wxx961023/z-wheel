<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name:'TabsHeadWheel',
        inject:['eventBus'],
    }
</script>

<style lang='scss' scoped>
    $tabs-height:40px;
    .tabs-head{
        display: flex;
        height: $tabs-height;
        border: 1px solid pink;
        justify-content:flex-start;
        > .actions-wrapper{
            margin-left: auto;
        }
    }
</style>
