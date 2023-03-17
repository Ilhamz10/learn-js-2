const ul = document.querySelector('ul')

while(true){
    let text = prompt()
    if(!text) break;
    else{
        let li = document.createElement('li');
        li.textContent = text;
        ul.append(li);
    }
}