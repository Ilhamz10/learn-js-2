function makeCounter() {
    let count = 0;

    function increase() {
        return count++
    }

    increase.set = function (n) {
        return count = n
    }

    increase.decrease = function () {
        return count--
    }

    return increase
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

counter.set(10); // установить новое значение счётчика

console.log(counter()); // 10

counter.decrease(); // уменьшить значение счётчика на 1

console.log(counter()); // 10 (вместо 11)