function printNumbers(from, to) {
    let interval = setInterval(go, 1000);

    function go() {
        console.log(from);
        if (from == to) clearInterval(interval)
        from++
    }

    go()
}

printNumbers(1, 5)

function printNumbers2(from, to) {
    let timeout = setTimeout(function print(){
        console.log(from);

        if(from < to) setTimeout(print, 1000);

        from++
    }, 1000);
}

// printNumbers2(1, 5)