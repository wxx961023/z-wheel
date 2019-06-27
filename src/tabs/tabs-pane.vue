<template>
    <div class="tabs-pane">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'TabsPaneWheel',
        inject:['eventBus'],
        data(){
            return {

            }
        },
        created(){
            this.eventBus.$on('update:selected',(name)=>{
                console.log(name);
                
            })
        }
    }
</script>

<style lang='scss' scoped>

</style>
