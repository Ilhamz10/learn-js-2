tree.addEventListener('click', (e) => {
    if(e.target.tagName != 'SPAN') return

    e.target.classList.toggle('open')
})