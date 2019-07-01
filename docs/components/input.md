---
title: Input
---

# 输入框
***

1.组件介绍

输入框组件功能及用法如下，支持disabled、readonly、error及双向绑定等功能

2.使用方法

<ClientOnly>
  <input-demos></input-demos>
</ClientOnly>

3.组件代码

```HTML
<div>
  <z-input value="张三" disabled></z-input>
  <z-input value="李四" readonly></z-input>
  <z-input value="王五"></z-input>
  <z-input v-model="message"></z-input>
  <span>message:{{message}}</span>
  <z-input value="" error="姓名不能少于两个字"></z-input>
</div>
```