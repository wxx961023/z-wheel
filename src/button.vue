<template>
  <div class="button-wrapper">
    <button class="z-button"  :class="{[`icon-${iconPosition}`]:true}">
      <svg class="icon" v-if="icon">
        <use :xlink:href="`#i-${icon}`"></use>
      </svg>
      <div class="content">
        <slot></slot>
      </div>
    </button>
  </div>
</template>

<script>
  export default {
    name:'ButtonWheel',
    props:{
      icon:{},
      iconPosition:{
        type:String,
        default:'left',
        validator(value){
          return value === 'left' || value === 'right'
        }
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
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: top;
    &.icon-left{
      > .icon{ order:1 ;margin-right: .2em;}
      > .content{ order:2; }
    }
    &.icon-right{
      > .icon{ order:2 ;margin-right: 0;margin-left: .2em;}
      > .content{ order:1 ;}
    }
    &:focus{ outline: none; }
    &:active{ background: $bg-active-color; }
    &:hover{ border-color:$border-color-hover; }
  }
  .button-wrapper{
    display: inline-block;
  }
</style>
