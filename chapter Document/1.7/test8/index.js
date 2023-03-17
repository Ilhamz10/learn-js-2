const hour = document.querySelector('.hour')
const min = document.querySelector('.min')
const sec = document.querySelector('.sec')

function update() {
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()

    h < 10 ? h = '0' + h : h
    m < 10 ? m = '0' + m : m
    s < 10 ? s = '0' + s : s

    hour.innerText = h
    min.innerText = m
    sec.innerText = s
}

let interval

function startClock() {
    interval = setInterval(update, 1000);
    update()
}

function stopClock() {
    clearInterval(interval)
}