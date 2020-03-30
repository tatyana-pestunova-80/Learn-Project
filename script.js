'use strict';
let money = prompt('Ваш бюджет на месяц?', '');
let date = prompt('Введите дату в формате YYYY-MM-DD', '');
let answer1 = prompt('Введите обязательную статью расходов в этом месяце', '');
let answer2 = prompt('Во сколько обойдется?', '');
let answer3 = prompt('Введите обязательную статью расходов в этом месяце', '');
let answer4 = prompt('Во сколько обойдется?', '');
let appDate = {
    budjet: money,
    timeData: date,
    expenses: {
        answer1: answer2,
        answer3: answer4,
    },
    optionalExpenses: {

    }, 
    income: [

    ],
    savings: false,
}
alert(parseInt(money/30));