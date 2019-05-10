# Front-End-Development
前端开发中的一些JS方法、CSS样式

* [Javascript](#Javascript)
* [Css](#Css)
* [Canledar](#Canledar)

## Javascript
js方法的集合，工作中的常用方法汇总

> [灵活运用JavaScript开发技巧](https://juejin.im/post/5cc7afdde51d456e671c7e48?utm_source=gold_browser_extension)

## Css
css实用小技巧汇总，工作中ant design组件样式修改

## Canledar

> *必须下载或安装依赖  [moment.js](http://momentjs.cn/ "moment.js中文网")*

用于获取日历数据列表，列表长度42（即42天）

支持两种数据格式
```js
type: 0 // 每周第一天为星期日

type: 1 // 每周第一天为星期一
```

###### Usage
```js
getCalendarData(); // 默认根据当前日期计算日历，数据格式为0
```
###### Customize
```js
getCalendarData({ year: 2019, month: 4, day: 1, type: 0 }); // type: 表示数据格式
```
