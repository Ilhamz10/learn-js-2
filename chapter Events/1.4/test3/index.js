document.onclick = (e) => {
    let imgLink = event.target.closest('a');
    if (!imgLink) return

    e.preventDefault()
    showLargeImg(imgLink.href, imgLink.title)
}

function showLargeImg(src, alt) {
    largeImg.src = src
    largeImg.alt = alt
}