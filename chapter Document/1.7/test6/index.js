let allLi = document.querySelectorAll('li')

for(let li of allLi){
    liCount = li.querySelectorAll('li').length
    if(!liCount) continue

    li.firstChild.data += `[${liCount}]`
}