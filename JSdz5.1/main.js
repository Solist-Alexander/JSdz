// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let minNumber = (a, b, c) => {
//     if(a < b && a < c) {
//         console.log(`самое маленькое число: ${a}`)
//     } else if(b < a && b < c){
//         console.log(`самое маленькое число: ${b}`)
//     }else if(c < b && c < a){
//         console.log(`самое маленькое число: ${c}`)
//     } else if(c === b && c === a && b === a) {
//         console.log(`Все числа равны`)
//     } else{
//         console.error("Error")
//     }
// }
// minNumber(43, 43, 4)



// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let maxNumber = (a, b, c) => {
//     if(a > b && a > c) {
//         console.log(`самое большое число: ${a}`)
//     } else if(b > a && b > c){
//         console.log(`самое большое число: ${b}`)
//     }else if(c > b && c > a){
//         console.log(`самое большое число: ${c}`)
//     } else if(c === b && c === a && b === a) {
//         console.log(`Все числа равны`)
//     } else{
//         console.error("Error")
//     }
// }
// maxNumber(43, 344, 4)



// - створити функцію яка повертає найбільше число з масиву

// let maxNumber = (array) => {
//     let max = array[0]
//     for (let i = 0; i < array.length; i++) {
//         if(max < array[i]){
//             max = array[i]
//         }
//     }
//     console.log(max)
//
// }
//
// let arr = [31, 43, 16, 9, -64, 0, -234, 53]
// maxNumber(arr)


// - створити функцію яка повертає найменьше число з масиву

// let arr = [31, 43, 16, 9, 4, 0, 34, 53]
//
// let minNumber = (array) => {
//     let min = array[0]
//
//     for (let i = 0; i < array.length; i++) {
//         if(min > array[i]){
//             min = array[i]
//         }
//     }
//     console.log(min)
// }
//
// minNumber(arr)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13


// let arr = [1,2,15]
//
// let sumArray = (array) => {
//     let sum = 0
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i]
//     }
//     console.log(sum)
// }
//
// sumArray(arr)
//

// - Дано натуральное число n. Выведите все числа от 1 до n.

// let nNumber = (number) => {
//
//     for (let i = 1; i <= number; i++) {
//         console.log(i)
//     }
// }
// nNumber(8)

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// let aboba = (A, B) => {
//       if(A < B){
//           for (let i = A; i <= B; i++) {
//               console.log(i)
//           }
//       }  else if(A === B){
//           console.log(A)
//       } else if (A > B) {
//           for (let i = A; i >= B; i--) {
//               console.log(i)
//           }
//       } else{
//           console.error("Error")
//       }
//
// }
//
// aboba(10, 5)

//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//

// let arr = [9,8,0,4]
//
// let swap = (array, index) => {
//
//     let num1 = 0
//     let num2 = 0
//
//     for (let i = 0; i < array.length; i++) {
//         if(index === i){
//             num1 = array[i]
//             num2 = array[i + 1]
//         }
//     }
//     array[index] = num2
//     array[index + 1] = num1
//     console.log(array)
// }
// swap(arr, 0)



// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let arr1 =  [1,0,6,0,3]
let arr2 =  [0,1,2,3,4]
let arr3 = [0,0,1,0]

let swap = (array) => {
    let zero = 0
    let num2 = 0
    for (let i = 0; i < array.length; i++) {
        if(array[i] === zero && array.length > i + 1){
            array[i] = array[i + 1]
           array[i + 1] = zero
        }                                                 //не знаю как, но работает. скорее всего  костыль, но я что                                                  то не совсем понимаю как можно написать этот код нормально
    }
    for (let i = 0; i < array.length; i++) {
        if(array[i] === zero && array.length > i + 1){
            array[i] = array[i + 1]
            array[i + 1] = zero
        }
    }
    console.log(array)
}
swap(arr1)
swap(arr2)
swap(arr3)