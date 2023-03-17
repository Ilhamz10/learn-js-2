function facrotial(n) {
    if(n <= 2) return n

    return n * facrotial(n - 1)
}

console.log(facrotial(5));