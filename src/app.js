import Vue from 'vue';
import Button from './button/button.vue';
import Icon from './button/icon.vue';
import ButtonGroup from './button/button-group.vue';
import Input from './input/input.vue';
import Row from './grid/row.vue'
import Col from './grid/col.vue'


Vue.component('z-button',Button)
Vue.component('z-icon',Icon)
Vue.component('z-button-group',ButtonGroup)
Vue.component('z-input',Input)
Vue.component('z-row',Row)
Vue.component('z-col',Col)

new Vue({
  el:'#app',
  data:{
    loading1:false,
    loading2:false,
    message:'hi'
  }
})