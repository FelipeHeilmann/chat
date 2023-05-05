const title = document.querySelector('h1')
const table = document.querySelector('table')
const logout = document.querySelector('button')
const container = document.querySelector('section')
const token = document.cookie.split('=')[1]
    axios.get('http://localhost:3333/friends', {
        headers:{
            'Authorization': `Bearer ${token}`
        }
    }).then(res=>{
        title.innerText+= " " + res.data.first_name
        const friends = res.data.friends[0].friends
        friends.forEach((friend, i) => {
            let fullName = `${friend.first_name} ${friend.last_name}`
            let userChatContainer = createElement('div')
            let name = createElement('h4')
            let perfilIcon = createElement('div')
            let lastTime = createElement('p')
            lastTime.innerText = 'Entrou a última vez às: 20h'
            perfilIcon.classList.add('img-perfil')
            userChatContainer.classList.add('user-chat')
            name.innerText = fullName
            userChatContainer.append(perfilIcon)
            userChatContainer.append(name)
            userChatContainer.append(lastTime)
            container.prepend(userChatContainer)    
        })
    })

const createElement = (tag) =>{
    const element = document.createElement(tag)
    return element
}
