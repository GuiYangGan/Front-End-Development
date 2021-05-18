fetch('url', {
  method: 'POST',
  responseType: 'arraybuffer',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(params),
})
.then((response) => {
  // 根据响应头信息，获取文件名
  const disposition = response.headers.get('content-disposition');
  let filename = disposition.replace(/attachment;.*filename=/, '').replace(/"/g, '');
  filename = filename && filename !== '' ? filename : 'file';
  // 解析为blob
  response.blob().then((data) => {
    const blob = data; // new Blob([data], { type: 'application/vnd.ms-excel' });
    const url = window.URL.createObjectURL(blob);
    const eleLink = document.createElement('a');
    eleLink.href = url;
    // 文件名解码
    eleLink.download = decodeURIComponent(filename);
    document.body.appendChild(eleLink);
    eleLink.click();
    window.URL.revokeObjectURL(url);
    this.props.onCancel();
  });
});
