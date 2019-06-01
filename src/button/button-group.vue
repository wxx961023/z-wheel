<template>
  <div class="button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name:'ButtonGroupWheel',
    mounted() {
      for(let node of this.$el.children){
        let name = node.nodeName.toLowerCase()
        if(name !== 'button'){
          console.warn(`子元素必须都是 'button' ,但是你写的是${name}`)
        }
      }
    },
  }
</script>

<style lang='scss' scoped>
  .button-group{
    display:inline-flex;
    > .z-button{
      border-radius:0;
      &:not(:first-child){
        margin-left:-1px;
      }
      &:first-child{
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      &:last-child{
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      &:hover{
        z-index: 1;
      }
    }
  }
</style>
