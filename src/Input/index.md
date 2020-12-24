---
title: Input
nav:
  # title: Components
  path: /components
group:
  # title: Components
---

## Input

### 默认

```tsx
import React from 'react';
import { Input } from 'cdesign';

export default () => (
  <div>
    <Input />
    <br />
    <Input
      style={{ width: '400px', marginTop: '16px', marginBottom: '16px' }}
    />
    <br />
    <Input style={{ borderRadius: '4px' }} />
  </div>
);
```

### 自动聚焦

```tsx
import React from 'react';
import { Input } from 'cdesign';

export default () => <Input autoFocus />;
```

## 用法

```js
import { Input } from 'cdesign';

// 导入
<Input />;
```

## API 文档

| 参数         | 说明                     | 类型            | 默认值 |
| ------------ | ------------------------ | --------------- | ------ |
| icon         | 是否带 icon              | boolean         | false  |
| defaultValue | 输入框默认内容           | string          | 无     |
| id           | 输入框 id                | string          |        |
| className    | 输入框的类名             | string          | 无     |
| style        | 输入框的样式             | object          |        |
| placeholder  | 输入框的占位符           | string          | 无     |
| type         | 输入框类型               | string          | text   |
| autoFocus    | 输入框是否自动聚焦       | boolean         | false  |
| value        | 输入框的值               | string          | 无     |
| onChange     | 输入框变化时的回调       | (event) => void |        |
| onIconClick  | 当 icon 按钮点击时的回调 | () => void      |
