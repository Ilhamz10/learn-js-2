grid.onclick = (e) => {
    if (e.target.tagName != 'TH') return

    let th = e.target

    sortTable(th.cellIndex, th.dataset.type)
}

function sortTable(cellIndex, sortType) {
    let tbody = grid.querySelector('tbody');

    let arr = Array.from(tbody.rows);

    let compare;

    switch (sortType) {
        case 'number':
            compare = function (rowA, rowB) {
                return rowA.cells[cellIndex].innerHTML - rowB.cells[cellIndex].innerHTML;
            };
            break;
        case 'string':
            compare = function (rowA, rowB) {
                return rowA.cells[cellIndex].innerHTML > rowB.cells[cellIndex].innerHTML ? 1 : -1;
            };
            break;
    }

    arr.sort(compare);

    tbody.append(...arr);
}