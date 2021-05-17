// dva redux 中定时任务
import { delay } from 'dva/saga'

// effects 中具体的函数
*getMessage({ payload }, { put, call, race, take }) {
	let isNotClear = true
	while(isNotClear) {
		try {
			const { response, clear } = yield race({
				clear: take('clear'), // take 中的 clear 是另外一个 effect
				response: call(fetch(payload.params)) // 请求数据
			})

			if (response) {
				// doSomething
			}

			if (!clear) {
				const { timeout, clear } = yield race({
					clear: take('clear'),
					timeout: call(delay, 300 * 1000)
				})
				isNotClear = !!timeout
			} else {
				isNotClear = false
			}
		} catch (error) {
			console.log('定时任务出错啦，信息如下：', error)
		}
	}
}

// 清除定时任务
*clear() {
	// doSomething
}
