# 开始

## 创建第一个Runow项目

::: tip 兼容性注意
Runow 需要 Node.js 版本 18+ 或 20+。然而，有些模板需要依赖更高的 Node 版本才能正常运行，当你的包管理器发出警告时，请注意升级你的 Node 版本。
:::

::: code-group

```bash [npm]
$ npm create runow@latest
```

```bash [Yarn]
$ yarn create runow
```

```bash [pnpm]
$ pnpm create runow
```

```bash [Bun]
$ bun create runow
```

:::

然后按照提示操作即可！

你还可以通过附加的命令行选项直接指定项目名称和你想要使用的模板。例如，要构建一个 React + TypeScript 项目，运行:


::: code-group

```bash [npm]
$ npm create runow@latest your-app-name --template react-ts
```

```bash [Yarn]
$ yarn create runow your-app-name --template react-ts
```

```bash [pnpm]
$ pnpm create runow your-app-name --template react-ts
```

```bash [Bun]
$ bun create runow your-app-name --template react-ts
```

:::