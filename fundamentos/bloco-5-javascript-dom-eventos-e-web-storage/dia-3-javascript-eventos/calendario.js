function createDaysOfTheWeek() {
    const weekDays = [
        "Domingo",
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado",
    ];
    const weekDaysList = document.querySelector(".week-days");

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement("li");
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

function createDaysOfTheMonth() {
    const dezDaysList = [
        29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ];
    const elementul = document.querySelector("#days");

    for (let i = 0; i < dezDaysList.length; i += 1) {
        let alldays = document.createElement("li");
        let day = dezDaysList[i];

        if (day === 24 || day === 31) {
            alldays.className = "day holiday";
            alldays.innerHTML = day;
            elementul.appendChild(alldays);
        } else if (day === 4 || day === 11 || day === 18) {
            alldays.className = "day friday";
            alldays.innerHTML = day;
            elementul.appendChild(alldays);
        } else if (day === 25) {
            alldays.className = "day holiday friday";
            alldays.innerHTML = day;
            elementul.appendChild(alldays);
        } else {
            alldays.className = "day";
            alldays.innerHTML = day;
            elementul.appendChild(alldays);
        }
    }
}
createDaysOfTheMonth();

function holidays(buttonName) {
    let container = document.querySelector(".buttons-container");
    let buttonHolidays = document.createElement("button");
    buttonHolidays.innerHTML = buttonName;
    buttonHolidays.id = "btn-holiday";
    container.appendChild(buttonHolidays);
}

holidays("Feriados");

function clickButton() {
    let buttonHolidays = document.querySelector("#btn-holiday");
    let holidays = document.querySelectorAll(".holiday");
    let color = "rgb(238,238,238)";
    let setNewColor = "white";

    buttonHolidays.addEventListener("click", function() {
        for (let i = 0; i < holidays.length; i += 1) {
            if (holidays[i].style.backgroundColor === setNewColor) {
                holidays[i].style.backgroundColor = color;
            } else {
                holidays[i].style.backgroundColor = setNewColor;
            }
        }
    });
}

clickButton();

function friday(buttonfriday) {

    let container = document.querySelector(".buttons-container");
    let btnfriday = document.createElement("button");
    btnfriday.id = "btn-friday";
    btnfriday.innerHTML = buttonfriday;
    container.appendChild(btnfriday);

};

friday("Sexta-feira");

function mudasexta(fridaysArray) {
    let btnfriday = document.querySelector('#btn-friday');
    let fridays = document.getElementsByClassName('friday');
    let text = 'É sexta';

    btnfriday.addEventListener('click', function() {
        for (let i = 0; i < fridays.length; i += 1) {

            if (fridays[i].innerHTML !== text) {
                fridays[i].innerHTML = text;
            } else {
                fridays[i].innerHTML = fridaysArray[i];
            }



        }
    })
};

let fridaysArray = [4, 11, 18, 25];
mudasexta(fridaysArray);