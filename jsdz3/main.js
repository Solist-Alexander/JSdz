// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write("<div>Lorem ipsum dolor sit amet.</div>")
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let j = 0; j < 10; j++) {
    document.write(` <br> <div>House of the Dragon - ${j + 1}</div> `)
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let z = 0
while(z < 20){
    document.write(`<br> <h1>Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>`)
    z++
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let y = 0
while(y < 20){
    document.write(` <br> <h1>Lorem ipsum dolor. - ${y + 1}</h1> `)
    y++
}
//
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write(`<ul>`)
for (const listOfItem of listOfItems) {
    document.write(`<div><il>${listOfItem}</il></div>`)
}
document.write(`</ul>`)


//
// -----------------------------------------------
//
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
//

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (let n = 0; n < products.length; n++) {
    document.write(`<div class="product-card">`)
    document.write(` <h3 class="product-title">${products[n].title}. <br> Price = ${products[n].price}</h3>`)
    document.write(`<img src="${products[n].image}" alt="" class="product-image">`)
    document.write(`</div>`)
}



//
// --------------------
//     є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
let userContStatusT = []
for (const user of users) {
    if(user.status === true){
        userContStatusT[userContStatusT.length] = user
    }
}
for (let v = 0; v < userContStatusT.length; v++) {
    document.write(userContStatusT[v].name + ', ' + userContStatusT[v].age + ', ' + userContStatusT[v].status)
    document.write(`<br>`)
}

document.write(`*************** <br>`)


let userContStatusF = []
for (const user of users) {
    if(user.status === false){
        userContStatusF[userContStatusF.length] = user
    }
}
for (let v = 0; v < userContStatusF.length; v++) {
    document.write(userContStatusF[v].name + ', ' + userContStatusF[v].age + ', ' + userContStatusF[v].status)
    document.write(`<br>`)
}

document.write(`*************** <br>`)


let userContStatusAge = []
for (const user of users) {
    if(user.age > 30){
        userContStatusAge[userContStatusAge.length] = user
    }
}
for (let v = 0; v < userContStatusF.length; v++) {
    document.write(userContStatusAge[v].name + ', ' + userContStatusAge[v].age + ', ' + userContStatusAge[v].status)
    document.write(`<br>`)
}