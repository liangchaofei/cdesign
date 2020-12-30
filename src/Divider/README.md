---
title: Divider
order: 0
nav:
  title: 组件
  path: /components
group:
  title: Divider
---

# Divider

分割线

## 代码演示

### 横向分割线

<code src="./demo/demo1.tsx" />

### 分割线

<code src="./demo/demo2.tsx" />

### 虚线

<code src="./demo/demo3.tsx" />

## 使用方式

```typescript
import { Divider } from '@data-sys/components';
import React from 'react';

export default () => <Divider />;
```

## API

| 参数      | 说明           | 类型                            | 默认值       |
| --------- | -------------- | ------------------------------- | ------------ |
| className | 分割线样式类   | String                          | -            |
| dashed    | 是否虚线       | Boolean                         | false        |
| type      | 水平、分隔符   | Enum: {'horizontal', 'split' '} | `horizontal` |
| style     | 分割线样式对象 | Object                          | -            |
