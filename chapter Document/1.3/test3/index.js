let allTr = document.body.firstElementChild.rows;

for (let i = 0; i < allTr.length; i++) {
    allTr[i].cells[i].style = 'background-color: red';
}