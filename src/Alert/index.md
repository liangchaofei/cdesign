---
title: Alert
nav:
  # title: Components
  path: /components
group:
  # title: Components
---

## Alert

### 默认

```tsx
import React from 'react';
import { Alert } from 'cdesign';

export default () => <Alert type="success" message="success" closable />;
```

### 可关闭

```tsx
import React from 'react';
import { Alert } from 'cdesign';

export default () => <Alert type="success" message="success" closable={true} />;
```

### 主题类型

```tsx
import React from 'react';
import { Alert } from 'cdesign';

export default () => (
  <div>
    <Alert type="success" message="成功" />
    <Alert type="error" message="错误" />
    <Alert type="info" message="信息" />
    <Alert type="warn" message="警告" />
  </div>
);
```

### 配置辅助性文字

```tsx
import React from 'react';
import { Alert } from 'cdesign';

export default () => (
  <div>
    <Alert type="success" description="我是辅助" />
    <Alert type="error" description="我是辅助" closable={true} />
  </div>
);
```

## 用法

```js
import { Alert } from 'cdesign';

// 导入
<Alert message="验证成功" description="我是辅助" type="success" closable />;
```

## API 文档

| 参数        | 说明                                                      | 类型                    | 默认值 |
| ----------- | --------------------------------------------------------- | ----------------------- | ------ |
| style       | 自定义样式                                                | object                  | 无     |
| closable    | 是否显示关闭按钮, 默认不显示                              | boolean                 | false  |
| closeText   | 自定义关闭按钮                                            | string/reactNode        | 'x'    |
| message     | 警告提示内容                                              | string                  | 无     |
| description | 警告提示的辅助性文字介绍                                  | string                  | 无     |
| type        | 指定警告提示的样式，有四种选择 success、info、warn、error | string                  | 'warn' |
| onClose     | 关闭时触发的事件                                          | (e: MouseEvent) => void | 无     |
