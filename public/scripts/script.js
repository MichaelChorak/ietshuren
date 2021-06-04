var loginBtn = document.querySelector('#loginBtn');
var loginContainer = document.querySelector('#loginFormContainer');
var loginCloseBtn = document.querySelector('.close');
var topic = document.querySelector('.topic');

function displayLoginForm(){
    loginContainer.classList.add('showForm');
}

function removeLoginForm(){
    loginContainer.classList.remove('showForm');
}

loginBtn.addEventListener('click', displayLoginForm);
loginCloseBtn.addEventListener('click', removeLoginForm);


//place the populair topics in here
var topics = [
    'Autos',
    'Fietsen',
    'Boten',
    'Extra item',
    'Electronica',
    'Products example',
    'Vakantie huizen',
    'Playstation',
    'Opblaaspoppen'
];

//create an container
var list = document.createElement('div');

//create a list item for each item
//and append it to the list.
topics.forEach(function (topic) {
    var li = document.createElement('div');
    li.textContent = topic;
    list.appendChild(li);
});

topic.appendChild(list);

