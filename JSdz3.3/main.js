// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.

// let array = []
//
// for (let i = 0; i < 100; i += 2) {
// array[array.length] = i
// }
// console.log(array)

//     b. заповнити його 50 непарними числами за допомоги циклу.

// let array = []
//
// for (let i = 1; i < 100; i += 2) {
//     array[array.length] = i
// }
// console.log(array)

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// let array = []
//
// for (let i = 0; i < 20; i++) {
//     let numRandom =Math.floor( Math.random() * 100)
//     array[array.length] = numRandom
// }
// console.log(array)


//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let array = []
//
// for (let i = 0; i < 20; i++) {
//     let numRandom = Math.floor(Math.random() * (732 - 8 + 1) + 8 )
//     array[array.length] = numRandom
// }
// console.log(array)

// 2. Вивести за допомогою console.log кожен третій елемен

// let arr = [ 1, 2, 4, 4, 7, 9, 56, 8, 67, 2, 2, 3, 5, 7, 9, 56, 8, 67 ]

// for (let i = 0; i < arr.length; i += 3) {
//     console.log(arr[i])
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// for (let i = 0; i < arr.length; i +=3) {
//     if(arr[i] % 2 === 0){
//         console.log(arr[i])
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let arr2 = []
//
// for (let i = 0; i < arr.length; i += 3) {
//     if(arr[i] % 2 === 0){
//         console.log(arr[i])
//         arr2[arr2.length] = arr[i]
//     }
// }
// console.log(arr2)

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let arr = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ]
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 === 0){
//         console.log(arr[i + 1])
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let arr = [ 100,250,50,168,120,345,188 ]
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     sum += i
// }
// let result = sum / arr.length
// console.log(result)

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let arr = []
//
// for (let i = 0; i < 10; i++) {
//     arr[arr.length] = Math.floor(Math.random() * (8 - 3 + 1) +3)
// }
// console.log(arr)
//
// for (let j = 0; j < arr.length; j++) {
//     arr[j] = arr[j] * 5
// }
// console.log(arr)

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let arr = ['asdad', 23, 114, 54, -23, true, 'aboa', '32', null, false, ' adas13', 99]
// let numberArr = []
//
// for (let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] === 'number'){
//         numberArr[numberArr.length] = arr[i]
//     }
// }
// console.log(arr)
// console.log(numberArr)

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]

//
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// let usersWithCities = []
// let adress = 'adress'
// let object = []
// let object2 = []
//  let arr = citiesWithId.sort((a, b) => a.user_id - b.user_id);
//
// for (const usersWithIdElement of usersWithId) {
//     object = usersWithIdElement
//     object.adress = {}
//     usersWithCities[usersWithCities.length] =  object
//
// }
// for (let i = 0; i <arr.length; i++) {
//     object2[object2.length] = arr[i]
//     usersWithCities[i].adress = arr[i]
//     console.log(arr[i])
// }
//
// console.log(object2)
// console.log(usersWithCities)







//
//
//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let arr = []
// let numberRandom
// let arr2 = []
// for (let i = 0; i < 10; i++) {
//      numberRandom = Math.floor(Math.random() * (10 - 1 + 1) + 1)
//     arr[arr.length]  = numberRandom
// }
//
// for (let j = 0; j < arr.length; j++) {
//     if(arr[j] % 2 === 0){
//         arr2[arr2.length] = arr[j]
//     }
// }
// console.log(arr)
// console.log(arr2)

//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let arr = []
// let numberRandom
// let arr2 = []
//
// for (let i = 0; i < 10; i++) {
//     numberRandom = Math.floor(Math.random() * (10 - 1 + 1) + 1)
//     arr[arr.length] = numberRandom
// }
//
// for (let j = 0; j < arr.length; j++) {
//     arr2[arr2.length] = arr[j]
// }
// console.log(arr)
// console.log(arr2)




// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let arr = [ 'a', 'b', 'c']
let word = ''

// for (let i = 0; i < arr.length; i++) {
//     word += arr[i]
// }
// console.log(word)


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let i = 0

// while(i < arr.length){
//     word += arr[i]
//     i++
// }
// console.log(word)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// for (const string of arr) {
//   word += string
// }
// console.log(word)