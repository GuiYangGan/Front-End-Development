// upload 组件自定义上传方法
async uploadFile({ commit, state, dispatch }, payload = {}) {
  try {
    const response = await uploadFile(payload.formData)
    if (response) {
      payload.onProgress()
      payload.onSuccess(response)
    }
  } catch (error) {
    console.log('error: ', error)
    payload.onError(error)
  }
}

customRequest({ file, onProgress, onSuccess, onError }) {
  const formData = new FormData()
  formData.append('file', file)
  uploadFile({
    formData,
    onProgress: () => onProgress({ percent: 100 }),
    onSuccess: response => onSuccess(response),
    onError: error => onError(error)
  })
}
