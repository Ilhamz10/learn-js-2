function delay(func, delay) {
    return function () {
        setTimeout(() => func.apply(this, arguments), delay)
    }
}