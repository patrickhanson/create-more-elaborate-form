const userCreateForm = document.getElementById("user-create-form")
const userCreateSubmitButton = userCreateForm.querySelector("button")

userCreateSubmitButton.addEventListener("click", submitFormInfo)

function submitFormInfo(event) {
    event.preventDefault()
    const formElement = event.currentTarget.parentElement
    const User = {
        username: formElement.querySelector('#username').value,
        email: formElement.querySelector('#email').value,
        phonenumber: formElement.querySelector('#phonenumber').value,
        homepage: formElement.querySelector('#homepage').value,
        birthdate: formElement.querySelector('#birthdate').value,
        commtype: formElement.querySelector('#commtype [checked]').value,
        usertype: formElement.querySelector('#usertype').value
    }
    fetch('//localhost:3000/api/users', {
        method: 'POST',
        body: JSON.stringify(User),
        headers: {'Content-type': 'application/json'}
    })
        .then(res => res.json())
        .then(data => console.log(data))
    
}