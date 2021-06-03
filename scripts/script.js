var loginBtn = document.querySelector('#loginBtn');
var loginContainer = document.querySelector('#loginFormContainer');
var loginCloseBtn = document.querySelector('.close');

function displayLoginForm(){
    loginContainer.classList.add('showForm');
}

function removeLoginForm(){
    loginContainer.classList.remove('showForm');
}

loginBtn.addEventListener('click', displayLoginForm);
loginCloseBtn.addEventListener('click', removeLoginForm);