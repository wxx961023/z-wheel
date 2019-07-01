<template>
    <div class="collapse-wrapper">
        <z-collapse :selected.sync="currentSelected">
            <z-collapse-item title="标题1" name="1">第一个内容 </z-collapse-item>
            <z-collapse-item title="标题2" name="2">第二个内容 </z-collapse-item>
            <z-collapse-item title="标题3" name="3">第三个内容 </z-collapse-item>
        </z-collapse>
        <br>
        <z-collapse :selected.sync="currentSelected" single>
            <z-collapse-item title="标题1" name="1">第一个内容 </z-collapse-item>
            <z-collapse-item title="标题2" name="2">第二个内容 </z-collapse-item>
            <z-collapse-item title="标题3" name="3">第三个内容 </z-collapse-item>
        </z-collapse>
    </div>
</template>

<script>
    import Collapse from '../../../src/collapse/collapse'
    import CollapseItem from '../../../src/collapse/collapse-item'
    export default {
        data(){
            return{
                currentSelected:[1]
            }
        },
        components:{
            'z-collapse':Collapse,
            'z-collapse-item':CollapseItem
        }
    }
</script>
