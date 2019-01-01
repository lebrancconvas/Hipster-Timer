let timer = document.getElementById('timer')
let time = 0

timer.innerHTML = `คุณเปิดเข้าใช้งานเว็บนี้เป็นเวลา ${time} วินาที<br>โดยที่ยังไม่ Refresh`

setInterval(() => {
    timer.innerHTML = `คุณเปิดเข้าใช้งานเว็บนี้เป็นเวลา ${time += 1} วินาที<br>โดยที่ยังไม่ Refresh`
}, 1000)

