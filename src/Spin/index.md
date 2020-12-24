---
title: Spin
nav:
  # title: Components
  path: /components
group:
  # title: Components
---

## Spin

### 默认

```tsx
import React from 'react';
import { Spin } from 'cdesign';

export default () => <Spin />;
```

### Spin 改变颜色

```tsx
import React from 'react';
import { Spin } from 'cdesign';

export default () => <Spin bgColor="orange" />;
```

## 用法

```js
import { Spin } from 'cdesign'

// 导入
<Spin />
<Spin type="line" />
<Spin bgColor="orange" />
```

## API 文档

| 参数        | 说明                                  | 类型   | 默认值 |
| ----------- | ------------------------------------- | ------ | ------ |
| isLoading   | 加载中状态，默认为 true               | bool   |        |
| loadingText | 加载状态的文本                        | string |        |
| hiddenText  | 是否隐藏加载状态的文本                | bool   |        |
| type        | spin 的类型，目前有 ball 和 line 两种 | string |        |
| bgColor     | 加载动画颜色                          | string |        |
