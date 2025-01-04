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

```bash
$ npm run dev
```

## 构建应用

```bash
$ npm run build
```