<template>
    <div>
        <z-row>
            <z-col span="8">8</z-col>
            <z-col span="16">16</z-col>
        </z-row>
        <br />
        <z-row>
            <z-col span="8">8</z-col>
            <z-col span="6" offset="2">6</z-col>
            <z-col span="4" offset="4">4</z-col>
        </z-row>
        <br />
        <z-row>
            <z-col span="8">8</z-col>
            <z-col span="6">6</z-col>
            <z-col span="4">4</z-col>
        </z-row>
        <br />
        <z-row align="right">
            <z-col span="8">8</z-col>
            <z-col span="6">6</z-col>
            <z-col span="4">4</z-col>
        </z-row>
        <br />
    </div>
</template>

<script>
import Col from "../../../src/grid/col";
import Row from "../../../src/grid/row";
export default {
    name: "",
    components: {
        "z-col": Col,
        "z-row": Row
    },
    data() {
        return {};
    }
};
</script>

