---
title: Progress
nav:
  # title: Components
  path: /components
group:
  # title: Components
---

## Progress

### 默认

```tsx
import React from 'react';
import { Progress } from 'cdesign';

export default () => (
  <div>
    <Progress themeColor="red" percent={50} />
    <br />
    <Progress themeColor="blue" percent={80} />
    <br />
  </div>
);
```

### 隐藏进度文本

```tsx
import React from 'react';
import { Progress } from 'cdesign';

export default () => (
  <div>
    <Progress themeColor="red" percent={50} />
    <br />
    <Progress themeColor="blue" percent={80} hiddenText />
    <br />
  </div>
);
```

### 设置进度状态阈值

```tsx
import React from 'react';
import { Progress } from 'cdesign';

export default () => (
  <div>
    <Progress
      percent={19}
      statusScope={[
        [20, 'red'],
        [50, 'orange'],
        [80, '#06f'],
      ]}
    />
    <br />
    <Progress
      percent={40}
      statusScope={[
        [20, 'red'],
        [50, 'orange'],
        [80, '#06f'],
      ]}
    />
    <br />
    <Progress
      percent={90}
      statusScope={[
        [20, 'red'],
        [50, 'orange'],
        [80, '#06f'],
      ]}
    />
  </div>
);
```

## 用法

```js
import { Progress } from 'cdesign'

// 导入
<Progress percent={50} />
<Progress percent={40} width={300} hiddenText themeColor="green" />
<Progress percent={90} statusScope={[[20, 'red'], [50, 'orange'], [80, '#06f']]} />
```

## API 文档

| 参数        | 说明                                                                          | 类型   | 默认值 |
| ----------- | ----------------------------------------------------------------------------- | ------ | ------ |
| themeColor  | 进度条的颜色                                                                  | string | '#06f' |
| percent     | 进度值百分比                                                                  | number |        |
| autoHidden  | 是否进度到 100%时自动消失                                                     | bool   | false  |
| hiddenText  | 是否影藏进度条文本                                                            | bool   | false  |
| width       | 进度条的宽度                                                                  | string | number | 320 |
| textColor   | 进度文本颜色                                                                  | string | '#666' |
| statusScope | 状态阈值,分别设置不同进度范围的进度条颜色,最大允许设置 3 个值, 为一个二维数组 | array  |        |
