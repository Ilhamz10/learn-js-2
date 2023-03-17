let table = document.getElementById('bagua-table');

let editingTd

table.addEventListener('click', (e) => {

    let target = e.target.closest('.edit-cancel,.edit-ok,td');

    if (target.className == 'edit-cancel') {
        editEnd(editingTd.elem, false);
    } else if (target.className == 'edit-ok') {
        editEnd(editingTd.elem, true);
    } else if (target.nodeName == 'TD') {
        if (editingTd) return;

        editStart(target);
    }
})

function editStart(td) {
    editingTd = {
        elem: td,
        data: td.innerHTML
    };

    td.classList.add('edit-td');

    let area = document.createElement('textarea')
    area.style.width = td.clientWidth + 'px';
    area.style.height = td.clientHeight + 'px';
    area.className = 'edit-area'

    area.value = td.innerHTML
    td.innerHTML = ''
    td.append(area)
    area.focus()

    td.insertAdjacentHTML("beforeEnd",
        '<div class="edit-controls"><button class="edit-ok">OK</button><button class="edit-cancel">CANCEL</button></div>'
    );
}

function editEnd(elem, isOK) {
    if (isOK) {
        elem.innerHTML = elem.firstChild.value
    } else {
        elem.innerHTML = editingTd.data
    }

    elem.classList.remove('edit-td');
    editingTd = null
}