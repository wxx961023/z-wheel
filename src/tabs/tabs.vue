<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
import Vue from "vue";
export default {
    name: "TabsWheel",
    data() {
        return {
            eventBus: new Vue()
        };
    },
    provide() {
        return {
            eventBus: this.eventBus
        };
    },
    props: {
        selected: {
            type: String,
            required: true
        },
        direction: {
            type: String,
            default: "horizontal",
            validator(value) {
                return ["horizontal", "vertical"].indexOf(value) >= 0;
            }
        }
    },
    mounted() {
        this.$children.forEach(vm => {
            if (vm.$options.name === "TabsHeadWheel") {
                vm.$children.forEach(childVm => {
                    if (
                        childVm.$options.name === "TabsItemWheel" &&
                        childVm.name === this.selected
                    ) {
                        this.eventBus.$emit(
                            "update:selected",
                            this.selected,
                            childVm
                        );
                    }
                });
            }
        });
    }
};
</script>

<style lang='scss' scoped>

</style>
