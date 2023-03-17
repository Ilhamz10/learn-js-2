function fibonachi(n){
    let num1 = 1
    let num2 = 1
    for(let i = 2; i < n; i++){
        let num3 = num1 + num2
        num1 = num2
        num2 = num3
    }
    return num2
}

console.log(fibonachi(77));