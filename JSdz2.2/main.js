//
//
//
//
//
//
//
//
// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
//

let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
if ((friends.length - 1) >= 3 ){
    console.log("великий масив")
} else {
    console.log("маленький масив")
}

//
//
// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
//

// const num1 = 14;
// const num2 = 3;
// const num3 = -2;
//
// if(num1 < num2 && num2 < num3){
//     console.log("number2 посередині")
// } else if(num3 < num2 && num2 < num1){
//     console.log("number2 посередині")
// } else if(num2 < num1 && num1 < num3){
//     console.log("number1 посередині")
// } else if(num3 < num1 && num1 < num2){
//     console.log("number1 посередині")
// } else if(num1 < num3 && num3 < num2){
//     console.log("number3 посередині")
// } else if(num2 < num3 && num3 < num1){
//     console.log("number3 посередині")
// }
// else{
//     console.error("Error")
// }

// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
//

// const a = 1
// const b = 5
//
// a + b < 4 ?  result = 'Мало' : result = 'Багато'
// console.log(result)

//
// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
//

const number = 12;

 number >= -100 && number <= -1 ? console.log("число: негативне"):
    number === 0 ? console.log("Число равна нулю"):
        number <= 100 && number >= 1 ? console.log('число позитивне'):
            console.error("Error")

//
//
//
//
//
//
// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)



// let test = null
//
//  test = test  || "неправильно"        //этот момент мне не очень понятен как можно сделать правильно, так как если написать в консоль.лог
//                                      //  не "test", то будет писаться то что в консоле с любым значением в "test"
// console.log(test)

// //
// let test = true
//  test === true ? console.log("вірно") : console.log("Неправильно")
// let test = true
// if(test === true){
//     console.log("вирно")
// } else{
//     console.log("неправильно")
// }
//
//


//
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
//

// const answer = prompt("Яка «офіційна» назва JavaScript?")
//
// if(answer === "ECMAScript"){
//     console.log("Правильно!")
// } else{
//     console.log("Не знаєте? ECMAScript!")
// }


//
//
//
//
//     - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
//


// const number = +prompt("номер квартири")
// if(number >= 1 && number <= 20) {
//     console.log("1 подьезд")
// } else if(number >= 21 && number <= 48) {
//     console.log("2 подьезд")
// } else if(number >= 49 && number <= 90) {
//     console.log("3 подьезд")
// }


//
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
//
//
//
// const nubmer = +prompt("задайте числове значення")
//
// if(nubmer == 10){
//     console.log("вирно")
// } else if(nubmer != 10){
//     console.log("невирно")
// }


// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
//
// const temp = +prompt("задайте температуру вид 10 до 22")
// if (temp >= 10 && temp <= 22){
//     console.log("ми йдемо ВЧИТИСЯ")
// } else if (temp < 10) {
//     console.log("сидимо вдома і вчимося ОНЛАЙН")
// } else {
//     console.error("Error")
// }





//
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
//
//

// let number =  +prompt("ВИКТАРИНА!!!!!!!!!! введите число вид 1 до 5")
// switch (number) {
//     case 1:
//         console.log("ПРИЗ: АВТО")
//         break;
//     case 2:
//         console.log("ПРИЗ: мото")
//         break;
//     case 3:
//         console.log("ПРИЗ: телефон")
//         break;
//     case 4:
//         console.log("ПРИЗ: кот")
//         break;
//     case 5:
//         console.log("ПРИЗ: ботинок")
//         break;
//     default: console.log("ОШИБСЯ ЦИФРОЙ")}


//
//