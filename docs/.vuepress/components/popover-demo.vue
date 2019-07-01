<template>
    <div>
        <div style="margin: 100px 100px 0 100px">
            <z-popover position="bottom">
                <template slot="content">
                    <div>popover内容</div>
                </template>
                <z-button>向下</z-button>
            </z-popover>
            <z-popover>
                <template slot="content">
                    <div>popover内容</div>
                </template>
                <z-button>向上</z-button>
            </z-popover>
            <z-popover position="left">
                <template slot="content">
                    <div>popover内容</div>
                </template>
                <z-button>向左</z-button>
            </z-popover>
            <z-popover position="right">
                <template slot="content">
                    <div>popover内容</div>
                </template>
                <z-button>向右</z-button>
            </z-popover>
        </div>
        <br />
        <div style="margin: 100px">
            <z-popover position="bottom" trigger="hover">
                <template slot="content">
                    <div>popover内容</div>
                </template>
                <z-button>下浮</z-button>
            </z-popover>
            <z-popover trigger="hover">
                <template slot="content">
                    <div>popover内容</div>
                </template>
                <z-button>上浮</z-button>
            </z-popover>
            <z-popover position="left" trigger="hover">
                <template slot="content">
                    <div>popover内容</div>
                </template>
                <z-button>左浮</z-button>
            </z-popover>
            <z-popover position="right" trigger="hover">
                <template slot="content">
                    <div>popover内容</div>
                </template>
                <z-button>右浮</z-button>
            </z-popover>
        </div>
    </div>
</template>

<script>
import Popover from "../../../src/popover/popover"
import Button from "../../../src/button/button"
export default {
    name: "",
    components: {
        "z-popover": Popover,
        "z-button":Button
    }
};
</script>

<style lang='scss' scoped>
</style>
