// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let word1 = 'hello world'
let word2 = 'lorem ipsum'
let word3 = 'javascript is cool'

console.log(word1.length);
console.log(word2.length);
console.log(word3.length);
console.log('')
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(word1.toUpperCase())
console.log(word2.toUpperCase());
console.log(word3.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let upperWord1 = 'HELLO WORLD'
let upperWord2 = 'LOREM IPSUM'
let upperWord3 = 'JAVASCRIPT IS COOL'

console.log('')
console.log(upperWord1.toLowerCase());
console.log(upperWord2.toLowerCase());
console.log(upperWord3.toLowerCase())
console.log('')

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//

// let str = ' dirty string   '
// let newStr= str.substring(str.indexOf('dirty'), str.indexOf('g')+1)
//
// console.log(newStr);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// let stringToarray = str.split(' ')
// console.log(stringToarray)

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10,8,-7,55,987,-1011,0,1050,0]
//
// let map = arr.map(number => '' + number )
// console.log(map)


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//

// let nums = [11,21,3];
//
// let  sortNums = nums.sort((num1, num2) => {
// if(num1 > num2){
//     return 1
// }
//      return -1
// })
// console.log(sortNums)
// let sorNums2 = nums.sort((num1, num2) => {
//     if(num1 < num2){
//         return 1
//     }
//     return -1
// })
// console.log(sorNums2);

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// let sort1 = coursesAndDurationArray.sort((a,b) => {
//  if(a.monthDuration < b.monthDuration) {
//      return 1
//  }
//  return -1
// })
// console.log(sort1)


// let array = []
//
// let sort2 = coursesAndDurationArray.map(value => {
//
//     if(value.monthDuration > 5){
//         array.push(value)
//     }
// })
// console.log(array)


// let map = coursesAndDurationArray.map((value, index)  => {
//
//     value.id = index
//     return{
//         id: value.id,
//         title: value.title,
//         monthDuration: value.monthDuration
//     }
// })
// console.log(map);


// =========================
//     описати колоду карт (від 6 до туза без джокерів)
let cards = [
    { cardSuit: 'spade', value: 6, color: 'black' },
    { cardSuit: 'diamond', value: '6', color: 'red' },
    { cardSuit: 'heart', value: '6', color: 'red' },
    { cardSuit: 'clubs', value: '6', color: 'black' },
    { cardSuit: 'spade', value: 7, color: 'black' },
    { cardSuit: 'diamond', value: '7', color: 'red' },
    { cardSuit: 'heart', value: '7', color: 'red' },
    { cardSuit: 'clubs', value: '7', color: 'black' },
    { cardSuit: 'spade', value: 8, color: 'black' },
    { cardSuit: 'diamond', value: '8', color: 'red' },
    { cardSuit: 'heart', value: '8', color: 'red' },
    { cardSuit: 'clubs', value: '8', color: 'black' },
    { cardSuit: 'spade', value: 9, color: 'black' },
    { cardSuit: 'diamond', value: '9', color: 'red' },
    { cardSuit: 'heart', value: '9', color: 'red' },
    { cardSuit: 'clubs', value: '9', color: 'black' },
    { cardSuit: 'spade', value: 10, color: 'black' },
    { cardSuit: 'diamond', value: '10', color: 'red' },
    { cardSuit: 'heart', value: '10', color: 'red' },
    { cardSuit: 'clubs', value: '10', color: 'black' },
    { cardSuit: 'spade', value: 'jack', color: 'black' },
    { cardSuit: 'diamond', value: 'jack', color: 'red' },
    { cardSuit: 'heart', value: 'jack', color: 'red' },
    { cardSuit: 'clubs', value: 'jack', color: 'black' },
    { cardSuit: 'spade', value: 'queen', color: 'black' },
    { cardSuit: 'diamond', value: 'queen', color: 'red' },
    { cardSuit: 'heart', value: 'queen', color: 'red' },
    { cardSuit: 'clubs', value: 'queen', color: 'black' },
    { cardSuit: 'spade', value: 'king', color: 'black' },
    { cardSuit: 'diamond', value: 'king', color: 'red' },
    { cardSuit: 'heart', value: 'king', color: 'red' },
    { cardSuit: 'clubs', value: 'king', color: 'black' },
    { cardSuit: 'spade', value: 'ace', color: 'black' },
    { cardSuit: 'diamond', value: 'ace', color: 'red' },
    { cardSuit: 'heart', value: 'ace', color: 'red' },
    { cardSuit: 'clubs', value: 'ace', color: 'black' },
];
// - знайти піковий туз

// let findAce = cards.reduce((accumulator, card) => {
//     if(card.value === 'ace'){
//         accumulator.push(card)
//     }
//     return accumulator
// }, [])
// console.log(findAce)



// - всі шістки

// let findSix = cards.reduce((accumulator, card) => {
//     if(card.value === '6'){
//         accumulator.push(card)
//     }
//     return accumulator
// }, [])
// console.log(findSix)

// - всі червоні карти

// const findRed = cards.reduce((accumulator, card) =>{
//     if(card.color === 'red'){
//         accumulator.push(card)
//     }
//     return accumulator
// }, [])
// console.log(findRed)

// - всі буби

// const findDiamond = cards.reduce((accumulator, card) => {
//      if(card.cardSuit === 'diamond'){
//          accumulator.push(card)
//      }
//      return accumulator
// }, [])
// console.log(findDlubs)


// - всі трефи від 9 та більше

// let findCard = cards.reduce((accumulator, card) =>{
//     if(card.cardSuit === 'spade' && card.value >= '9'){
//         accumulator.push(card)
//     }
//     return accumulator
// }, [])
// console.log(findCard)




// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }


// let sortCard = cards.reduce((accumulator, card) =>{
//     if(card.cardSuit === 'spade'){
//         accumulator.spades.push(card)
//     }if(card.cardSuit === 'diamond'){
//         accumulator.diamonds.push(card)
//     }if(card.cardSuit === 'heart'){
//         accumulator.hearts.push(card)
//     }if(card.cardSuit === 'clubs'){
//         accumulator.clubs.push(card)
//     }
//     return accumulator
// }, {spades:[],  diamonds:[],  hearts:[], clubs:[]})
//
// console.log(sortCard)






// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в який в modules є sass

// let findSass = coursesArray.reduce((accumulator, courses) => {
//     for (let i = 0; i < courses.modules.length; i++) {
//             if(courses.modules[i] === 'sass'){
//                 accumulator.courses.push(courses)
//         }
//     }
//   return accumulator
//
// }, {courses:[]})
// console.log(findSass)

// --написати пошук всіх об'єктів, в який в modules є docker

let findDocker = coursesArray.reduce((accumulator, courses) =>{
    for (let i = 0; i < courses.modules.length; i++) {
        if(courses.modules[i] === 'docker'){
            accumulator.courses.push(courses)
        }
    }
return accumulator
}, {courses:[]})
console.log(findDocker) 