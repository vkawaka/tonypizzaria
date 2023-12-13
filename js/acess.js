'use strict'

const entrarBtn = document.getElementById('entrar')

const loginFront = async() => {
    const email =  document.getElementById('email')
    const senha =  document.getElementById('senha')
    const url = `http://127.0.0.1:8080/usuario/login`
    const response = await fetch(url, {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email.value, senha: senha.value})
    })
    const data = await response.json()

    
    if(response.status == 200)
    console.log(data)


}

entrarBtn.addEventListener('click', loginFront())