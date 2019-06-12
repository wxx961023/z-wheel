<template>
  <div class="toast" ref="wrapper">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <span class="line" ref="line"></span>
    <span class="close" v-if="closeButton" @click="onClickClose">
      {{closeButton.text}}
    </span>
  </div>
</template>

<script>
  export default {
    name:'ToastWheel',
    props:{
      autoClose:{
        type:Boolean,
        default:true
      },
      autoCloseDelay:{
        type:Number,
        default:3,
      },
      closeButton:{
        type:Object,
        default(){
          return{
            text:'关闭',
            callback:undefined,
          }
        }
      },
      enableHtml:{
        type:Boolean,
        default:false
      }
    },
    created(){
      
    },
    mounted(){
      this.updateStyle()
      this.execAutoClose()
    },
    methods:{
      updateStyle(){
      this.$nextTick(()=>{
          this.$refs.line.style.height = `
            ${this.$refs.wrapper.getBoundingClientRect().height}px`
        })
      },
      execAutoClose(){
        if(this.autoClose){
          setTimeout(()=>{
            this.close()
          },this.autoCloseDelay*1000)
        }
      },
      close(){
        this.$el.remove()
        this.$destroy()
      },
      onClickClose(){
        this.close()
        if(this.closeButton &&　typeof this.closeButton.callback === 'function'){
          this.closeButton.callback()
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
  $font-size:14xp;
  $toast-min-height:40px;
  $toast-bg:rgba(0,0,0,0.75);
  .toast{
    min-height: $toast-min-height; font-size: $font-size; position: fixed;
    top: 0; left: 50%; transform: translateX(-50%); display: flex;
    align-items:center; background: $toast-bg; border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0,0,0,0.5); padding: 0 16px; color:white;
    line-height: 1.8;
    .message{
      padding:8px 0;
    }
    .close{
      margin-left: 16px;
      flex-shrink: 0;
    }
    .line{
      height: 100%;
      border-left:1px solid #666;
      margin-left:16px;
    }
  }
</style>