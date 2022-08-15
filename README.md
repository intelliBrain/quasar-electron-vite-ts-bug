# Quasar App (quasar-electron-vite-ts-bug)

A Quasar Project

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev -m electron
```

### Build the app for production

```bash
quasar build -m electron
```

### steps to reproduce the bug

=> to force the "module not found" error:

```bash
electron-preload.ts [line 14]

=> uncomment the source line to get the "module not found" error (see console output)
```

=> no bug:

```bash
electron-preload.ts [line 14]

=> comment-out the source line => everything is working again (click the UI buttons and check the console output)
```
