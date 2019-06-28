<template>
    <div class="popover" @click.stop="xxx">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible" @click.stop>
            <slot name="content" class="name"></slot>
        </div>
        <span ref="triggerWrapper">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name:'PopoverWheel',
        data(){
            return {
                visible:false
            }
        },
        methods:{
            xxx(){
                this.visible = !this.visible
                if(this.visible){
                    this.$nextTick(()=>{
                        document.body.appendChild(this.$refs.contentWrapper)
                        let {width,height,left,top} = this.$refs.triggerWrapper.getBoundingClientRect()
                        this.$refs.contentWrapper.style.left = window.scrollX + left + 'px'
                        this.$refs.contentWrapper.style.top = window.scrollY + top +'px'
                        let eventHandler = ()=>{
                            this.visible = false
                            document.removeEventListener('click',eventHandler)
                        }
                        document.addEventListener('click',eventHandler)
                    })
                }
            }
        }
    }
</script>

<style lang='scss' scoped>
    .popover{
        display: inline-block;
        vertical-align: top;
        position: relative;
    }
    .content-wrapper{
        border: 1px solid pink;
        position: absolute;
        transform: translateY(-100%);
        box-shadow: 0 0 3px rgba(0,0,0,0.5)
    }
</style>
