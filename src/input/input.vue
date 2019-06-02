<template>
  <div class="input-wrapper" :class="{error:error,search:search}">
    <input 
      :value="value" 
      :disabled="disabled" 
      :readonly="readonly" 
      :search="search"
      @change="$emit('change',$event.target.value)"
      @input="$emit('input',$event.target.value)"
      @focus="$emit('focus',$event.target.value)"
      @blur="$emit('blur',$event.target.value)"

    >
    <template v-if="error" >
      <icon name="error" class="icon-error"></icon>
      <span class="errorMessage">{{error}}</span>
    </template>
    <template v-if="search" >
      <z-button class="button-search">搜索</z-button>
    </template>
  </div>
</template>

<script>
  import Icon from '../button/icon.vue';
  import Button from '../button/button.vue';
  export default {
    name:'',
    props:{
      value:{
        type:String
      },
      disabled:{
        type:Boolean,
        default:false,
      },
      readonly:{
        type:Boolean,
        default:false
      },
      error:{
        type:String
      },
      search:{
        type:Boolean,
        default:false
      },
      message:{
        type:String
      }
    },
    components:{
      'icon':Icon,
      'z-button':Button,
    }
  }
</script>

<style lang='scss' scoped>
  $border-radius: 4px;
  $height:32px;
  $border-color:#999;
  $border-color-hover:#666;
  $box-shadow-color: rgba(0,0,0,0.5);
  $font-size: 14px;
  $red:#F1453D;
  .input-wrapper{
    display: inline-flex; align-items: center; vertical-align: middle;
    > input{
      border-radius: $border-radius; height: $height; font-size:inherit; outline: none;
      padding: 0 0.5em; border: 1px solid $border-color;
      &[disabled],&[readonly]{ cursor: not-allowed; }
      &:hover{ border-color: $border-color-hover;}
      &:focus{ box-shadow: inset 0 1px 3px $box-shadow-color; }
      &:not(:last-child){ margin-right: 0.5em; }
    }
    &.error{ 
      > input{ border-color:$red; }
      > .icon-error{ fill: $red; }
      > .errorMessage{ color: $red; }
    }
    &.search{
      &:last-child{
        position: relative;
        > .button-search{ 
          margin-right: 7px;
          right: 0; position: absolute; border-top-left-radius: 0; border-bottom-left-radius: 0; }
      }
    }
  }
</style>
