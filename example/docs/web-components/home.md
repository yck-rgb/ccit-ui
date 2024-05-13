---
title: home
---

<h1>
ccit-ui
</h1>

demo: [https://ccit-web.gitee.io/ccit-ui](https://ccit-web.gitee.io/ccit-ui)

# CDN

```javascript
<!-- 引入样式 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@yck-web/ccit-ui/lib/theme-chalk/index.css">
<!-- 引入组件库 -->
<script src="https://cdn.jsdelivr.net/npm/@yck-web/ccit-ui/lib/index.min.js"></script>
```

# 安装依赖

```
npm install @yck-web/ccit-ui -S
```

# 使用

## 全局使用

```javascript
import CCITUI from '@yck-web/ccit-ui'
import '@yck-web/ccit-ui/lib/theme-chalk/index.css';

Vue.use(CCITUI)
```

### Example

```html
<cc-button>click</cc-button>
```

## 按需引入

```
npm install babel-plugin-component -D
```

在你的 `.babelrc` 文件里写入下面内容，和 element-ui 一起使用，不需要 element-ui 的可以删除

``` json
{
    "plugins": [
        [
            "component",
            {
                "libraryName": "@yck-web/ccit-ui",
                "styleLibraryName": "theme-chalk"
            },
            "@yck-web/ccit-ui"
        ],
        [
            "component",
            {
                "libraryName": "element-ui",
                "styleLibraryName": "theme-chalk"
            },
            "element-ui"
        ],
    ]
}
```

The you can import component on demand, and you don't need to care about importing styles, the babel plugin will do it automaticly.

``` javascript
import Vue from 'vue'
import { Button } from '@yck-web/ccit-ui'

Vue.component('cc-button', Button)
```

<script>
    setTimeout(()=>{
        console.clear()
        const stylehello=[
            'color:green',
            'background:yellow',
            'font-size:30px',
            'text-shadow:2px 2px black',
            'padding:10px',
        ].join(";")
        const styleeveryone=[
            'color:red',
            'font-size:30px',
            'text-shadow:2px 2px black',
            'padding:10px',
        ].join(";")
        console.log("%chello %ceveryone",stylehello,styleeveryone)
    },1000)
</script>
