---
title: Notification
nav:
  # title: Components
  path: /components
group:
  # title: Components
---

## Notification

### 默认

```tsx
import React from 'react';
import { Notification } from 'cdesign';

export default () => (
  <div>
    <Button
      onClick={() => {
        cfNotification.pop({
          message: '学习打卡',
          description: '前端基础，中级进阶，高级打卡，一起玩转前端，996远离你',
        });
      }}
    >
      默认通知信息
    </Button>
    <br />
    <Button
      type="primary"
      onClick={() => {
        cfNotification.pop({
          type: 'success',
          message: '学习打卡',
          description: '前端基础，中级进阶，高级打卡，一起玩转前端，996远离你',
        });
      }}
    >
      成功通知(success)
    </Button>
    <br />
    <Button
      type="pure"
      onClick={() => {
        cfNotification.pop({
          type: 'info',
          message: '学习打卡',
          description: '前端基础，中级进阶，高级打卡，一起玩转前端，996远离你',
        });
      }}
    >
      信息通知(info)
    </Button>
    <br />
    <Button
      type="primary"
      onClick={() => {
        cfNotification.pop({
          type: 'warning',
          message: '学习打卡',
          description: '前端基础，中级进阶，高级打卡，一起玩转前端，996远离你',
        });
      }}
    >
      警告通知(warning)
    </Button>
    <br />
    <Button
      type="warning"
      onClick={() => {
        cfNotification.pop({
          type: 'error',
          message: '学习打卡',
          description: '前端基础，中级进阶，高级打卡，一起玩转前端，996远离你',
        });
      }}
    >
      错误信息通知(error)
    </Button>
  </div>
);
```

### 自定义位置和 icon

```tsx
import React from 'react';
import { Notification } from 'cdesign';

export default () => (
  <div>
    <Button
      onClick={() => {
        cfNotification.config({
          placement: 'topLeft',
        });
        cfNotification.pop({
          message: '学习打卡',
          duration: 0,
          description: '前端基础，中级进阶，高级打卡，一起玩转前端，996远离你',
        });
      }}
    >
      topLeft
    </Button>
    <i style={{ marginLeft: '16px' }} />
    <Button
      type="primary"
      onClick={() => {
        cfNotification.config({
          placement: 'topRight',
        });
        cfNotification.pop({
          type: 'success',
          message: '学习打卡',
          description: '前端基础，中级进阶，高级打卡，一起玩转前端，996远离你',
        });
      }}
    >
      topRight
    </Button>
    <i style={{ marginLeft: '16px' }} />
    <Button
      type="pure"
      onClick={() => {
        cfNotification.config({
          placement: 'bottomLeft',
        });
        cfNotification.pop({
          type: 'info',
          message: '学习打卡',
          description: '前端基础，中级进阶，高级打卡，一起玩转前端，996远离你',
        });
      }}
    >
      bottomLeft
    </Button>
    <i style={{ marginLeft: '16px' }} />
    <Button
      type="primary"
      onClick={() => {
        cfNotification.config({
          placement: 'bottomRight',
        });
        cfNotification.pop({
          type: 'warning',
          message: '学习打卡',
          duration: 0,
          description: '前端基础，中级进阶，高级打卡，一起玩转前端，996远离你',
        });
      }}
    >
      bottomRight
    </Button>
    <i style={{ marginLeft: '16px' }} />
    <Button
      type="warning"
      onClick={() => {
        cfNotification.pop({
          type: 'error',
          icon: <Icon type="FaRegSadCry" />,
          message: '学习打卡',
          duration: 0,
          description: '前端基础，中级进阶，高级打卡，一起玩转前端，996远离你',
        });
      }}
    >
      修改通知框icon
    </Button>
    <i style={{ marginLeft: '16px' }} />
    <Button
      type="warning"
      onClick={() => {
        cfNotification.destroy();
      }}
    >
      销毁notification
    </Button>
  </div>
);
```

## 用法

```js
import { Notification } from 'cdesign';

// 使用
Notification.pop({
  type: 'warning',
  message: '内容',
  duration: 0,
  description: '前端基础，中级进阶，高级打卡，一起玩转前端，996远离你',
});

// 全局配置
Notification.config({
  placement: 'bottomRight',
});
```

## API 文档

### Notification 的全局属性

| 参数         | 说明                                              | 类型           | 默认值              |
| ------------ | ------------------------------------------------- | -------------- | ------------------- |
| bottom       | 消息从底部弹出时，距离底部的位置，单位像素        | number         | '24px'              |
| duration     | 默认自动关闭延时，单位秒                          | number         | 4.5s                |
| getContainer | HTMLNode 配置渲染节点的输出位置                   | () => HTMLNode | () => document.body |
| placement    | 弹出位置(topLeft/topRight/bottomLeft/bottomRight) | string         | 'topRight'          |
| top          | 消息从顶部弹出时，距离顶部的位置，单位像素        | number         | '24px'              |
| closeIcon    | 自定义关闭图标                                    | HTMLNode       |                     |

### notice 属性

| 参数         | 说明                                            | 类型      | 默认值    |
| ------------ | ----------------------------------------------- | --------- | --------- |
| type         | 通知窗类型(info,success,error,warning)          | string    |           |
| btn          | 自定义关闭按钮                                  | ReactNode |           |
| bottom       | 消息从底部弹出时，距离底部的位置，单位像素      | number    |           |
| className    | 自定义内容的 class                              | string    |           |
| description  | 通知提醒内容，必选                              | string    | ReactNode |  |
| duration     | 默认 4.5 秒后自动关闭，配置为 null 则不自动关闭 | number    | 4.5       |
| closeIcon    | 自定义关闭图标                                  | ReactNode |           |
| getContainer | 配置渲染节点的输出位置                          | HTMLNode  |           |
| icon         | 自定义图标                                      | ReactNode |           |
| key          | 当前通知唯一标志                                | string    |           |
| message      | 通知提醒标题，必选                              | string    | ReactNode |  |
| onClose      | 点击默认关闭按钮时触发的回调函数                | func      |           |
| onClick      | 点击通知时触发的回调函数                        | func      |           |
| top          | 消息从顶部弹出时，距离顶部的位置，单位像素      | func      |           |
