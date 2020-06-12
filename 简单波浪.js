/**
 * 底部波浪
 * @param $canvasID     canvasID
 * @param $progress     波浪位置的高度
 * @param $maveColor    波浪颜色
 * @param $time         运动周期
 */
function wave($canvasID, $progress, $maveColor, $time) {
  let waveWidth = 3300,
      offset = 0,
      waveHeight = 30,  // 波浪高度
      waveCount = 4,  // 波浪个数
      startX = -1000,
      startY = 212,   // canvas 高度
      progress = $progress,// 波浪位置的高度
      d2 = waveWidth / waveCount,// 单个波浪的宽度
      d = d2 / 2,
      hd = d / 2,
      c = document.getElementById($canvasID),
      ctx = c.getContext("2d");
  c.width = 1920;
  c.height = 212;

  function move() {
    offset -= 5;
    if (-1 * offset === d2) offset = 0;
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.fillStyle = $maveColor;
    ctx.beginPath();
    let offsetY = startY - progress;
    ctx.moveTo(startX - offset, offsetY);
    for (let i = 0; i < waveCount; i++) {
        let dx = i * d2;
        let offsetX = dx + startX - offset;
        ctx.quadraticCurveTo(offsetX + hd, offsetY + waveHeight, offsetX + d, offsetY);
        ctx.quadraticCurveTo(offsetX + hd + d, offsetY - waveHeight, offsetX + d2, offsetY);
    }
    ctx.lineTo(startX + waveWidth, 3000);
    ctx.lineTo(startX, 3000);
    ctx.fill();

    setTimeout(move, $time / 60);    //速度
  }

  move();
}

wave("canvas1", 180, "#f9b67e", 4000);
