# mk-app-apidoc

api文档应用模板，可以clone该app,根据自己需要修改内容

[在线演示](https://ziaochina.github.io/mk-app-apidoc/)

## run example

```
$ cd example
$ npm install
$ npm start
```

## clone app

```
$ npm i mk-tools -g
$ mk clone mk-app-apidoc apps/apidoc
```

## config

- 1、网站目录执行mk compile website,会在网站根目录生成apiDoc.js
- 2、修改config.js文件

```
import apiDoc from './apiDoc'

...

_options.apps && _options.apps.config({
    ...
    'mk-app-apidoc': {
        apis: apiDoc
    }
    ...
})

```

## 如何增加api文档

在应用js文件中增加apidoc规范的注释，可参考本应用webapi.js内的注释，
增加完成后，只要在网站目录执行mk compile website,就会重新生成apiDoc.js
