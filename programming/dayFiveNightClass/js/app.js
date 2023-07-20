/*
    Objects

    Everything in js is an object

    A container that holds data as a key-value pair

    syntax =>
    var objName = {
        key: value,
        property: value
    }
*/

var me = {
    myName: {
        firstName: 'Kevin',
        lastName: 'Barone',
        nickname: 'Kev',
    },
    age: 19,
    family: {
        father: 'Leandro',
        mother: 'Cloudia',
        siblings: {
            sibling1: 'Agustin',
            sibling2: 'Camila',
            sibling3: 'Micaela',
        }
    },
        occupation: 'Chick-Fil-Freaking-A',
        birthPlace: 'Jackson, MS',
        hobbies: ['wake-up', 'go to work', 'I work all day', 'go home', 'take a shower', 'go to sleep'],    
        isAwesome: true,
        flaws: 'acting stupid when bored or doing nothing',
        greeting: function() {
        console.log('My name is ' + this.myName.firstName);
    }
}

/*
    Accessing the Data

    2 ways of accessing data from an object

    1.) dot notation => obj.property

    2.) bracket notation => obj['prop']

    **Objects are not 0 indexed
*/

console.log(me);
console.log(me.age);
console.log(me.myName);
console.log(me.myName.nickname);
console.log(me['age']);
console.log(me['hobbies']);
console.log(me.hobbies[5]);

console.log(me.greeting); //My name is Kevin.

var arr = [
    'hello',
    'goodbye',
    'yes',
    'no',
];

console.log(arr);

console.clear();

/*
    Prototypes

    sytax =>
    class Object {
        constructor() {
            stuff
        }
    }

    method() {
        do stuff
    }

    method() {
        do stuff
    }
*/

class Person {
    constructor() {
        name: this.name
        hairColor: this.hairColor
        eyeColor: this.eyeColor
        age: this.age
    }
}

greeting() {
    console.log('My name is ' + this.name);
}
sayAge() {
    console.log('I am ' + this.age + ' years old.')
}
me.age = '20';
console.log(age.me);

console.log(Person);
var kev = new Person();
console.log(kev);

kev.name = 'Kevin';
kev.hairColor = 'Brown';
kev.eyeColor = 'Brown'
kev.age = 19
console.log(kev);
kev.greeting();

var msGwen = new Person();
msGwen.name = 'Ms. Gwen'
msGwen.hairColor = 'red';
msGwen.eyeColor = 'brown';
msGwen.age = 'golden'
console.log(msGwen);

//Build an animal prototype that features legs, eyes, fur, name, and console the sound it makes. Pass the prototype to three different animals

var michaelTheHorse = {
    michael.legs = 'None'
    michael.eyes = 'None'
    michael.fur = 'Black'
    michael.name = 'MICHAEL!!!'
}

greeting() [
    console.log('AAAAAHHHHH')
]