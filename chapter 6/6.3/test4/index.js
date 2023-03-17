function sum(n) {
    return function (a) {
        return n + a
    }
}

console.log(sum(1)(2));
console.log(sum(2)(5));