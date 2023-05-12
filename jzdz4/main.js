

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function square(a,b){
//     let result = a * b
//     return result
// }
// console.log(square(3,5))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function radius(L){
//     result = L / 2 * Math.PI
//     return result
// }
//
// console.log(radius(5))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function square(h, r){
//     result = 2 * r * (h * r) + 'π'
//     return result
// }
// console.log(square(4, 4))

// - створити функцію яка приймає масив та виводить кожен його елемент

// function arr( ...array){
//     for (const arrayElement of array) {
//         console.log(arrayElement)
//     }
// }
// arr(13, 23, 43, 12)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function text(text){
//    let paragraph =`<h1>${text}</h1>`
//     return paragraph
// }
//
// document.write(text('adasdsada'))


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function list(text){
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<ul>`)
// }
// list("qweqwe")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function list(quantity, text){
//     document.write(`<ul>`)
//   let letquantity = quantity
//     for (let i = 0; i <= letquantity; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`<ul>`)
// }
// list(12, 'ABOBA')


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function arr(...array){
//     document.write(`<ul></ul>`)
//     for (const arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`)
//     }
//     document.write(`</ul>`)
// }
// arr(32,1331, '131asd', true)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// function arr(objects){
//     for (let i = 0; i < objects.length; i++) {
// let object = objects[i]
//         document.write(`<div>`)
// document.write("id: " + object.id)
//         document.write(`<br>`)
// document.write("name: "+ object.name)
//         document.write(`<br>`)
// document.write("age: "+ object.age )
//
//         document.write(`<br><hr>`)
//         document.write(`</div>`)
//     }
// }
//
// arr([
//     {id:12, name:'asd',age:41},
//     {id:1203, name:'zx12c',age:131},
//     {id:123, name:'zxc',age:11}
// ])

// - створити функцію яка повертає найменьше число з масиву

// function minNumber(...arrey){
//     let min = arrey[0]
//     for (let i = 0; i < arrey.length; i++) {
//         if(arrey[i] < min){
//             min = arrey[i]
//         }
//     }
//     console.log(min)
// }
// minNumber(131, 11, 3, -13,33, -67, 0 , 12)

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// function sum(arr){
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     console.log(sum)
// }
//
// sum([5, 5, 3, 2, 1])


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// function swap(arr,index1,index2){
//     let num1 = 0
//     let num2 = 0
//     for (let i = 0; i < arr.length; i++) {
//         if(index1 === i){
//             num1 = arr[i]
//         }
//         if(index2 === i){
//             num2 = arr[i]
//         }
//     }
//     arr[index2] = num1
//     arr[index1] = num2
//     console.log(arr)
//
//
// }
//
// swap([11,22,33,44],3,2)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let result = 0
function exchange(sumUAH,currencyValues,exchangeCurrency){
    for (let i = 0; i < currencyValues.length; i++) {
        let object = currencyValues[i]
        if (exchangeCurrency === object.currency){
            result = sumUAH / object.value
        }
    }
    console.log(result)

}

exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}, {currency:'aboba',value:50}],'USD')