<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name:'LayoutWheel',
    data(){
      return {
        layoutClass:{
          hasSider:false
        }
      }
    },
    mounted(){
      this.$children.forEach((vm)=>{
        if(vm.$options.name === 'SiderWheel'){
          this.layoutClass.hasSider = true
        }
      })
    }
  }
</script>

<style lang='scss' scoped>
  .layout{
    height: 80vh;
    display: flex;
    flex-grow:1; 
    color:white;
    flex-direction: column;
    &.hasSider{
      flex-direction:row;
    }
  }
</style>
