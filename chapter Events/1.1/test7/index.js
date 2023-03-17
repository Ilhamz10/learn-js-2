let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let width = 130
let count = 3

let position = 0

prev.onclick = () => {
    position += width * count
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
}

next.onclick = () => {
    position -= width * count
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
}

