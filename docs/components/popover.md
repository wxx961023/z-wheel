---
title: Popover
---

# 弹出层组件
***

1.组件介绍

冒泡组件功能及用法如下，支持设置冒泡方向、触发形式等功能

2.使用方法

<ClientOnly>
  <popover-demo></popover-demo>
</ClientOnly>

3.组件代码

```HTML
  <div>
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

```