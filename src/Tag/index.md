---
title: Tag
nav:
  # title: Components
  path: /components
group:
  # title: Components
---

## Tag

### 默认

```tsx
import React from 'react';
import { Tag } from 'cdesign';

export default () => (
  <div>
    <Tag color="#000" closable />
    <Tag color="#aaa" closable />
    <Tag color="green" closable text="121222222" />
    <Tag color="green" closable text="222" />
  </div>
);
```

### 关闭时的回调

```tsx
import React from 'react';
import { Spin } from 'cdesign';

export default () => (
  <div>
    <Tag
      color="green"
      closable
      onClose={() => {
        alert('tag关闭');
      }}
    />
  </div>
);
```

## 用法

```js
import { Tag } from 'cdesign';

// 导入
<Tag />;
```

## API 文档

| 参数     | 说明                          | 类型   | 默认值    |
| -------- | ----------------------------- | ------ | --------- |
| closable | 是否可关闭                    | bool   | false     |
| onClose  | 标签关闭时的回调              | func   |           |
| color    | 标签的颜色,不设置则为默认颜色 | string | '#fafafa' |
