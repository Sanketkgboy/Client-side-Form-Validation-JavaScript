const form = document.getElementById('form')
const username = document.getElementById('username')
const password = document.getElementById('password')
const email = document.getElementById('email')
const password2 = document.getElementById('password2')
const button = document.getElementById('submit-btn')

// Form Submit
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})


function checkInputs() {
    // get the values from the inputs
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim().trim()

    // Username conditions
    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank')
    } else {
        setSuccessFor(username);
    }

    // Email conditions
    if (emailValue === '') {
        console.log('blank')
        console.log(emailValue)
        setErrorFor(email, 'Email cannot be blank')
    } else if(!isEmail(emailValue)) {
        console.log(emailValue)
        setErrorFor(email, 'Email is not valid')
    } else {
        setSuccessFor(email)
    }

    // Password crosscheck
    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank')
    } else {
        setSuccessFor(password);
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Please Enter The Password Again')
    } else if (password2Value !== passwordValue) {
        setErrorFor(password2, 'Passwords Did Not Match')
    }
    else {
        setSuccessFor(password2);
    }

}

// Change colour of button when clicked
button.addEventListener('click', () => {
    button.style.backgroundColor = "#0b9280"
    setTimeout(() => button.style.backgroundColor = "#30e3ca", 200)
})



// Functions are written below this.

// Error Function
function setErrorFor(input, message) {
    const formControl = input.parentElement // .form-control
    const smallText = formControl.querySelector('small')
    
    // Add error message inside small
    smallText.innerText = message

    // Add error class
    formControl.className = 'form-control error' 
}

// Success Function
function setSuccessFor(input) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

// Valid Email Verification Using RegEx
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}




