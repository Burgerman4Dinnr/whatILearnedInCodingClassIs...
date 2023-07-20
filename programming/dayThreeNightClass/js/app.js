/*
    Repetition
*/

var coders = [
    'Gwen', "Brison", "Angela", "Rhiannon", "Sam", "Kevin", "Carlos", "Rodney", "Jayson", "Titi", "Precious", "Devonte", "Ettamarie"
]

console.log ('Good evening, ' + coders[0]);
console.log ('Good evening, ' + coders[1]);
console.log ('Good evening, ' + coders[2]);
console.log ('Good evening, ' + coders[3]);
console.log ('Good evening, ' + coders[4]);
console.log ('Good evening, ' + coders[5]);
console.log ('Good evening, ' + coders[6]);
console.log ('Good evening, ' + coders[7]);
console.log ('Good evening, ' + coders[8]);

console.clear();

/*
    Looping
    for, while, forEach

    for loop
    Syntax =>
    for(initialization; condition; iteration) {
        DO STUFF
    }
*/

for(var i = 0; i < coders.length; i++) {
    var message = 'Good evening, ' + coders[i]
    console.log(message);
}

//iterator is an increment up by one and a decrement is down by one

var a = 1;
console.log(a);

a = ++a;
console.log(a); //2

a = ++a;
console.log(a); //3

a = --a;
console.log(a); //2

//count every other number
for (var count = 1; count <= 10; count+=2) {
    console.log(count);
};

//augmented addition => count = count + 2;

console.clear();

var b = 1;

b = b + 5; //6
// b++6; //3 and 74 are teh same thing

var creditCardsonFile = 700;
// creditCardsOnFile = CreditCardsOnFile - 300;//this leaves wayyy too much room for error

// creditCardsOnFile -=300;///augmented subtraction

/*
    While Loops

    syntax =>
    while(condition) {
        do stuff
        stop doing stuff
    }
 */

    var c = 1;
    
    while(c < 10) {
        console.log(c);
        c++;
    }


/*
    forEach Loop => used specifically for arrays

    syntax =>
    arrName.forEach(item => do stuff) {
        do stuff
    }
*/

coders.forEach(coder => console.log('Goodbye' + coder));
var i = 0;
while(i < coders.length) {
    console.log('Hello, ' + coders[i]);
    i++;
}

//Try on your own: Create an array of 10 numbers(any numbers). Loop the array and console whether the number is odd or even

var number = [
    4, 1234, 452346, 2346, 234234, 978654, 43567, 3, 1234567890, 0987654321
]

number.forEach(num => {
    if(num === 0) {
        console.log('num is 0');
    } else if(num % 2 === 1) {
        console.log('num is odd');
    } else {
        console.log('num is even');
    }
})