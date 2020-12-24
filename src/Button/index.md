---
title: Button
nav:
  # title: Components
  path: /components
group:
  # title: Components
---

## Button

### 基本用法

```tsx
import React from 'react';
import { Button } from 'cdesign';

export default () => (
  <div>
    <Button>按钮</Button>
    <br />
    <Button type="primary">按钮</Button>
    <br />
    <Button type="warning">按钮</Button>
    <br />
    <Button type="info">按钮</Button>
    <br />
    <Button type="pure">按钮</Button>
    <br />
  </div>
);
```

### 块按钮 block

```tsx
import React from 'react';
import { Button } from 'cdesign';

export default () => (
  <div style={{ width: '360px' }}>
    <Button block>按钮</Button>
    <br />
    <Button type="primary" block>
      按钮
    </Button>
    <br />
    <Button type="warning" block>
      按钮
    </Button>
    <br />
    <Button type="info" block>
      按钮
    </Button>
    <br />
    <Button type="pure" block>
      按钮
    </Button>
    <br />
    <Button type="primary" shape="circle" block>
      按钮
    </Button>
    <br />
  </div>
);
```

## 用法

```js
import { Button } from 'cdesign';

// 导入
<Button />;
```

## API 文档

| 参数      | 说明                                          | 类型            | 默认值  |
| --------- | --------------------------------------------- | --------------- | ------- |
| className | 自定义类名                                    | string          |         |
| type      | 按钮类型 primary,warning, info, default, pure | string          | default |
| shape     | 按钮形状 circle ,radius(默认)                 | string          | radius  |
| block     | 是否是块状                                    | boolean         | false   |
| onClick   | 按钮点击事件                                  | (event) => void |         |
