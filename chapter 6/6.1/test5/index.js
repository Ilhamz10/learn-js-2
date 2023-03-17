let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function ptintReverseList(list) {
    if (list.next) {
        ptintReverseList(list.next)
    }

    console.log(list.value);
}

ptintReverseList(list);

function ptintReverseList2(list) {
    let arr = []
    let obj = list

    while (obj) {
        arr.push(obj.value)
        obj = obj.next
    }

    for(let i = arr.length - 1; i >= 0; i--){
        console.log(arr[i]);
    }
}

ptintReverseList2(list)