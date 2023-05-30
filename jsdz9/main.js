// - створити блок,

let div = document.createElement('div')

//     - додати йому класи wrap, collapse, alpha, beta

div.classList.add('wrap', 'collapse', 'aplha', 'beta')

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

div.style.background = 'silver'
div.style.color = 'gold'
div.style.fontSize = '20px'


// - додати цей блок в body.
document.body.appendChild(div)

// - клонувати його повністю, та додати клон в body.
//

let clonDiv = div.cloneNode(true)

document.body.appendChild(clonDiv)

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
//

    let arr = ['Main','Products','About us','Contacts']

let ul = document.createElement('ul')

for (const arrElement of arr) {
    let li = document.createElement('li')
    li.innerText = (arrElement)
    ul.appendChild(li)
    document.body.appendChild(ul)
}


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let div = document.createElement('div')
//     let h2 = document.createElement('h2')
//     h2.innerText = (`${coursesAndDurationArrayElement.title} - ${coursesAndDurationArrayElement.monthDuration}`)
//     div.appendChild(h2)
//     document.body.appendChild(div)
// }

// =========================
//




//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let div = document.createElement('div')
//     div.classList.add('item')
//
//     let h1 = document.createElement('h1')
//     h1.classList.add('heading')
//     h1.innerText = `${coursesAndDurationArrayElement.title}`
//
//     let p = document.createElement('p')
//     p.classList.add('description')
//     p.innerText = `${coursesAndDurationArrayElement.monthDuration}`
//
//     div.append(h1, p)
//     document.body.appendChild(div)
// }

// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//

// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
//
// for (const simpson of simpsons) {
//     let divSimpson = document.createElement('div')
//     divSimpson.classList.add('member')
//
//     let nameSimpson = document.createElement('h1')
//     nameSimpson.innerText = `${simpson.name} ${simpson.surname}`
//
//     let ageSimpson = document.createElement('h3')
//     ageSimpson.innerText = `Age - ${simpson.age}`
//
//     let infoSimpson = document.createElement('p')
//     infoSimpson.innerText = `${simpson.info}`
//
//     let photoSimpson = document.createElement('img')
//     photoSimpson.src = simpson.photo
//     document.body.append(nameSimpson, ageSimpson, infoSimpson, photoSimpson )
// }


// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------
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


// <div>
// <div>Title</div>
//      <div>
//          <div> monthDuration</div> ширина 30 марджин 5-10пх в право
//          <div>hourDuration </div> ширина 60
//      </div>
//      <div> modules
//          <ul>
//              <li> </li>
//              <li> </li>
//              <li> </li>
//          </ul>
//      </div>
//
// </div>

document.body.style.background = '#f0f0f0';

for (const coursesArrayElement of coursesArray) {
    let main_container = document.createElement('div')
    main_container.classList.add('main_container')
    main_container.style.height = '500px'
    main_container.style.width = '600px'
    main_container.style.border = '2px solid grey'
    main_container.style.margin = '0 auto '
    main_container.style.marginBottom = '20px'
    main_container.style.padding = '20px'
    main_container.style.background = 'white'

    let titleDiv = document.createElement('div')
    titleDiv.innerText = `${coursesArrayElement.title}`
    titleDiv.style.fontSize = '40px'

    let timeCoursesDiv = document.createElement('div')
    timeCoursesDiv.style.display = 'flex'
    timeCoursesDiv.style.fontSize = '20px'
    timeCoursesDiv.style.marginTop = '20px'

    let monthDurationDiv = document.createElement('div')
    monthDurationDiv.style.width = '30%'
    monthDurationDiv.innerText = `monthDuration - ${coursesArrayElement.monthDuration}`


    let hourDurationDiv = document.createElement('div')
    hourDurationDiv.style.width = '70%'
    hourDurationDiv.innerText =`hourDuration - ${coursesArrayElement.hourDuration}`

    let ulModules = document.createElement('ul')


    let ilModules = document.createElement('li')
    ilModules.style.fontSize = '20px'
    ilModules.style.marginTop = '8px'

    for (let i = 0; i < coursesArrayElement.modules.length; i++) {
        ilModules.innerText = `${coursesArrayElement.modules[i]}`
        ulModules.appendChild(ilModules.cloneNode(true))
    }


    timeCoursesDiv.append(monthDurationDiv, hourDurationDiv)
    main_container.append(titleDiv, timeCoursesDiv, ulModules)
    document.body.appendChild(main_container)
}