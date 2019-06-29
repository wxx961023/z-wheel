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
import Tabs from './tabs/tabs.vue'
import TabsHead from './tabs/tabs-head'
import TabsBody from './tabs/tabs-body'
import TabsItem from './tabs/tabs-item'
import TabsPane from './tabs/tabs-pane'
import Popover from './popover/popover'
import Collapse from './collapse/collapse'
import CollapseItem from './collapse/collapse-item'

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
Vue.component('z-tabs',Tabs);
Vue.component('z-tabs-head',TabsHead);
Vue.component('z-tabs-body',TabsBody);
Vue.component('z-tabs-item',TabsItem);
Vue.component('z-tabs-pane',TabsPane);
Vue.component('z-popover',Popover);
Vue.component('z-collapse',Collapse);
Vue.component('z-collapse-item',CollapseItem);

Vue.use(Plugin)

new Vue({
  el:'#app',
  data:{
    selectedTab:'sports'
  },
  created(){
  },
  methods:{
    showToast(){
      this.$toast('你的智商需要充值!',{ 
        position:'top',
        enableHtml:false,
        closeButton:{
          text:'已充值',
          callback(){
            console.log('1')
          }
        },
        autoClose:3,
      })
    }
  }
})