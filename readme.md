# 项目自述

## 安装包

```bash
pnpm --filter @study/starter add axios
pnpm -F @study/starter add axios
```

## 包引用

和上面的安装包一样

```bash
pnpm -F @study/starter add @study/utils
```

## 执行 ts

- 安装 ts-node 和 typescript。
- 编写一个 ts 文件 使用 ts-node 运行
```
ts-node hello.ts
```
- 也可以使用 node+require hook 运行
```
node -r ts-node/register hello.ts
```
## 监听文件变化
可以使用ts-node-dev
全局安装 npm install -g ts-node-dev
```
# respawn 选项启用了监听重启的能力，而 transpile-only 提供了更快的编译速度
ts-node-dev --respawn --transpile-only app.ts
```
## 验证类型
tsd
```ts
import { expectType } from 'tsd';

expectType<string>("linbudu"); // √
expectType<string>(599); // ×
```
## 执行子命令
```bash
pnpm -r --filter=@study/function-and-class run dev
```