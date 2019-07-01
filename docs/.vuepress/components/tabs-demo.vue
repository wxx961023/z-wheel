<template>
    <div>
        <z-tabs selected="sports">
            <z-tabs-head>
                <template slot="actions">
                    <button>设置</button>
                </template>
                <z-tabs-item name="woman"> 美女 </z-tabs-item>
                <z-tabs-item name="finance">财经</z-tabs-item>
                <z-tabs-item name="sports">足球</z-tabs-item>
            </z-tabs-head>
            <z-tabs-body>
                <z-tabs-pane name="woman">美女相关</z-tabs-pane>
                <z-tabs-pane name="finance">财经相关</z-tabs-pane>
                <z-tabs-pane name="sports">足球相关</z-tabs-pane>
            </z-tabs-body>
        </z-tabs>
    </div>
</template>

<script>
import Tabs from "../../../src/tabs/tabs";
import TabsHead from "../../../src/tabs/tabs-head";
import TabsBody from "../../../src/tabs/tabs-body";
import TabsItem from "../../../src/tabs/tabs-item";
import TabsPane from "../../../src/tabs/tabs-pane";
export default {
    components: {
        "z-tabs": Tabs,
        "z-tabs-head": TabsHead,
        "z-tabs-body": TabsBody,
        "z-tabs-item": TabsItem,
        "z-tabs-pane": TabsPane
    },
    name: "",
    data() {
        return {};
    }
};
</script>

<style lang='scss' scoped>
</style>
