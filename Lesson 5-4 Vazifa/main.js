const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue ==='') {
        setErrorFor(username, 'Username cannot be blank');
    }else {
        setSuccessFor(username)
    }

    if (emailValue ==='') {
        setErrorFor(email, 'Enter your Email address');
    }else {
        setSuccessFor(email)
    }
    if (passwordValue ==='') {
        setErrorFor(password, 'Create your password');
    }else {
        setSuccessFor(password)
    }
    if (password2Value ==='') {
        setErrorFor(password2, 'Repeat your password');
    } else if(passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords are not the same')
    }
    else  {
        setSuccessFor(password2)
    }
};

function setErrorFor(input, massage) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    // add error message inside small class
    small.innerText = massage;
    // add error class
    console.log(small);
    formControl.className = 'form-control error'
}

function setSuccessFor (input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}


const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
    social_panel_container.classList.toggle('visible')
});
close_btn.addEventListener('click', () => {
    social_panel_container.classList.toggle('visible')
});