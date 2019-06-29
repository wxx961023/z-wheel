<template>
    <div>
        <z-button>默认按钮</z-button>
        <z-button icon="settings" :loading="true">按钮</z-button>
        <z-button icon="settings" icon-position="right">按钮</z-button>
        <z-button icon="settings" circle :loading="toggle" @click="toggle=!toggle"></z-button>
        <z-button-group>
            <z-button icon="left">上一页</z-button>
            <z-button>更多</z-button>
            <z-button icon="right" icon-position="right">下一页</z-button>
        </z-button-group>
    </div>
</template>

<script>
import Button from "../../../src/button/button";
import ButtonGroup from "../../../src/button/button-group";

export default {
    data() {
        return {
            loading:false,
            toggle:false
        };
    },
    components: {
        "z-button": Button,
        'z-button-group':ButtonGroup
    },
};
</script>

