for (let li of document.querySelectorAll('li')) {
    let liText = li.firstChild.data;
    liText = liText.trim();
    let countOfLi = li.querySelectorAll('li').length;
    alert(`${liText}-${countOfLi}`);
}