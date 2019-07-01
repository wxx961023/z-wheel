<template>
    <div>
        <z-layout>
            <z-header></z-header>
            <z-content></z-content>
            <z-footer></z-footer>
        </z-layout>
        <br />
        <z-layout>
            <z-sider></z-sider>
            <z-layout>
                <z-header></z-header>
                <z-content></z-content>
                <z-footer></z-footer>
            </z-layout>
        </z-layout>
    </div>
</template>

<script>
import Layout from "../../../src/layout/layout";
import Header from "../../../src/layout/header";
import Content from "../../../src/layout/content";
import Sider from "../../../src/layout/sider";
import Footer from "../../../src/layout/footer";
export default {
    name: "",
    components: {
        "z-layout": Layout,
        "z-header": Header,
        "z-content": Content,
        "z-sider": Sider,
        "z-footer": Footer
    }
};
</script>

<style lang='scss' scoped>
</style>
