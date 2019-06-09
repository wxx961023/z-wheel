<template>
  <div class="content">
    <slot>Content</slot>
  </div>
</template>

<script>
  export default {
    name:'',
    data(){
      return {

      }
    }
  }
</script>

<style lang='scss' scoped>
  .content{
    flex-grow: 1;
    text-align: center;
  }
</style>
