---
title: Button
---
# 按钮
***

1.组件介绍

按钮组件功能及用法如下，支持添加icon，设置icon位置，加载状态，按钮形状等功能

2.使用方法

<ClientOnly>
  <button-demos></button-demos>
</ClientOnly>

3.组件代码

```HTML
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
```