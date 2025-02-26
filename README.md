# Nextjs + NATHR bug

Demonstrates issue with NATHR when using `react-server` condition which results in this error,

```
Error: next-test-api-route-handler (NTARH) failed to import AppRouteRouteModule

  This is usually caused by:

    1. Using a Node version that is end-of-life (review legacy install instructions)
    2. NTARH and the version of Next.js you installed are actually incompatible (please check documentation and/or submit a bug report)

  Failed import attempts:

    - _react.default.createContext is not a function
    - Cannot find module 'next/dist/server/future/route-modules/app-route/module.js'
 ❯ findNextjsInternalResolver node_modules/next-test-api-route-handler/dist/src/index.js:365:22

 ❯ Object.<anonymous> node_modules/next-test-api-route-handler/dist/src/index.js:96:29
 ❯ Module._compile node:internal/modules/cjs/loader:1565:14
 ❯ Object..js node:internal/modules/cjs/loader:1708:10
 ❯ Module.load node:internal/modules/cjs/loader:1318:32
 ❯ Function._load node:internal/modules/cjs/loader:1128:12
 ❯ TracingChannel.traceSync node:diagnostics_channel:322:14
 ❯ wrapModuleLoad node:internal/modules/cjs/loader:219:24
 ❯ cjsLoader node:internal/modules/esm/translators:263:5
 ❯ ModuleWrap.<anonymous> node:internal/modules/esm/translators:196:7

This error originated in "src/app/api/v1/my-first-route/__tests__/route.test.ts" test file. It doesn't mean the error was thrown inside the file itself, but while it was running.
```
