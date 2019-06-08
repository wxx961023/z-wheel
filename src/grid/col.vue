<template>
  <div class="col" :class="colClass" :style="colStyle" >
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name:'ColWheel',
    props:{
      span:{
        type:[Number,String]
      },
      offset:{
        type:[Number,String]
      },
    },
    computed:{
      colClass(){
        let {span,offset} = this
        return [
          span &&　`col-${span}`,
          offset && `offset-${offset}`
          ]
      },
      colStyle(){
        return{
          paddingLeft:this.gutter/2+'px',
          paddingRight:this.gutter/2+'px'
        }
      }
    },
    data(){
      return{
        gutter:0
      }
    }
  }
</script>

<style lang='scss' scoped>
  .col{
    $class-col:col-;
    @for $n from 1 through 24 {
      &.#{$class-col}#{$n}{
        width:($n/24)*100%
      }
    }
    $class-offset:offset-;
    @for $n from 1 through 24 {
      &.#{$class-offset}#{$n}{
        margin-left:($n/24)*100%
      }
    }
  }
</style>
