
// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)






  let url = new URL(window.location.href)
let split1 = url.pathname.split('/')
let fileName = (split1[split1.length-1])
//
// console.log(url)
// console.log(split1)
// console.log(fileName)
if(fileName === 'index.html'){
    fetch('http://jsonplaceholder.typicode.com/users')
        .then(aboba => aboba.json())
        .then(arr =>{


            for (let i = 0; i < arr.length; i++) {
                let div = document.createElement('div')
                div.classList.add('divClass')

                let linkBtn = document.createElement('a')
                linkBtn.classList.add('linkBtn')

                let btn = document.createElement('button')
                btn.classList.add('btnClass')
                btn.innerText = 'Info User'
                linkBtn.append(btn)
                let p = document.createElement('p')

                for (const arrElement in arr[i]) {
                    linkBtn.setAttribute('href', `user-details.html`)
                    // linkBtn.setAttribute('href', `user-details.html?id=${i + 1}`)
                    p.innerText =  `ID: ${arr[i].id} 
        Name: ${arr[i].name}`
                    div.append(p)
                }
                document.body.append(div, linkBtn)
            } })
}

if(fileName === 'user-details.html'){

    console.log('asdasd')
}


     // .then(() =>{
     //     const btns = document.querySelectorAll('.btnClass')
     //     btns.forEach(item => {
     //         item.addEventListener('click', function (e) {
     //             const target = e.target
     //             const data = target.closest('.linkBtn')
     //             console.log(data.href)
     //         })
     //     })
     // })
// window.location.href = 'user-details.html';




