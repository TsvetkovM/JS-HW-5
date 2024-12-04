// 1================
let optionList;
const coffee = 'Coffee';
const tea = 'Tea';
const juice = 'Juice';

switch (optionList) {
    case coffee:
        console.log('Ви обрали каву ')
        break;
    case tea:
        console.log('Зараз зробимо чай');
        break;
    case juice:
        console.log('Вже наливаємо сік');
        break;
    default:
        console.log('Ви нічого не обрали');
        break;
}
// 2---------------------
let weekDay;
const monday = 'Понеділок'
const tuesday = 'Вівторок';
const wednesday = 'Середа';
const thursday = 'Четвер';
const friday = 'Пятниця';
const saturday = 'Субота';
const sunday = 'Неділя';
const undefined = 'Зайдіть пізніше';
switch (weekDay) {
    case (monday):
        console.log(`Сьогодні ${monday}, Робочий день`)
        break;
    case (tuesday):
        console.log(`Сьогодні ${tuesday} , Робочий день`)
        break;
    case (wednesday):
        console.log(`Сьогодні ${wednesday}, Робочий день`)
        break;
    case (thursday):
        console.log(`Сьогодні ${thursday}, Робочий день`)
        break;
    case (friday):
        console.log(`Сьогодні ${friday}, Робочий день`)
        break;
    case (saturday):
        console.log(`Сьогодні ${saturday}, Вихідний день`)
        break;
    case (sunday):
        console.log(`Сьогодні ${sunday}, Вихідний день`)
        break;
    default:
        console.log(`${undefined}`);
        break;
}
// 3----------------
let monthNumber;
const winter = 'winter';
const spring = 'spring';
const summer = 'summer';
const fall = 'fall';
switch (monthNumber) {
    case (1 || 2 || 12):
        console.log(winter);
        break;

    case (3 || 5):
        console.log(spring);
        break;
    case (6 || 8):
        console.log(summer);
        break;
    case (9 || 11):
        console.log(fall);
        break;
    default:
        console.log('Помилка');
        break;
}
// 4------------------------------
let trafficLight;
const red = 'Червоний - стоп';
const yellow = 'жовтий — чекати';
const green = 'смарагдовий - йти';
switch (trafficLight) {
    case red:
        console.log(red);
        break;
    case yellow:
        console.log(yellow);
        break;
    case green:
        console.log(green);
        break;
    default:
        console.log('Світлофор зламався')
        break;
}
// 5==============================
let num1 = 1;
let num2 = 0; 
let op = '/'; 
let answer; 
if (num2 === 0 && op ==='/') { 
    console.log('Cant do this operation (dividing by 0 is impossible)'); 
} else { 
    switch (op) { 
        case '/': 
            answer = num1 / num2 
            break; 
        case '*': 
            answer = num1 * num2 
            break; 
        case '+': 
            answer = num1 + num2 
            break; 
        case '-': 
            answer = num1 - num2 
            break; 
        default: 
            break; 
    } 
}