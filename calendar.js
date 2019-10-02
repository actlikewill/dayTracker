
let body = document.getElementById('main');

function Year() {
    this.getDate = () => {
        for(let i = 0; i < 10; i++) {
            let d = new Date('2019-7');
            console.log(typeof d);
        }
    }
}




function Day(text) {
    this.text = text;
    this.show = () => {
        let div = document.createElement('div');
        div.innerText = this.text;
        div.setAttribute('class', 'day');
        body.appendChild(div);
    }
}


function Month(weeks) {
    this.show = () => {
        weeks.map((i) => {
            let week = new Week(i);
            week.show();
        });
    };
}

function Week(days) {
    this.show = () => {
        days.map((i) => {
            let day = new Day(i);
            day.show();
        });
    }
}



let month = new Month([['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']]);
month.show();


function getDate(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.nextDay = 0;
    this.nextMonth = 0;

    let currentDate = `${this.year}-${this.month}-${this.day}`;
    this.d = new Date(currentDate);

    this.nextDay = () => {
        let testDayValue = this.d.getDate() +1;
        console.log(testDayValue);
        let testDate = new Date(`${this.year}-${this.month}-${testDayValue}`);
        let regexMonthValue = /([469]|11)/;
        let regMonth = this.d.getMonth() +1;
        let february = this.d.getMonth() == 1 && testDayValue == 29;
        let regexDayValue = /(31)/;
        let overShootDate = regexDayValue.test(testDayValue.toString()) && regexMonthValue.test(regMonth.toString());
        if (testDate == 'Invalid Date' || overShootDate || february) {
            return false;
        } else {
            this.d = testDate;
            return testDate;
        }
    };

    this.nextMonth = () => {
        console.log('New Month');
        let testMonthValue = this.d.getMonth() +2;
        let testDate = new Date(`${this.year}-${testMonthValue}-1`);
        if(testDate == 'Invalid Date') {
            return false;
        } else {
            this.d = testDate;
            this.month = testMonthValue;
            return testDate;
        }
    };

    this.nextYear = () => {
        return this.d.getFullYear() +1
    };

    this.next = () => {
       return this.nextDay() || this.nextMonth();
    }
}


let date = new getDate(2019, 1, 1);
for(let i = 0; i < 365; i++) console.log(date.next());
