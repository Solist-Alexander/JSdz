// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

class user{
    constructor(id, name, surname, email, phone){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.emeil = email;
        this.phone = phone;
    }

}

let us1 = new user(32, 'aboba', 'giga', 'fcco123@gmail.com', '09387616')
console.log(us1)


// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
console.log(' ')
let users = []

users.unshift(new user(8, 'sdf', 'Tb'))
users.push(new user(1, 'qweqwe', 'Ty'))
users.unshift(new user(10, 'sfd', 'Tx'))
users.unshift(new user(3, '2qwezxzxc', 'Tq'))
users.push(new user(6, 'rty', 'Tv'))
users.unshift(new user(4, 'zxczxc', 'Tw'))
users.unshift(new user(9, '2qwe', 'Tz'))
users.push(new user(5, 'fghfgh', 'Tc'))
users.unshift(new user(7, 'vbn', 'Tn'))
users.push(new user(2, 'qadas', 'eT'))

console.log(users)
console.log(' ')
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//

let usersFilter = users.filter(user => user.id % 2 === 0)
console.log(usersFilter)

console.log(' ')

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let usersFilterSort = users.sort((a,b) => a.id - b.id)
console.log(usersFilterSort)



//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client{
    constructor(id, name, surname , email, phone, order = []) {
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
        this.order = order
    }

}

// створити пустий масив, наповнити його 10 об'єктами Client

let arrClient = []

arrClient.push(new Client(5, 'aboba', 'giga', 'fcco@asd', '302131', ['knife', 'hammer',]))
arrClient.unshift(new Client(2, 'aboba', 'giga', 'fcco@asd', '302131', ['knife', 'hammer', 'putty knife', 'concrete']))

arrClient.push(new Client(9, 'aboba', 'giga', 'fcco@asd', '302131', ['knife', 'hammer', 'saw', 'screwdriver', 'sledgehammer', ]))
arrClient.unshift(new Client(3, 'aboba', 'giga', 'fcco@asd', '302131', ['knife', 'hammer', 'saw', 'screwdriver', 'sledgehammer',  'concrete']))

arrClient.push(new Client(1, 'aboba', 'giga', 'fcco@asd', '302131', ['knife', 'hammer', 'saw', 'screwdriver', 'sledgehammer', 'putty knife', 'concrete']))
arrClient.unshift(new Client(8, 'aboba', 'giga', 'fcco@asd', '302131', ['knife', 'hammer', 'saw', 'screwdriver',  'putty knife', 'concrete']))

arrClient.push(new Client(6, 'aboba', 'giga', 'fcco@asd', '302131', ['knife', 'hammer', 'saw', 'screwdriver', 'sledgehammer', 'putty knife', 'concrete']))
arrClient.unshift(new Client(7, 'aboba', 'giga', 'fcco@asd', '302131', ['knife', 'hammer', 'saw', 'screwdriver', 'sledgehammer', 'putty knife', 'concrete']))

arrClient.push(new Client(10, 'aboba', 'giga', 'fcco@asd', '302131', ['knife', 'hammer', 'saw', 'screwdriver', 'sledgehammer', 'putty knife', 'concrete']))
arrClient.unshift(new Client(4, 'aboba', 'giga', 'fcco@asd', '302131', ['knife', 'hammer', 'saw', 'screwdriver', ]))






// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(' ')
arrClient.sort((a,b) => a.id - b.id).sort((a,b) => a.order.length - b.order.length)

console.log(arrClient)

