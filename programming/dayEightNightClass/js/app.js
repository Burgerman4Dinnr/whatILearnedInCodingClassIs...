/*
    ES6

    var

    let
    const

    functions

    -Declarative Functions-
    function functionName() {
        do stuff
    }

    -Arrow Functions- 
    const funcName =(args)=> {
        do stuff
    }

    ternaries

    if(condition) {
        pdo this
    } else {
        do that
    }

    ES6 =>
    condition ? do stuff : do something else

    Spread Operator
    item = [1, 2, 3]
    arr = [...item] //1, 2, 3

    String Template Literal

    var age = 19

    var message = `I am ${age} years old.` => I am 19 years old.
*/

// const foo =()=> {
//     let count = 6;
//     console.log(count);
// }
// foo();//6

// let baz = 9;

// if(baz = 8) {
//     console.log(baz);
// } else {
//     console.log('This is not right')
// }

// baz == 9 ? console.log(baz) : null;

const submitBtn = document.getElementById('submitBtn');
const memberCards = document.getElementById('memberCards');
let members = [];

const subscribeUser =()=> {
    let data = {};
    const fName = document.getElementById('fName').value;
    const lName = document.getElementById('lName').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const year = dob.slice(0, 4);
    const month = dob.slice(5, 7);
    const date = dob.slice(8);
    const planType = document.querySelector('input[name=planType]:checked').value;
    data.firstName = fName;
    data.lastName = lName;
    data.email = email;
    data.dob = dob;
    date.month = month;
    data.year = year;
    data.date = date;
    data.planType = planType;

    addUser(data);
}

const addUser=(obj)=> {
    members = [...members, obj];
    buildCard(members)
}

const buildCard=(arr)=> {
    let card;
    arr.forEach(item)=> {
        card = `
        <div class="cl-md-3">
        <div class="card member-card">
            <img src="https://via.placeholder.com/50x50" alt="">
            <div class="card-body">
                <p id="lastName">$[item.lastName</p>
                <p id="firstName">$[item.firstName</p>
                <p id="plan">$[item.planType</p>
            </div>
        </div>
    </div>`
    }
    memberCards.innerHTML += card;
}
const alertUser =()=> alert('Please agree to the terms and conditions');

submitBtn.addEventListener('click'), (e)=> {
    e.preventDefault();
    const terms = document.getElementById('terms');
    terms.checked ? subscribeUser() : alertUser();
}