<template>
  <div class="button-wrapper">
    <button class="z-button">按钮</button>
  </div>
</template>

<script>
  export default {
    name:'ButtonWheel',
    data(){
      return {

      }
    }
  }
</script>

<style lang='scss' scoped>
  $background-color: white;
  $border-radius: 4px;
  $button-height:32px;
  $border-color-hover:#666;
  $border-color:#999;
  $bg-active-color:#666 ;
  .z-button{  
    background: $background-color;
    border-radius: $border-radius;
    padding: 0 1em;
    height: $button-height;
    border: 1px solid $border-color;
    &:focus{
      outline: none;
    }
    &:active{
      background: $bg-active-color;
    }
    &:hover{
      border-color:$border-color-hover;
    }
  }
</style>
