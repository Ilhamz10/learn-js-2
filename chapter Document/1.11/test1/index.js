let cords = field.getBoundingClientRect()


console.log(cords.x, cords.y) // 1
console.log(cords.right, cords.bottom) // 2
console.log(cords.x + field.clientLeft, cords.y + field.clientTop) // 3
console.log(cords.right - field.clientLeft, cords.bottom - field.clientTop) // 4