/** 这会让 callback 函数在浏览器每次重绘的最近时间运行。
* 如果我们对 callback 中的元素进行变化，这些变化将与其他 requestAnimationFrame 回调和 CSS 动画组合在一起。
* 因此，只会有一次几何重新计算和重绘，而不是多次
*/
let requestId = requestAnimationFrame(callback)

// 取消回调的周期执行
cancelAnimationFrame(requestId)
