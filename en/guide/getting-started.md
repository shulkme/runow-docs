# Getting Started

## Scaffolding Your First Runow Project

::: tip Compatibility Note
Runow requires [Node.js](https://nodejs.org/en/) version 18+ or 20+. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.
:::

::: code-group

```bash [npm]
$ npm create runow@latest
```

```bash [yarn]
$ yarn create runow
```

```bash [pnpm]
$ pnpm create runow
```

```bash [bun]
$ bun create runow
```

:::


Then follow the prompts!

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a React + TypeScript project, run:


::: code-group

```bash [npm]
# npm 7+, extra double-dash is needed:
$ npm create runow@latest your-app-name -- --template react-ts
```

```bash [yarn]
$ yarn create runow your-app-name --template react-ts
```

```bash [pnpm]
$ pnpm create runow your-app-name --template react-ts
```

```bash [bun]
$ bun create runow your-app-name --template react-ts
```

:::