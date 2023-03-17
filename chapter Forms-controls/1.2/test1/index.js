let textArea
let view = document.getElementById('view');

view.onclick = () => {
    editStart()
}

function editStart() {
    textArea = document.createElement('textarea')
    textArea.className = 'edit'
    textArea.value = view.innerHTML

    textArea.onkeydown = function (event) {
        if (event.key == 'Enter') {
            this.blur();
        }
    };

    textArea.onblur = () => {
        editEnd()
    }

    view.replaceWith(textArea)
    textArea.focus()
}

function editEnd() {
    view.innerHTML = textArea.value
    textArea.replaceWith(view)
}