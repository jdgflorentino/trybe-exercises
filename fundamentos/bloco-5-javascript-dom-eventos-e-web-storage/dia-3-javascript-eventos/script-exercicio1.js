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

//Exercício 1
//Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
//Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>

function createDaysOfTheMonth() {
    const dezDaysList = [
        29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ];
    const uldays = document.querySelector("#days");

    for (let i = 0; i < dezDaysList.length; i += 1) {
        let day = dezDaysList[i];
        const dayList = document.createElement("li");

        if (day === 24 || day === 31) {
            dayList.className = "day holiday";
            dayList.innerHTML = day;
            uldays.appendChild(dayList);
        } else if (day === 4 || day === 11 || day === 18) {
            dayList.className = "day friday";
            dayList.innerHTML = day;
            uldays.appendChild(dayList);
        } else if (day === 25) {
            dayList.className = "day holiday friday";
            dayList.innerHTML = day;
            uldays.appendChild(dayList);
        } else {
            dayList.className = "day";
            dayList.innerHTML = day;
            uldays.appendChild(dayList);
        }
    }
}
createDaysOfTheMonth();

// Exercício 2

// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function holidays(feriados) {
    let button = document.createElement("button");
    let elementDiv = document.querySelector(".buttons-container");
    button.innerHTML = feriados;
    button.id = "btn-holiday";
    elementDiv.appendChild(button);
}

holidays("Feriados");

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

function buttonClick() {
    let buttonClick = document.querySelector("#btn-holiday");
    let holidays = document.querySelectorAll(".holiday");

    buttonClick.addEventListener("click", function() {
        for (let i = 0; i < holidays.length; i += 1) {
            if (holidays[i].style.backgroundColor === "white") {
                holidays[i].style.backgroundColor = rgb(238, 238, 238);
            } else {
                holidays[i].style.backgroundColor = "white";
            }
        }
    });
}
buttonClick();