// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let form1 = document.forms.form1
form1.onsubmit = function (ev){
    ev.preventDefault();
    let name1 = { name: this.name.value, surname: this.surname.value, age: this.age.value }
    let divForm1 = document.getElementById('div1')
    divForm1.innerText = `name: ${name1.name}
            surname: ${name1.surname}
            age: ${name1.age} `
}



// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let div2 = document.getElementById('div2')

let storageNumberDiv2 = localStorage.getItem('localNumberDiv2')
if(storageNumberDiv2 === null){
    storageNumberDiv2 = 0
} else{
    storageNumberDiv2++
}
div2.innerText = storageNumberDiv2
localStorage.setItem('localNumberDiv2', storageNumberDiv2);



// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію


 let date = new Date()

let sessions = localStorage.getItem('sessions')
if(sessions === null){
    sessions = []
}else{
    sessions =  JSON.parse(sessions)
    sessions.push(date)
}
localStorage.getItem('sessions', JSON.stringify(sessions))

// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//
let arr4 = []
 let  arrI4 = 0
for (let i = 1; i <= 100; i++) {
    arr4.push({name: 'name' + ' '+ i, id: i })
}

let buttonPrev = document.createElement('button')
buttonPrev.innerText = 'prev'
let buttonNext = document.createElement('button')
buttonNext.innerText = 'next'
document.body.append(buttonPrev, buttonNext)



document.onreadystatechange = function (){
    for (const obj of arr4) {
        if(obj.id <= 10 && document.readyState === 'complete') {
            arrI4++
            let br4 = document.createElement('br')
            let text4 = document.createElement('span')
            text4.innerText =  `${obj.name} - ${obj.id}`
            text4.classList.add('text4')
            document.body.append(br4, text4)
        }

    }

}



buttonNext.onclick = function (ev){
    let next = document.getElementsByClassName('text4').length

    for (let i = arrI4  ; i < arrI4 + 10; i++) {

        let br4 = document.createElement('br')
        let text4 = document.createElement('span')
        text4.innerText =  `${arr4[i].name} - ${arr4[i].id}`
        text4.classList.add('text4')
        document.body.append(br4, text4)
    }
    arrI4 += 10
}
buttonPrev.onclick = function (ev){

    let Prev = document.getElementsByClassName('text4')
    for (let i = arrI4 - 2 ; i >= arrI4 - 11 ; i--) {
        let br4 = document.createElement('br')
        let text4 = document.createElement('span')
        text4.innerText =  `${arr4[i].name} - ${arr4[i].id}`
        text4.classList.add('text4')
        document.body.append(br4, text4)

    }
    arrI4 -= 10
}
//
//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let button5 = document.createElement('button')
button5.innerText = 'кнопка яка вдаляэ елемент'
document.body.append(button5)

button5.onclick = function () {
    document.getElementById('text5').remove()
}

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
button6.onclick = function (ev) {
    ev.preventDefault()
    console.log('asd')
    if(parseInt(input6.value) < 18 && !isNaN(parseInt(input6.value))){
        alert('вам меньше 18')
    }

}

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//

// let button7 = document.getElementById('button7')
// let numberOfLines  = document.getElementById('numberOfLines')
// let theNumberOfCells = document.getElementById('theNumberOfCells')
// let cellContents = document.getElementById('cellContents')
//
//
//
// button7.onclick = function (ev) {
//     ev.preventDefault()
//
//     let table7 = document.createElement('table')
//     table7.style.border = '2px solid grey'
//
//
//
//     if(!isNaN(parseInt(numberOfLines.value)) && !isNaN(parseInt(theNumberOfCells.value))){
//
//
//         for (let i = 0; i < numberOfLines.value; i++) {
//             let tr7 = document.createElement('tr')
//
            //*******************************************************
            // let thElement =  document.querySelectorAll('th')
            // if(thElement.length < 1){
            //     for (let z = 0; z < theNumberOfCells.value; z++) {
            //         let th7 = document.createElement('th')             //не смог придумать как добавить заголовки, чтобы  они были                                                                   первые сверху
            //         th7.innerText  = 'столбец 1'
            //         tr7.append(th7)
            //     }
            // }
            //*******************************************************

//             for (let j = 0; j < theNumberOfCells.value ; j++) {
//
//                 let td7 = document.createElement('td')
//                 td7.innerText = cellContents.value
//                 tr7.append(td7)
//             }
//             table7.append(tr7)
//             document.body.append(table7)
//         }
//         return table7
//     } else {
//         alert('вы не правильно заполнили форму')
//     }
// }












