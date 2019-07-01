---
title: Tabs
---

# 标签组件
***

1.组件介绍

标签组件功能及用法如下，支持添加icon，点击标签切换显示相应的内容

2.使用方法

<ClientOnly>
  <tabs-demo></tabs-demo>
</ClientOnly>

3.组件代码

```HTML
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
```