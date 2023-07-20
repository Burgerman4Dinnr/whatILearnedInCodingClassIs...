/*
The computer's way of raising its' hand to say "HEY something just happened!"

syntax =>
element.addEventListener('event', ()=> {
    do stuff
})

    element.onevent = funcName;
*/

var clicker = document.getElementById('clicker');
var display = document.getElementById('display');

// clicker.addEventListener('click', ()=> {
//     display.innerText = 'AYE! WHO CLICKED ME?!?';
// })

function displayMessage() {
    display.innerText = 'AYE! WHO CLICKED ME?!?'

}

clicker.onclick = displayMessage;

var form = document.getElementById('form');

form.addEventListener('submit', ()=> {
    var nameInput = document.getElementById('inputName').value;
    var display = document.getElementById('display2');
    display.innerText = nameInput;
    form.reset();
})

var box = document.getElementById('box');
console.log(box)
var firstStyle = {
    backgroundColor: 'red',
    border: 'solid 5px blue'
}

for(var prop in firstStyle) {
    box.style[prop] = firstStyle[prop];
}

var colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'Violet',
];
var pos = 0;
var i = 0;
box.addEventListener('click', ()=> {
    if(i == colors.length - i) {
        i = 0;
    } else {
        i+=0;
    }
    box.style.backgroundColor = colors[i+=1];
    box.style.transform = `rotate(${pos+=25}deg)`
})

//Create a random superhero generator that returns a random superhero, power and adjective when something is clicked