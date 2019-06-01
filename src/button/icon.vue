<template>
  <svg class="icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
  export default {
    name:'IconWheel',
    props:['name']
  }
</script>

<style lang='scss' scoped>

</style>
