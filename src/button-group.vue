<template>
  <div class="button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name:'ButtonGroupWheel',
  }
</script>

<style lang='scss' scoped>
  .button-group{
    display:inline-flex;
    > .z-button{
      border-radius:0;
      margin-left:-1px;
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
