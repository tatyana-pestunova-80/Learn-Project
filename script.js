'use strict';
let money = +prompt('Ваш бюджет на месяц?', '');
let date = prompt('Введите дату в формате YYYY-MM-DD', '');

let appDate = {
    budjet: money,
    timeData: date,
    expenses: {

    },
    optionalExpenses: {

    },
    income: [

    ],
    savings: false,
}

for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', '');
    let b = prompt('Во сколько обойдется?', '');
    if (typeof (a) === 'string' && typeof (a) != null && a != '' && b != '' && a.length < 50) {
        appDate.expenses[a] = b;
    } else {
        alert('введите значение еще раз!')
        i--;
    }
}

/*
let i = 0;
while(i < 2) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', '');
    let b = prompt('Во сколько обойдется?', '');
    if (typeof (a) === 'string' && typeof (a) != null && a != '' && b != '' && a.length < 50) {
        appDate.expenses[a] = b;
        i++;
    } else {
        alert('введите значение еще раз!');
    }
}
*/
/*
let i = 0;
 do {
    let a = prompt('Введите обязательную статью расходов в этом месяце', '');
    let b = prompt('Во сколько обойдется?', '');
    if (typeof (a) === 'string' && typeof (a) != null && a != '' && b != '' && a.length < 50) {
        appDate.expenses[a] = b;
        i++;
    } else {
        alert('введите значение еще раз!');
    }
}
while(i < 2);
*/

appDate.moneyPerDay = appDate.budjet / 30;

alert('Бюджет одного дня - ' + appDate.moneyPerDay + 'руб.');


if (appDate.moneyPerDay < 100) {
    alert('минимальный уровень достатка');
} else if (appDate.moneyPerDay >= 100 && appDate.moneyPerDay <= 1000) {
    alert('среднеобеспеченный гражданин');
} else if (appDate.moneyPerDay >= 1000) {
    alert('да вы богаты, батенька!');
} else {
    alert('Ошибка!');
}