console.log( ' ')
//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// function car(model, producer, manufacturer, maxSpeed, Engine){
//     this.model = model
//     this.producer = producer
//     this.manufacturer = manufacturer
//     this.maxSpeed = maxSpeed
//     this.Engine = Engine
// }
//
// let car1 = new car('BMW','qwe', 'zxc', 123, 'rty')
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//
// car.prototype.drive = function (car){
//     console.log(`їдемо зі швидкістю ${car.maxSpeed} на годину`)
// }
// car.prototype.drive(car1)
//
//
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// car.prototype.info = function (car){
//     console.log(`    model = ${car.model}
//     producer = ${car.producer}
//     manufacturer = ${car.manufacturer}
//     maxSpeed = ${car.maxSpeed}
//     Engine = ${car.Engine}`)
// }
//
// car.prototype.info(car1)
//
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//
// car.prototype.increaseMaxSpeed = function (car, newSpeed){
//     car.maxSpeed = newSpeed
//     console.log(car)
// }
// car.prototype.increaseMaxSpeed(car1, 999)
//
//
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
//
// car.prototype.changeYear = function (car, newValue){
//     car.Year = newValue
//     console.log(car)
// }
// car.prototype.changeYear(car1, 1987)
//
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// car.prototype.addDriver = function (car, nameDriver, sureNameDriver, ageDriver, experienceDriver){
//     car.driver = {}
//     car.driver.name = nameDriver
//     car.driver.surename =  sureNameDriver
//     car.driver.age = ageDriver
//     car.driver.experience = experienceDriver
//     console.log(car)
//
// }
//
// car.prototype.addDriver(car1, 'aboba', 'giga', 21, 7 )
//
// console.log(car1)
//
//
// - (Те саме, тільки через клас)



// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class car {
    constructor(model, producer, manufacturer, maxSpeed, Engine){
        this.model = model
        this.producer = producer
        this.manufacturer = manufacturer
        this.maxSpeed = maxSpeed
        this.Engine = Engine
    }
}

let car1 = new car('BMW','qwe', 'zxc', 1263, 'rty')

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

car.prototype.drive = function (car){

    console.log(`їдемо зі швидкістю ${car.maxSpeed} на годину`)
}
car.prototype.drive(car1)

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

car.prototype.info = function (car){
    console.log(`     model = ${car.model}
     producer = ${car.producer}
     manufacturer = ${car.manufacturer}
     maxSpeed = ${car.maxSpeed}
     Engine = ${car.Engine}`)
}
car.prototype.info(car1)

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

car.prototype.increaseMaxSpeed = function (car, newSpeed){
    car.maxSpeed = newSpeed
    console.log(car)
}
car.prototype.increaseMaxSpeed(car1, 2332)


// -- changeYear (newValue) - змінює рік випуску на значення newValue

car.prototype.changeYear = function (car, newYear){
    car.year = newYear
    console.log(car)
}
car.prototype.changeYear(car1, 2023)

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

car.prototype.addDriver = function (car, nameDriver, sureNameDriver, ageDriver, experienceDriver){
    car.driver = {}
    car.driver.name =  nameDriver
    car.driver.sureName = sureNameDriver
        car.driver.age = ageDriver
        car.driver.experience = experienceDriver
    console.log(car)
}
car.prototype.addDriver(car1, 'aboba', 'giga', 21, 7 )

//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


class queen{
    constructor(name, age, sizeFoot) {
        this.name = name
        this.age = age
        this.sizeFoot = sizeFoot
    }
}

class prince{
    constructor(name, age, findSizeShoe) {
        this.name = name
        this.age = age
        this.SizeShoe = findSizeShoe
    }
}
let prince1 = new prince('aboba', 18, 24)
console.log(prince1)
let queens = []

queens.push(new queen('qwe', 23, 12))
queens.unshift(new queen('qwe', 23, 15))
queens.push(new queen('qwe', 23, 19))
queens.unshift(new queen('qwe', 23, 40))
queens.push(new queen('qwe', 23, 32))
queens.unshift(new queen('qwe', 23, 22))
queens.push(new queen('abobaQueen', 23, 24))
queens.unshift(new queen('qwe', 23, 12))
queens.push(new queen('qwe', 23, 11))
queens.unshift(new queen('qwe', 23, 19))

console.log(queens)

for (let i = 0; i < queens.length; i++) {
    if (prince1.SizeShoe === queens[i].sizeFoot){
        console.log(`${prince1.name} и ${queens[i].name} теперь вместе`)
    }

}



  let abobaQueen = queens.find((queen)=> prince1.SizeShoe === queen.sizeFoot)
console.log(`${prince1.name} и ${abobaQueen.name} теперь вместе`)