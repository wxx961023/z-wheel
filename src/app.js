import Vue from 'vue';
import Button from './button/button.vue';
import Icon from './button/icon.vue';
import ButtonGroup from './button/button-group.vue';
import Input from './input/input.vue';
import Row from './grid/row.vue';
import Col from './grid/col.vue';
import Layout from './layout/layout.vue';
import Header from './layout/header.vue';
import Content from './layout/content.vue';
import Footer from './layout/footer.vue';
import Sider from './layout/sider.vue';
import Toast from './toast/toast.vue';
import Plugin from './toast/plugin.js';


Vue.component('z-button',Button);
Vue.component('z-icon',Icon);
Vue.component('z-button-group',ButtonGroup);
Vue.component('z-input',Input);
Vue.component('z-row',Row);
Vue.component('z-col',Col);
Vue.component('z-layout',Layout);
Vue.component('z-header',Header);
Vue.component('z-content',Content);
Vue.component('z-footer',Footer);
Vue.component('z-sider',Sider);
Vue.component('z-toast',Toast);
Vue.use(Plugin)

new Vue({
  el:'#app',
  data:{
    loading1:false,
    loading2:false,
    message:'hi'
  },
  created(){
    
  },
  methods:{
    showToast(){
      this.$toast()
    }
  }
})