---
title: Layout
---

# 布局组件
***

1.组件介绍

布局组件功能及用法如下，支持常见基础布局

2.使用方法

<ClientOnly>
  <layout-demo></layout-demo>
</ClientOnly>

3.组件代码

```HTML
    <div>
        <z-layout>
            <z-header></z-header>
            <z-content></z-content>
            <z-footer></z-footer>
        </z-layout>
    <br/>
    <z-layout>
        <z-sider></z-sider>
        <z-layout>
            <z-header></z-header>
            <z-content></z-content>
            <z-footer></z-footer>
        </z-layout>
    </z-layout>
</div>
```