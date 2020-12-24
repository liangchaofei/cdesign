---
title: Switch
nav:
  # title: Components
  path: /components
group:
  # title: Components
---

## Switch

### 默认

```tsx
import React from 'react';
import { Switch } from 'cdesign';

export default () => (
  <div>
    <Switch /> <br />
    <br />
    <Switch checked />
  </div>
);
```

### 控制大小

```tsx
import React from 'react';
import { Spin } from 'cdesign';

export default () => (
  <div>
    <Switch size="small" /> <br />
    <br />
    <Switch /> <br />
    <br />
    <Switch size="large" />
  </div>
);
```

### 开关文本

```tsx
import React from 'react';
import { Spin } from 'cdesign';

export default () => (
  <div>
    <Switch onText="开" offText="关" />
  </div>
);
```

## 用法

```js
import { Switch } from 'cdesign';

// 导入
<Switch />;
```

## API 文档

| 参数     | 说明               | 类型   | 默认值    |
| -------- | ------------------ | ------ | --------- |
| onClick  | 对外暴露的点击事件 | func   |           |
| checked  | 是否被选中         | bool   | false     |
| disabled | 是否被禁用         | bool   | false     |
| offText  | 关闭状态的文本     | string | ''        |
| onText   | 开启状态的文本     | string | ''        |
| size     | 组件的尺寸         | string | 'default' |
