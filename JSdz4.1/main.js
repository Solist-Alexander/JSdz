// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function min(a, b, c) {
//     // arr[arr.length] = a
//     // arr[arr.length] = b
//     // arr[arr.length] = c
//     if(a < b && a < c){
//         console.log(a)
//     }else if (b < a && b < c){
//         console.log(b)
//     }else if(c < b && c < a){
//         console.log(c)
//     } else{
//         console.error('Error')
//     }
// }
//
//  min(40, 30, 25)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function max(a, b, c) {
//     // arr[arr.length] = a
//     // arr[arr.length] = b
//     // arr[arr.length] = c
//     if(a > b && a > c){
//         console.log(a)
//     }else if (b > a && b > c){
//         console.log(b)
//     }else if(c > b && c > a){
//         console.log(c)
//     } else{
//         console.error('Error')
//     }
// }
//
// max(-400, -45, 43)

// - створити функцію яка повертає найбільше число з масиву

// let arr = [13, 13, 53, 73, 113, 32, 86, -53, -53.5, 0, 9]
// let maxNumber = 0
// function max(array){
//     for (const number of arr) {
//         if(maxNumber < number){
//             maxNumber = number
//         }
//     }
//     return maxNumber
// }
// let aboba = max(arr)
// console.log(aboba)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arr = [13, 13, 53, 73, 32, 86, -53, -53, 0, 9]
//
// function midl(array){
//     let sum = 0
//     for (const arrayElement of array){
//         sum += arrayElement
//     }
//     let result = sum / array.length
//     return result
// }
// let aboba = midl(arr)
// console.log(aboba)


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);


// function MinMax(...array){
//     let minNumber = array[0]
//     let maxNumber = array[0]
//     for (let i = 0; i < array.length; i++) {
//         if (minNumber > array[i]){
//             minNumber = array[i]
//         }
//         if (maxNumber < array[i]){
//             maxNumber = array[i]
//         }
//     }
//     console.log(maxNumber)
//     return minNumber
// }
//
// let aboba = MinMax(13, 13, 53, 73, 32, 86, -53, -53, 0, 9)
// console.log(aboba)


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.


// function addArr(){
//     let arr = []
//     for (let i = 0; i < 10; i++) {
//         arr[arr.length] = Math.round(Math.random() * 100)
//     }
//     console.log(arr)
// }
//
// addArr()

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function randomNumber(limit){
//     let arr = []
//     for (let i = 0; i < 10; i++) {
//         arr[arr.length] = Math.round(Math.random() * limit)
//     }
//     console.log(arr)
//
// }
//
// randomNumber(10)


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// function swap(array){
// let arrSwap = []
//     for (let i = array.length - 1; i >= 0; i--) {
//         arrSwap[arrSwap.length] = array[i]
//     }
//     console.log(arrSwap)
// }
// let arr = [1,2,3,4,5]
// swap(arr)


// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// function aboba(a, b){
//     if (b === undefined){
//         a = a ** 2
//         console.log(a)
//     } else {
//         console.log(a + ' ' + b)
//     }
//
// }
// aboba(31, 5)

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//

// let newArr = []
// let arr1 = [5, 12, 0, -31, 53, 76]
// let arr2 = [9, -5, 1, 0 , 3, 8]
//
// function sumArr(array1, array2){
//     if (array1.length > array2.length){
//         for (let i = 0; i < arr1.length; i++) {
//            newArr.push(array1[i] + array2[i])
//         }
//     } else{
//         for (let i = 0; i < arr2.length; i++) {
//             newArr.push(array1[i] + array2[i])
//         }
//     }
//     console.log(newArr)
// }
// sumArr(arr1, arr2)


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]


//  let object = [
//      {name: 'Dima', age: 13},
//      {model: 'Camry'}
//  ]
// function keyObject(object){
//     let objectArr = []
//     for (let i = 0; i < object.length; i++) {
//         for (const objectKey in object[i]) {
//             objectArr.push(objectKey)
//         }
//     }
//     console.log(objectArr)
//     return objectArr
// }
// keyObject(object)


//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// let object = [
//      {name: 'Dima', age: 13},
//      {model: 'Camry'}
//  ]
//
// for (const objectElement of object) {
//     console.log(objectElement)
//     for (const objectElementKey in objectElement) {
//         console.log(objectElement[objectElementKey])
//     }
// }