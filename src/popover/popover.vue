<template>
    <div class="popover" @click="onClick" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper" style="display:inline-block">
            <slot></slot>
        </span>
    </div>
</template>

<script>
export default {
    name: "PopoverWheel",
    data() {
        return {
            visible: false
        };
    },
    methods: {
        positionContent() {
            document.body.appendChild(this.$refs.contentWrapper);
            let { width, height, left, top } = this.$refs.triggerWrapper.getBoundingClientRect();
            this.$refs.contentWrapper.style.left = window.scrollX + left + "px";
            this.$refs.contentWrapper.style.top = window.scrollY + top + "px";
        },
        eventHandler(e){
                if (this.$refs.popover && 
                    (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))){ return }
                if (this.$refs.contentWrapper && 
                    (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))){ return }
                    console.log('document')
                    this.close()
        },
        listenToDocument() {
            document.addEventListener("click", this.eventHandler);
        },
        open() {
            this.visible = true
            this.$nextTick(() => {
                this.positionContent();
                document.addEventListener("click", this.eventHandler);
            });
        },
        close(){
            this.visible = false
            document.removeEventListener("click", this.eventHandler);
        },
        onClick(event) {
            if (this.$refs.triggerWrapper.contains(event.target)) {
                if (this.visible) {
                    this.close()
                }else{
                    this.open()
                }
            }
        }
    }
};
</script>

<style lang='scss' scoped>
$border-color:#333;
$border-radius:4px;
.popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
}
.content-wrapper {
    border: 1px solid $border-color;
    border-radius: $border-radius;
    position: absolute;
    padding: 0.5em 1em;
    margin-top: -10px;
    transform: translateY(-100%);
    max-width: 20em;
    word-break:break-all;
    background: white;
    // box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    filter:drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
    &::before,&::after{
        content:'';
        display: block;
        width: 0px;
        height: 0px;

        top:100%;
        left:10px;
        position: absolute;
    }
    &::before{
        border: 10px solid transparent;
        border-top-color:black;
    }
    &::after{
        border: 10px solid transparent;
        border-top-color:white;
        top:calc(100% - 1px);
    }
}
</style>
