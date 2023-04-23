const title = document.querySelector('h1')
const table = document.querySelector('table')
const logout = document.querySelector('button')
const token = document.cookie.split('=')[1]
    axios.get('http://localhost:3000/users', {
        headers:{
            'Authorization': `Bearer ${token}`
        }
    }).then(res=>{
        title.innerText+= " " + res.data.userName
        const users = res.data.users
        for(let i =0; i < users.length; i++){
            const tr = document.createElement('tr')
            const td = document.createElement('td')
            const td2 = document.createElement('td')
            td.innerText = `${users[i]['first_name']} ${users[i]['last_name']}`
            td2.innerText = users[i]['email']
            tr.appendChild(td)
            tr.appendChild(td2)
            table.append(tr)
        }        
    })