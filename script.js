// TODO: The main goal is to have a structure that can be fed a year and a number of days and it the generates a calendar

function curry(fn) {
    return function () {
        if(fn.length > arguments.length) {
            let slice = Array.prototype.slice;
            let args = slice.apply(arguments);
            return function () {
                return fn.apply(null, args.concat(slice.apply(arguments)));
            }
        }
        return fn.apply(null, arguments);
    }
}

let dayOfTheWeek = (date) => {
    let day;
    switch (date.getDay()) {
        case 0:
            day = "Sun";
            break;
        case 1:
            day = "Mon";
            break;
        case 2:
            day = "Tue";
            break;
        case 3:
            day = "Wed";
            break;
        case 4:
            day = "Thu";
            break;
        case 5:
            day = "Fri";
            break;
        case 6:
            day = "Sat";
    }
    return day;
};

let elm = curry(
     function (parent, className, innerText)
    {
        let div = document.createElement('div');
        div.innerText = innerText;
        div.setAttribute('class', className);
        parent.appendChild(div);
    }
);
let week = document.getElementsByClassName('week');

// DayTab('July 1 2019');
function DayTab (day) {
    let currentDate = new Date(day);
    elm(week[0], 'day', dayOfTheWeek(currentDate));
    console.log(dayOfTheWeek(currentDate));
}

function generateMonth(d, m) {
    for(let i = 0; i < d; i++) {
        let string = `${m} ${i} 2019`;
        DayTab(string);
    }
}

let showMonth = curry(generateMonth);

let _30Days = showMonth('3');

_30Days("July");







