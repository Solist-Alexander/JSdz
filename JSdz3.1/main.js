// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//

const arr1 = [1,3,4,1,2]
const arr2 = ['asda', 'aboba', 'qrqwe', 'asd', 'qwe']
const arr3 = [1,'adas',true,null,2]

console.log(arr1)
console.log(arr2)
console.log(arr3)

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let emptyArr = []
emptyArr[0] = 'zxc'
emptyArr[1] = 1231
emptyArr[5] = true
console.log(emptyArr)

//
//
//
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while + +
//     2. перебрати його циклом for + +
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом + +
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом + +
// 5. перебрати циклом while та вивести  числа тільки парні  значення + +
// 6. перебрати циклом for та вивести  числа тільки парні  значення + +
// 7. замінити кожне число кратне 3 на слово "okten" + +
// 8. вивести масив в зворотньому порядку. +
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед) +
//

let arr4 = [2,17,13,6,22,31,45,66,100,-18]

// let z = 0
// while(z < arr4.length){
//     console.log(arr4[z])
//     z++
// }

//
// for (let x = 0; x <  arr4.length; x++) {
//     console.log(arr4[x])
// }


// let x = 0
// while(x < arr4.length){
//     if(x % 2 === 1 ) {
//         console.log(arr4[x])
//     }
//     x++
// }

// for (let x = 0; x < arr4.length; x++) {
//     if(x % 2 === 1){
//         console.log(arr4[x])
//     }
// }

// let x = 0
// while(x < arr4.length){
//     if(x % 2 === 0 ) {
//         console.log(arr4[x])
//     }
//     x++
// }

// for (let x = 0; x < arr4.length; x++) {
//     if(x % 2 === 0){
//         console.log(arr4[x])
//     }
// }

// for (let x = 0; x < arr4.length; x++) {
//     if(arr4[x] % 3 === 0){
//         arr4[x] = 'okten'
//     }
//     console.log(arr4[x])
// }

// for (let x = arr4.length; x >= 0; x--) {
//     console.log(arr4[x])
// }


// let x = arr4.length
// while (x >= 0){
//     console.log(arr4[x])
//     x--
// }

// for (let x = arr4.length; x >= 0; x--) {
//     console.log(arr4[x])
// }

// let x = arr4.length
// while(x >= 0){
//     if(x % 2 === 1){
//         console.log(arr4[x])
//     }
//     x--
// }
//
// for (let x = arr4.length; x >= 0; x--) {
//     if(x % 2 === 1){
//         console.log(arr4[x])
//     }
// }

// let x = arr4.length
// while(x >= 0){
//     if(x % 2 === 0){
//         console.log(arr4[x])
//     }
//     x--
// }
//
// for (let x = arr4.length; x >= 0; x--) {
//     if(x % 2 === 0){
//         console.log(arr4[x])
//     }
// }

// for (let x = arr4.length; x >= 0; x--) {
//     if(arr4[x] % 3 === 0) {
//         arr4[x] = 'Okten'
//     }
//     console.log(arr4[x])
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// const arr5 = [1,3,4,1,2, 1,3,4,1,2]
//
// for (let i = 0; i < arr5.length; i++) {
//     console.log(arr5[i]);
// }




// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let arr6 = ['asd', 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', 'asd']

for (const arr6Element of arr6) {
    console.log(arr6Element)
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let arr7 = [1,'adas',true,null,2, 1,'adas',true,null,2]

let n = 0
while (n < arr7.length ){
    console.log(arr7[n])
    n++
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arr8 = [1,'adas',true,null,2, 1,'adas',true,false,2]
//
// for (let x = 0; x < arr8.length; x++) {
//     if(typeof arr8[x] === 'boolean') {
//         console.log(arr8[x])
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// for (let x = 0; x < arr8.length; x++) {
//     if(typeof arr8[x] === 'number'){
//         console.log(arr8[x])
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// for (let x = 0; x < arr8.length; x++) {
//     if(typeof arr8[x] === 'string'){
//         console.log(arr8[x])
//     }
// }

//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arr9 = []
// arr9[0] = 123
// arr9[1] = 'asd'
// arr9[2] = true
// arr9[3] = 123
// arr9[4] = false
// arr9[5] = 123
// arr9[6] = 'asda'
// arr9[7] = 123
// arr9[8] = null
// arr9[9] = 123
// for (let x = 0; x < arr9.length; x++) {
//     console.log(arr9[x])
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let x = 0; x <= 10 ; x++) {
//     console.log(x)
//     document.write(x)
// }


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let x = 0; x <= 100 ; x++) {
//     console.log(x)
//     document.write(x)
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

//  for(let x = 0; x <= 100 ; x += 2) {
//     console.log(x)
//     document.write(x)
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let x = 0; x <= 100; x++) {
//     if (x % 2 === 0){
//         console.log(x)
//         document.write(x)
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let x = 0; x <= 100; x++) {
//     if (x % 2 === 1){
//         console.log(x)
//         document.write(x)
//     }
// }
console.log('=============================================')

let books =[
    {
        name: 'Book111',
        title: 123,
        autor: ['artur', 'alex'],
        genres: ['horror', 'comedy', 'detective']
    },
    {
        name: 'Book22',
        title: 1233,
        autor: ['artur'],
        genres: ['horror']
    },
    {
        name: 'Book3',
        title: 54,
        autor: ['artur', 'pasha', 'nastya'],
        genres: ['horror', 'detective']
    }
]

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку. +

// let result= 0
// let object = []
// for (let a = 0; a < books.length; a++) {
//  object = books[a]
//     if(result < object.title) {
//         result = object.title
//     }
// }
// for (let b = 0; b < books.length; b++) {
//     object = books[b]
//     if(result === object.title){
//         console.log(`Самая большая книга: ${object.name}`)
//     }
// }

// - знайти книжку/ки з найбільшою кількістю жанрів +

// let maxNumber = 0
// let number = 0
// let arrNumberBook = []
// let arrBook = []

// for (const book of books) {
//     number = book.genres.length
//     arrNumberBook[arrNumberBook.length] = number
//     arrBook[arrBook.length] = book
// }
// for (let n = 0; n < arrNumberBook.length; n++) {
//     if(maxNumber < arrNumberBook[n]){
//         maxNumber = arrNumberBook[n]
//     }
// }
//
// for (let q = 0; q < arrBook.length; q++) {
//     let object = arrBook[q]
//     if(maxNumber === object.genres.length){
//         console.log(`Книга в которой больше всего жанров: ${object.name}`)
//     }
// }

// - знайти книжку/ки з найдовшою назвою

// let object = []
// let maxName = 0
//
// for (let i = 0; i < books.length; i++) {
//     object = books[i]
//     if(maxName < object.name.length){
//         maxName = object.name.length
//     }
// }
// console.log(maxName)
// for (let i = 0; i < books.length; i++) {
//     object = books[i]
//     if(maxName === object.name.length){
//         console.log(`Книга c cамым большим именем: ${object.name}`)
//     }
// }




// - знайти книжку/ки які писали 2 автори

// let object = []
//
// for (let i = 0; i < books.length; i++) {
//     object = books[i]
//         if(object.autor.length === 2){
//             console.log(`Книга в которой два автора: ${object.name}`)
//         }
// }


// - знайти книжку/ки які писав 1 автор

let object = []

for (let i = 0; i < books.length; i++) {
    object = books[i]
    if(object.autor.length === 1){
        console.log(`Книга в которой один автора: ${object.name}`)
    }

}



