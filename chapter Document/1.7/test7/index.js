Date.prototype.daysInMonth = function () {
    return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
};

function createCalendar(elem, year, month) {
    let date = new Date(year, month - 1)
    let dateDay = date.getDay()
    let table = document.createElement('table')
    let tbody = document.createElement('tbody')
    table.append(tbody)

    tbody.innerHTML += `<tr>
                            <th>пн</th>
                            <th>вт</th>
                            <th>ср</th>
                            <th>чт</th>
                            <th>пт</th>
                            <th>сб</th>
                            <th>вс</th>
                        </tr>`

    if (dateDay == 0) dateDay = 7

    let countOfRows = Math.ceil((date.daysInMonth() + dateDay - 1) / 7)

    for (let i = 0; i < countOfRows; i++) {
        let tr = document.createElement('tr')
        tbody.append(tr)
    }

    let allTr = tbody.querySelectorAll('tr')

    let day = 1

    for (let i = 1; i < allTr.length; i++) {
        for (let j = 1; j <= 7; j++) {
            if (i == 1) {
                let td = document.createElement('td')
                if (j >= dateDay) {
                    td.innerText = day
                    day += 1
                }
                allTr[i].append(td)
            } else {
                let td = document.createElement('td')
                if(day <= date.daysInMonth()){
                    td.innerText = day
                    day += 1
                } else {
                    td.innerText = ''
                }
                allTr[i].append(td)
            }

        }
    }

    elem.append(table)
}

createCalendar(cal, 2023, 1)