# Front-End-Development
前端开发中的一些JS方法、CSS样式

## Canledar
用于获取日历数据列表，列表长度42（即42天）

需自行下载或安装[moment](http://momentjs.cn/ "moment.js中文网")依赖
##### Example
```js
getCalendarData(); // 默认根据当前日期计算日历，且每周第一天为星期日
```
或
```js
getCalendarData({ year: 2019, month: 4, day: 1, type: 0 }); // type: 表示每周第一天为星期日或星期一
```
