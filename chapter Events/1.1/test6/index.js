const removeButton = document.querySelectorAll('.remove-button')

for(let btn of removeButton){
    btn.addEventListener('click', (e) => {
        e.target.parentNode.style.display = 'none'
    })
}