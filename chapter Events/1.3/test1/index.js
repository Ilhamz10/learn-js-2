document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('remove-button')) return

    e.target.parentElement.style.display = 'none'
})