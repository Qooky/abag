const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('button', (e) =>{
    let messages = [] if (name.value === '' || name.value == null){messages.push('Username required')
}

if(password.value.length == 0){
    messages.push('Password is required')
}

if (password.value.length <= 3) {
    messages.push('Password is incorrect')
}

if (messages.length>0){
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
}

})