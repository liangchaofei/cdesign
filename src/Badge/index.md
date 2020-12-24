---
title: Badge
nav:
  # title: Components
  path: /components
group:
  # title: Components
---

## Badge

### 默认

```tsx
import React from 'react';
import { Badge } from 'cdesign';

export default () => <Badge text="react" count={99} />;
```

### 设置 overflowCount，展示封顶的数字

```tsx
import React from 'react';
import { Badge } from 'cdesign';

export default () => <Badge text="react" count={199} overflowCount={99} />;
```

### 只展示一个小圆点

```tsx
import React from 'react';
import { Badge } from 'cdesign';

export default () => <Badge text="react" dot count={1} />;
```

### 展示指示状态

```tsx
import React from 'react';
import { Badge } from 'cdesign';

export default () => (
  <div>
    <Badge status="success" />
    <Badge status="warning" />
    <Badge status="error" />
    <Badge status="processing" />
    <Badge status="default" />
    <br />
    <br />
    <Badge status="success" text="成功"></Badge>
    <br />
    <Badge status="error" text="错误"></Badge>
    <br />
    <Badge status="processing" text="进行中"></Badge>
    <br />
    <Badge status="warning" text="警告"></Badge>
    <br />
    <Badge status="default" text="默认"></Badge>
    <br />
  </div>
);
```

## 用法

```js
import { Badge } from 'cdesign';

// 导入
<Badge />;
```

## API 文档

| 参数          | 说明                                                                 | 类型    | 默认值    |
| ------------- | -------------------------------------------------------------------- | ------- | --------- |
| style         | 更改 badge 样式                                                      | object  |           |
| color         | 自定义小圆点的颜色                                                   | string  | 'red'     |
| count         | 展示的数字                                                           | number  | 0         |
| dot           | 不展示数字,只展示一个小圆点                                          | boolean | false     |
| offset        | 设置状态点的偏移                                                     | array   |           |
| overflowCount | 展示封顶的数字                                                       | number  |           |
| showZero      | 当数值为 0 时是否展示 Badge                                          | boolean | false     |
| status        | 设置 badge 为状态点, 类型有 success,warning,error,default,processing | string  | 'default' |
| text          | 当设置 status 时状态点的文本                                         | string  |           |
