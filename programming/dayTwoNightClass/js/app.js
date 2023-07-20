/*
    Arrays => containers that hold more than one piece of data

    syntax =>
    var arrName = [
        item1,
        item2,
        item3,
        ...,
        itemN
    ]; ****This is an array literal****
    
    Accessing items in an array =>
    items are zero-indexed. We start counting with zero

    Counting item in an array =>
    arrName.length()

    Adding an item to end to an array =>
    arrName.length

    Adding an item to end of an array =>
    arrName.push(item); => adds item to the end 
    Removing an item from an array =>
    arrName.pop() => remove an item from the end of an array
    arrName.shift(); => removes an item from the beginning of an array

    Slice => allows you to return two values =>
    arrName.slice(7, 9);

*/

var arr1 = [1, 2, 3, 8];
console.log(arr1);
console.log(arr1.length) //4

var coders = [
    'Gwen', 'Brison', 'Angela', 'Rhiannon', 'Sam', 'Kevin', 'Carlos'
];

console.log(coders); //array of coders

console.log(coders[0]); //Gwen
console.log(coders[3]); //Rhiannon

coders.push('Allee');

console.log(coders);

coders.unshift('Sandra', 'Chloe', 'Ron', 'Kevin Brown', 'Molly', 'Lori', 'Basel', 'Drew', 'Ethan', 'Aquita');

console.log(coders);

console.log(coders.length);//26
console.log(coders[coders.length - 1]); //Allee

var lastCoder = coders.pop();
console.log(lastCoder);
console.log(coders); //array of coders except Allee

console.clear();
var anotherCoder = coders.shift();
console.log(coders); //array of coders except Sandra
console.log(anotherCoder); //Sandra

var anotherArr = (coders.slice(7, 9));
console.log(anotherArr);
console.log(coders);



coders[16] = 'Kevin Barone'; //how to edit
console.log(coders);

console.log(coders.indexOf('Kevin Barone')); //16

//can also add a coder to the end like so
coders[24] = 'Lauren';
console.log(coders);

console.clear();

var sampleArr = [1, 'I', undefined, true, 'like', 12, -14, 'to', null]; //Arrays can have multiple data types, maybe not a great practice or may not need this but it's good to know

//Multi-Dimensional Arrays
var sampleArr2 = [
    ['Lauren', 29],
    ['Gwen', 35],
    ['Brison', 33],
    ['Steven', 35],
    ['Angela', 35],
    ['Rhiannon', 24],
    ['Sam', 38],
    ['Kevin', 19],
    ['Carlos', 31],
    ['Abedola', 26],
    ['Titi', 26],
    ['Precious', 20],
    ['Jayson', 29],
    ['Devonte', 23],
    ['Allee', 26],
];

console.log(sampleArr2);
var alleesAge =sampleArr2[sampleArr2.length - 1][1];
console.log(alleesAge); //26

//Create a hero generator. The hero generator will randomly return an adjective, hero and super power.
//Ex: The Amazing Tigerwoman can lift heavy objects with the mind.

//PseudoCode

/*
    Variables
        adjectives
        heroes
        superpowers

        adj
        hero
        superpower

        message
        idx

    Do Stuff
        SET adjectives TO arr
        SET heroes TO arr
        SET superpowers TO arr
        SET idx TO a num

        SET adj TO adjectives[idx]
        SET hero TO heroes[idx]
        SET superpower to superpowers[idx]

        SET message TO 'The ' adj hero ' can ' superpower.
        RETURN message.
*/

var adjectives = ['Amazing', 'Mighty', 'Brave', 'Cantankerous', 'Wondrous'];
var heroes = ['Butterfly Gal', 'Radioactive Steve', 'Lady Bug', 'Dragonman', 'Milk Man', 'Goofy'];
var superpowers = [
    'blow down buildings with super breath.',
    'crawl into tiny spaces',
    'shapeshift',
    'read the minds of ghosts',
    'huff and puff and blow your house down'
];

var idx;
idx = Math.floor(Math.random());
console.log(idx);
//Math.random() returns a random decimal number between 0 - 1 but never 1
//Math.floor() rounds down to the next whole number

var adjidx = Math.floor(Math.random() * adjectives.length);
var heroidx = Math.floor(Math.random() * heroes.length);
var superpoweridx = Math.floor(Math.random() * superpowers.length);

var adj = adjectives[adjidx];
var hero = heroes[heroidx];
var superpower = superpowers[superpoweridx];

var message = 'The ' + adj + ' ' + hero + ' can ' + superpower + '.';
console.log(message);


/*
    Decisions 

    Boolean - James Bool

    Boolean returns true or false

    3 + 4 => 7 (evaluates to 7)
    3 + 4 = 7 (true)

*/

var t = true;
var f = false;

/*
    Boolean Operators

    == is equal to
    === is strictly equal to
    < is less than
    > is greater than
    <= is less than or equal to
    >= is greater than or equal to
    != is not equal to

*/

console.clear();
console.log(3 + 4); // false or 7
console.log(3 + 4 == 7); // true

console.log(5 > 2); //true
console.log(2 > 5); //false
console.log(5 != 2); //true

console.clear();

console.log("7" == "7");
console.log("7" == 7);
console.log("7" === "7");
console.log("7" === 7); 
console.log("7" == "7");
console.log("3 + 4" == 3 + 4);

/*
    Logical Operators
    && and
    || or
    ! not (called the "bang" operator)
*/

console.log(t && t); //true
console.log(f && f); //false; && operator is what we call a conjunction
console.log(t || f); //true
console.log(f || f); //false
console.log(t && f); //false
console.log(!t); //false

console.clear();

/*
    If statements

    syntax =>

    if(condition) {
        do stuff
    }
*/

var num2;

num2 = 2;

if (num2 > 5) {
    console.log('I am greater than 5')
};

if(t) {
    console.log('I am greater than 5')
};

/*
If else Statement

syntax =>
if(condition) {
    do stuff
} else {
    do different stuff
}
*/

// if(num2 >= 5) {
//     console.log('I am greater than 5')
// } else if {
//     console.log('I am less than 5')
// };

/*
    Else if Statement

    Syntax =>
    if(condition) {
    do stuff
    } else if {
        do different stuff
    } else {
        do something completely different
    }
*/

// Test to see if a number is odd or even.

var num3 = 17;

if(num3 === 0) {
    console.log('number is 0.')
} else if (num3 % 2 !== 0) {
    console.log('num is odd')
} else {
    console.log('num is even')
};

if(typeof num3 == "number") {
    if(num3 ===0 ) {
        console.log('num is 0')
    } else if(num3 % 2 === 1) {

    }

} else {
    console.log("not a number")
};

//Test if num is positive or negative

var num4 = 5;

if(typeof num4 == 'number') {
    if(num4 === 0) {
        console.log('num is 0')
    } else if(num4 > 0) {
        console.log('num is positive')
    } else {
        console.log('num is negative')
    }
} else {
    console.log('Not a number')
}
