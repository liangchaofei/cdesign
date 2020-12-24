---
name: cdesign介绍
route: /
order: 0
sidebar: true
---

# cdesign

cdesign 是笔者开发的基于 react 的轻量级组件库，目前不依赖任何第三方 ui 组件库，支持按需导入，可定制。官网地址 website: [cdesign——基于 react 的轻量级 UI 组件库](https://liangchaofei.github.io/cdesign/)

如果觉得官网地址访问太慢，可以直接移步 github 地址：[cf-design——基于 react 的轻量级 UI 组件库](https://github.com/liangchaofei/cdesign)

目前已开发完成如下 ui 组件：

- Alert 警告提示组件
- Badge 徽标数组件
- Button 按钮组件
- Drawer 抽屉组件
- Empty 空数据组件
- Icon icon 组件
- Input 输入框组件
- Modal 轻量实用的模态窗组件
- Notification 通知组件
- Process 进度条组件
- Spin 加载中组件
- Switch 开关组件
- Tag tag 组件

正在开发的组件：

- Checkbox 多选组件
- Select 选择框组件

后续会开发出更多优质轻量组件，敬请关注。

# 技术实现与版本

该组件库基于一下技术版本开发：

- react: 16.8.6
- react-dom: 6.8.6
- typescript
- react hooks

## 使用

## 安装

```js
npm install cdesign
```

或者用 yarn 安装

```js
yarn add cdesign
```

## 使用

```jsx
import {
  Button,
  Empty,
  Progress,
  Tag,
  Switch,
  Drawer,
  Badge,
  Alert,
} from 'cdesign';
```

# 技术交流与反馈

微信（wechat）：cf825605688

欢迎提出更多 issue 以便让组件库更健壮
