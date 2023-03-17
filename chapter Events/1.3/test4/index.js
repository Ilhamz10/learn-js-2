let tip
document.addEventListener('mouseover', (e) => {
    let tipText = e.target.dataset.tooltip

    if (!tipText) return

    tip = document.createElement('div')
    tip.classList.add('tooltip')
    tip.innerHTML = e.target.dataset.tooltip
    document.body.append(tip)

    let coords = e.target.getBoundingClientRect()

    let left = coords.left + (e.target.offsetWidth - tip.offsetWidth) / 2;
    if (left < 0) left = 0;

    let top = coords.top - tip.offsetHeight - 5;

    if (top < 0) {
        top = coords.top + e.target.offsetHeight + 5;
    }

    tip.style.left = left + 'px';
    tip.style.top = top + 'px';
})

document.addEventListener('mouseout', () => {
    if (tip) {
        tip.remove();
        tip = null;
    }
})