
// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)




  let url = new URL(window.location.href)
  let split1 = url.pathname.split('/')
  let fileName = (split1[split1.length-1])
  let ID = new URL(document.URL).searchParams.get('id')

let aboba = function iterateObject(obj) {
    for (const key in obj) {
        if (Array.isArray(obj[key])) {
            iterateArray(obj[key]);
        } else {
            console.log(obj[key]);
        }
    }
};


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
                    linkBtn.setAttribute('href', `user-details.html?id=${i + 1}`)
                    p.innerText =  `ID: ${arr[i].id} 
        Name: ${arr[i].name}`
                    div.append(p)
                }
                document.body.append(div, linkBtn)
            } })
}

if (fileName === 'user-details.html') {
    fetch(`https://jsonplaceholder.typicode.com/users/${ID}`)
        .then(response => response = response.json())
        .then(user => {
         let {name, username, id, email, address, company, phone, website} = user
          let div = document.createElement('div')
            let h3 = document.createElement('h3')
            let h3Company = document.createElement('h3')
            let h2 = document.createElement('h2')
            let h2Company = document.createElement('h2')
            let h1 = document.createElement('h1')

            h1.innerText = `Name: ${name} 
             Username: ${username}`
            h2.innerText = `ID: ${id} 
            Website: ${website}
            Email: ${email}
            Phone: ${phone}
            
            Adress: 
            `
            h3.innerText = `${Object.entries(address).map(([key, value]) => `${key}: ${typeof value === 'object' ? Object.values(value) : value}`).join(' | ')}`;
            // h3.innerText = `${Object.values(address).map(value => typeof value === 'object' ? Object.values(value) : value).join(', | ')}`;
            h2Company.innerText = `Company: `

            h3Company.innerText = `${Object.entries(company).map(([key, value]) => `${key}: ${typeof value === 'object' ? Object.values(value) : value}`).join(' | ')}`;
            document.body.append(h1, h2, h3, h2Company,h3Company)
            console.log(user)
        })

}



