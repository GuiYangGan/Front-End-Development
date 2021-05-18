fetch('url', {
  method: 'POST',
  responseType: 'arraybuffer',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(params),
})
.then(res => res.blob())
.then(data => {
  const blob = data;
  const url = window.URL.createObjectURL(blob);
  const eleLink = document.createElement('a');
  eleLink.href = url;
  eleLink.download = '';
  document.body.appendChild(eleLink);
  eleLink.click();
  window.URL.revokeObjectURL(url);
})
