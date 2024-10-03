# webapp_vue_library

This template should help get you started developing with Vue 3 in Vite.

# Docker

## docker build

docker build --platform linux/amd64 -t webapp_vue_library . -f .\DockerFile

## docker run

docker run -p 80:80 -p 8086:8086 webapp_vue_library

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
