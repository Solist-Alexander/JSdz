// const urlId = new URL(location.href).searchParams.get('id');
// const URL_Base = 'http://jsonplaceholder.typicode.com/users';
// const wrap = document.querySelector('.wrapper')
//
// fetch(`${URL_Base}/${urlId}`)
//     .then(response => {
//         // console.log(response)
//         const data = response.json()
//         console.log(data)
//         return data
//
//     })
//     .then(({id, name, email, phone, address, company, ...rest}) =>{
//         // console.log(data)
//         // const {id, name, email, phone, address, company} = data
//         console.log(rest)
//         const html = `
//             <p class="item__id-text">ID: ${id}</p>
//             <p class="item__name-text">Name: ${name}</p>
//             <p class="item__phone-text">${phone}</p>
//             <p class="item__email-text">${email}</p>
//             <div class="address-wrap>
//                 <p class="address">Adress:</p>
//                 <p class="item__address">
//                     ${Object.values(address).map(item => typeof item != "object"? item:Object.values(item).join(', ') ).join(', ')}
//
//                 </p>
//             </div>
//             <div class="company-wrap>
//                 <p class="company">Company:</p>
//                 <p class="item__company">
//                     ${Object.values(company).map(item => typeof item != "object"? item:Object.values(item).join(', ') ).join(', ')}
//                 </p>
//             </div>
//     `
//         // wrap.innerHTML = html
//             return html
//     })
//     .then(html => wrap.innerHTML = html)