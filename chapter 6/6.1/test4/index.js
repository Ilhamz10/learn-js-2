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

function printList(list) {
    let obj = list

    while (obj) {
        console.log(obj.value);
        obj = obj.next
    }
}

printList(list);

function printList2(list) {

    console.log(list.value);

    if (list.next) {
        printList2(list.next);
    }

}

printList2(list);