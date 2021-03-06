---
title: Modal
nav:
  # title: Components
  path: /components
group:
  # title: Components
---

## Modal

### 默认

```tsx
import React from 'react';
import { Modal } from 'cdesign';

export default () => (
  <div>
    <a href="/cf-design/Modal">显示弹窗</a>
    <Modal title="基础弹窗" visible={true}>
      <p>我是弹窗内容1</p>
      <p>我是弹窗内容</p>
      <p>我是弹窗内容</p>
      <p>我是弹窗内容</p>
      <Modal title="基础弹窗" visible={true}>
        <p>我是弹窗内容2</p>
        <p>我是弹窗内容</p>
        <p>我是弹窗内容</p>
        <p>我是弹窗内容</p>
      </Modal>
    </Modal>
  </div>
);
```

## 用法

```js
import { Modal } from 'cdesign';

// 使用
<Modal title="基础弹窗" visible={true}>
  <p>我是弹窗内容</p>
  <p>我是弹窗内容</p>
  <p>我是弹窗内容</p>
  <p>我是弹窗内容</p>
</Modal>;
```

## API 文档

| 参数           | 说明                                                       | 类型      | 默认值    |
| -------------- | ---------------------------------------------------------- | --------- | --------- |
| afterClose     | Modal 完全关闭后的回调                                     | func      |           |
| bodyStyle      | Modal body 的样式                                          | object    |           |
| cancelText     | 取消按钮文字                                               | string    | ReactNode | 取消 |
| centered       | 居中展示 Modal                                             | boolean   | false     |
| closable       | 是否展示右上角的关闭按钮                                   | boolean   | true      |
| closeIcon      | 自定义关闭图标                                             | ReactNode |           |
| destroyOnClose | 关闭时销毁 Modal 里的子元素                                | boolean   | false     |
| footer         | 底部内容，当不需要底部默认按钮时，可以设置为 footer={null} | func      | null      | ReactNode |
| keyboard       | 是否支持键盘的 esc 键退出                                  | boolean   | true      |
| mask           | 是否展示遮罩                                               | boolean   | true      |
| maskclosable   | 点击蒙层是否允许关闭                                       | boolean   | true      |
| maskStyle      | 遮罩样式                                                   | object    |           |
| okText         | 确认按钮的文本                                             | string    | ReactNode |  |
| title          | 标题内容                                                   | func      | string    | ReactNode |
| visible        | Modal 是否可见                                             | boolean   | false     |
| width          | Modal 宽度                                                 | string    | '520px'   |
| onCancel       | 点击遮罩或者取消按钮，或者键盘 esc 按键时的回调            | func      |           |
| onOk           | 点击确定的回调                                             | func      |           |
