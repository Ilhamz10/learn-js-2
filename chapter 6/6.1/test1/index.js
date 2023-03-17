function sum(n) {
    if (n == 1) return n

    return n + sum(n - 1)
}

console.log(sum(3))

function sum2(n) {
    let sum = 0

    for (let i = 0; i <= n; i++) {
        sum += i
    }

    return sum
}

console.log(sum(3));

function sum3(n) {
    return n * (n + 1) / 2;
}

console.log(sum3(3));