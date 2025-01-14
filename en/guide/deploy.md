# Deploying

Each template is configured with corresponding execution scripts, please refer to the `package.json` file in the root directory for details, for example:

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

## Local development

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

## Building an application


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