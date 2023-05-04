// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [12, 32,'aboba', true, 23.1, 1, 4, 2, 51, 55];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
 let book1 = {
     title: 'aboba',
     pageCount: 123,
     genre: 'horror'
 }
 let book2 = {
     title: 'aboba',
     pageCount: 123,
     genre: 'horror'
 }
 let book3 = {
     title: 'aboba',
     pageCount: 123,
     genre: 'horror'
 }




// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.


let book4 = {
    title: 'aboba',
    pageCount: 123,
    genre: 'horror',
    authors: [
        {name: 'name1', age: 213},
        {name: 'name1', age: 213 },
        {name: 'name1', age: 213 }
    ]
}
let book5 = {
    title: 'aboba',
    pageCount: 123,
    genre: 'horror',
    authors: [
        {name: 'name1', age: 213},
        {name: 'name1', age: 213 },
        {name: 'name1', age: 213 }
    ]
}
let book6 = {
    title: 'aboba',
    pageCount: 123,
    genre: 'horror',
    authors: [
        {name: 'name1', age: 213},
        {name: 'name1', age: 213 },
        {name: 'name1', age: 213 }
    ]
}
console.log(book5.authors)


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let container = [
    user1 = {
        name: 'anton',
        username: 'mironchyk',
        password:123123,
    },
    user2 = {
        name: 'anton',
        username: 'mironchyk',
        password:'arrrrrr',
    },
    user3 = {
        name: 'anton',
        username: 'mironchyk',
        password:123123,
    },
    user4 = {
        name: 'anton',
        username: 'mironchyk',
        password:123123,
    },
    user5 = {
        name: 'anton',
        username: 'mironchyk',
        password:123123,
    },
    user6 = {
        name: 'anton',
        username: 'mironchyk',
        password:123123,
    },
    user7 = {
        name: 'anton',
        username: 'mironchyk',
        password:123123,
    },
    user8 = {
        name: 'anton',
        username: 'mironchyk',
        password:123123,
    },
    user9 = {
        name: 'anton',
        username: 'mironchyk',
        password:123123,
    },
    user10 = {
        name: 'anton',
        username: 'mironchyk',
        password:123123,
    }
]
// console.log(user1.password);
  console.log(container[0]['password']);
  console.log(user2.password);
  console.log(container[2]['password']);
  console.log(user4.password);
  console.log(container[4]['password']);
  console.log(user6.password);
  console.log(container[6]['password']);
  console.log(user8.password);
  console.log(container[8]['password']);
  console.log(user10.password);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 10;
let a = 1;
let b = 0;
let c = -3;
if(x !== 0){
    console.log('вірно')
} else {
    console.log('Невірно')
}
if(a !== 0){
    console.log('вірно')
} else {
    console.log('Невірно')
}
if(b !== 0){
    console.log('вірно')
} else {
    console.log('Невірно')
}
if(c !== 0){
    console.log('вірно')
} else {
    console.log('Невірно')
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let varA= 24;
if(varA >= 0 && varA <=15 ) {
    console.log('перша четверть')
} else if(varA >= 16 && varA <= 30){
console.log('друга четверть')
} else if (varA >= 31 && varA <= 45) {
    console.log('третя четверть')
}   else if (varA >= 46 && varA <= 60) {
    console.log('четверта частина')
}  else {
    console.log('задано не правильне число')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 23
if(day >= 0 && day <=10 ) {
    console.log('перша четверть')                                                      
} else if(day >= 11 && day <= 20){
console.log('друга четверть')
} else if (day >= 21 && day <= 31) {
    console.log('третя четверть')
}   else {
    console.log('задано не правильне число')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// i = +prompt('введить порядковий номер дня тижня від 1 до 7')
//      switch (i){
//          case 1: console.log('monday')
//              break;
//          case 2: console.log('Tuesday')
//              break;
//          case 3: console.log('Wednesday')
//              break;
//          case 4: console.log('Thursday')
//              break;
//          case 5: console.log('Friday')
//              break;
//          case 6: console.log('Saturday')
//              break;
//          case 7: console.log('Sunday')
//              break;
         // default:
        //  console.log('Error')
//      }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
// let num1 = +prompt('перше число');
// let num2 = +prompt('друге число');
//
// if(num1 > num2){
//     console.log('максимальне число:' + num1)
// } else if(num1 < num2){
//     console.log('максимальне число:' + num2)
// } else if(num1 === num2){
//     console.log("ці числа рівні")
// } else {
//     console.log("Error")
// }
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)


let x1 = 'aboba'

if(x1 === true || x1 === false) {
    x1 = 'default'
    console.log(x1)
} else{
    console.log('Error')
}

//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('супер')
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('супер')
}
if (coursesAndDurationArray[2]['monthDuration'] > 5) {
    console.log('супер')
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('супер')
}
if (coursesAndDurationArray[4]['monthDuration'] > 5) {
    console.log('супер')
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('супер')
}

