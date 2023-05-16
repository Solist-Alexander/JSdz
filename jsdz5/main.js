// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let calc = (a, b) => a * b;
//
// console.log(calc(10, 5))


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let calc = (r) => r * r
// console.log(calc(5) + 'π')


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let calcS = (r, h) => 2 * r * h;
// console.log(calcS(3, 5,) + 'π')


// - створити функцію яка приймає масив та виводить кожен його елемент

// let inputArr = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i])
//     }
// }
//
// let arr = [32, 23, 58, 86, true, null, 'asd']
//
// console.log(inputArr(arr))


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let paragraf = (text) => document.write(`<p>${text}</p>`)
//
// paragraf('asdasda ASD')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let text = (text) => {
//   document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
// text('arrboba')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let ulText =(quantity, text) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < quantity; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// ulText(10, 'zxcasdqwe')


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr = [323, true, false, 'asd', 'aqwe', 43, -12, 13.13]
//
// let ulli = (array) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
// ulli(arr)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// arr = [
//     {
//         id: 1,
//         name: 'sasha',
//         age: 31
//     },
//     {
//         id: 2,
//         name: 'anrew',
//         age: 13
//     },
//     {
//         id: 3,
//         name: 'alisa',
//         age: 83
//     },
//     {
//         id: 4,
//         name: 'ira',
//         age: 28
//     },
//     {
//         id: 5,
//         name: 'dima',
//         age: 18
//     },
// ]
// let aboba = (array) => {
//
//          for (const arrayElement of array) {
//              document.write(`<div>`)
//                document.write(`<ul>`)
//
//                let object = []
//                object = arrayElement
//
//                    document.write(`<li>${object.id}</li>`)
//                    document.write(`<li>${object.name}</li>`)
//                    document.write(`<li>${object.age}</li>`)
//
//                document.write(`</ul>`)
//              document.write(`</div>`)
//              document.write(`<hr>`)
//          }
//
//
// }
// aboba(arr)

// - створити функцію яка повертає найменьше число з масиву

// let arr = [13, -31, 14, -200, 1, 6, -111, 42.11, 34]
// let min = 0
// let minNubmerArr = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         if(min > array[i]){
//             min = array[i]
//         }
//     }
//     console.log(min)
// }
//
// minNubmerArr(arr)


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// let sum = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         sumNumber += arr[i]
//     }
//     console.log(sumNumber)
// }
//
// let numberArr = [1,2,10,7]
//
// let sumNumber = 0
//
// sum(numberArr)


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// let arr = [11,22,33,44]
// let num1 = 0
// let num2 = 0
// let swap = (array, index1, index2) => {
//     for (let i = 0; i < array.length; i++) {
//         if(index1 === i){
//             num1 = arr[i]
//             }
//         if (index2 === i){
//             num2 = arr[i]
//         }
//     }
//     array[index1] = num2
//     array[index2] = num1
//     console.log(array)
// }
// swap(arr, 0, 3)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let arr = [{currency:'USD',value:40},{currency:'EUR',value:42}]
let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (const currencyValue of currencyValues) {
            let object = []
            object = currencyValue

        if(exchangeCurrency === object.currency){
         let result = sumUAH / object.value
            console.log(result)
        }
    }
}
exchange(10000, arr, 'USD')