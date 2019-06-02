import Vue from 'vue';
import Button from './button/button.vue';
import Icon from './button/icon.vue';
import ButtonGroup from './button/button-group.vue';
import Input from './input/input.vue';

Vue.component('z-button',Button)
Vue.component('z-icon',Icon)
Vue.component('z-button-group',ButtonGroup)
Vue.component('z-input',Input)


new Vue({
  el:'#app',
  data:{
    loading1:false,
    loading2:false,
  }
})