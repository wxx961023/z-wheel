<template>
  <button class="z-button"  
    :class="{[`icon-${iconPosition}`]:true,circle}" 
    @click="$emit('click')"
  >
    <z-icon :name="icon" v-if="icon && !loading"></z-icon>
    <z-icon class="loading icon" name="loading" v-if="loading"></z-icon>
    <div class="content">
      <slot/>
    </div>
  </button>
</template>

<script>
  import Icon from './icon.vue';
  export default {
    components:{
      'z-icon':Icon
    },
    name:'ButtonWheel',
    props:{
      icon:{},
      iconPosition:{
        type:String,
        default:'left',
        validator(value){
          return value === 'left' || value === 'right'
        }
      },
      loading:{
        type:Boolean,
        default:false
      },
      circle:{
        type:Boolean,
        default:false
      }
    },
  }
</script>

<style lang='scss' scoped>
  $font-size:14px;
  $button-active-bg:#eee;
  $background-color: white;
  $border-radius: 4px;
  $button-height:32px;
  $border-color-hover:#666;
  $border-color:#999;
  $bg-active-color:#666 ;
  
  @keyframes spin{
    0%{transform:rotate(0deg);}
    100%{transform:rotate(360deg);}
  }
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
    .loading{
      animation: spin 0.75s infinite linear;
    }
    &.circle{
      height:32px;
      width: 32px;
      border-radius: 50%;
      position: relative;
      > .icon{
        position: absolute;

      }
    }
  }
</style>
