<template>
  <div class="sider">
    <slot>Sider</slot>
  </div>
</template>

<script>
  export default {
    name:'SiderWheel',
    data(){
      return {

      }
    }
  }
</script>

<style lang='scss' scoped>
  .sider{
    text-align: center;
    background: #666;
    width: 120px;
    display: flex;
    align-items:center;
    justify-content: center;
    font-size: 20px;
  }
</style>
