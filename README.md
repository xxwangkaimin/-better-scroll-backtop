# better-scroll2-backtop
专为@better-scroll 2.x写的返回顶部插件

# Install
```bash
npm i better-scroll2-backtop -S
```

## 使用
```js
import BScroll from '@better-scroll/core'
import BackTop from 'better-scroll2-backtop'
BScroll.use(BackTop)

const bs = new BScroll('.wrapper', {
  click: true, // 使用返回顶部插件时，必须配置click为true
  backTop: true
})
```

## backTop 选项对象
```html
right
·类型：number|string
·默认值：10px
配置返回顶部按钮距离屏幕右侧距离

bottom
·类型：number|string
·默认值：30px
配置返回顶部按钮距离屏幕下侧距离

width
·类型：number|string
·默认值：36px
配置返回顶部按钮宽度

rollDistance
·类型：number
·默认值：667
配置返回顶部按钮显示时屏幕滚动的最小距离

backTopImage
·类型：string
·默认值：require('./back-top.png')
配置返回顶部按钮图片

bounceTime
·类型：number
·单位：ms
·默认值：800
配置返回顶部的滚动时间
```

## 实例方法

```html
backTopHidden
·介绍：隐藏返回顶部按钮
·参数：无
·返回值：无
```
