import Toast from '../toast/toast.vue'
export default {
  install(Vue,options){
    Vue.prototype.$toast = function(message,toastOptions){
      let Constructor = Vue.extend(Toast)
      console.log(toastOptions);
      let toast = new Constructor({
        propsData:{ 
          position:'bottom',
          enableHtml:false,
          closeButton:{
            text:'已充值',
            callback(){
              console.log('1')
            }
          },
          autoClose:false,
          autoCloseDelay:3
         }
      })
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}