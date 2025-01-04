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

```bash
$ npm run dev
```

## Building an application

```bash
$ npm run build
```