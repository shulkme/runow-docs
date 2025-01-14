# 开发部署

每一套模板均配置了相应的执行脚本，详细参照根目录下的 `package.json` 文件，例如：

::: code-group

```json [package.json]
{
  "scripts": {
    "dev": "vite dev",
    "build": "vite build"
  }
}
```

:::

## 本地开发

::: code-group
```bash [npm]
$ npm run dev
```
```bash [yarn]
$ yarn dev
```
```bash [pnpm]
$ pnpm dev
```
```bash [bun]
$ bun run dev
```
:::

## 构建应用


::: code-group
```bash [npm]
$ npm run build
```
```bash [yarn]
$ yarn build
```
```bash [pnpm]
$ pnpm build
```
```bash [bun]
$ bun run build
```
:::