/*
    Functions
    A block of code that is stored and executed once it is called or a task that takes a certain number of inputs and returns a single output

    syntax =>
    function functionName(args) {
        DO STUFF
    }
*/

function sumItUp() {
    console.log(5 + 2);
};

sumItUp(); //7

function sumItUpBetter(num1, num2) {
    console.log(a + b);
}

sumItUpBetter(4, 9); //13

function greeting(coder) {
    console.log('Hello')
};

greeting(); //Hello

function greeting(coder) {
    console.log('Hello' + coder + '!');
};

greeting('Carlos'); //Hello Carlos!

var num;
function times5(a) {
    num = a * 5;
    return num;
};

times5(10); //code is being executed and now num is 50 on line 37
console.log('num is ' + num); //50

times5(20);
console.log(num); //100

times5(3); //15

console.clear();

function sayHola(user = 'guest') {
    returnconsole.log('Hello, ' + user)
}
sayHola();//Hello 
sayHola('Kevin');

//write a function for the pythagorean theorem
function hypot(a = 3, b = 4) {
    console.log(a, b)
    var cSquared = a ** 2 + b ** 2;
    var c = cSquared ** (1 / 2);
    return console.log(c);
}

hypot (); //5
hypot (6, 8); //10
hypot (4); //take a as 4 and keep b as 4 bc of its default
hypot (a, 5);
console.clear();

/*
    Scope =>
    Local vs Global
*/

var aNum = 6;

function showNum() {
    var num = 7;
    console.log(num);
}

console.log(aNum);
showNum();

function sayYes() {
    var yes = 'yes';
    return console.log(yes);
}

sayYes();
// console.log(yes);

/*
    Variables
    temp
    cel
    result

    FUNCTION faToCel receive temp
    SET cel to (temp - 32) * 5 / 9;
    SET result to cel
    RETURN result

    Variables
    temp
    fah
    result

    FUNCTION celToFah receive a temp
    SET fah to (temp * 5 / 9) + 32;
    SET result TO fah
    RETURN result

    Variables
    temp
    unit = ('c' or 'f')
    result

    FUNCTION convert receives temp and unit
        If unit == 'c' THEN SET result to (temp * 9 / 5) + 32
        ELSE IF unit == "f" THEN SET result to (temp - 32) * 5 / 9;
        ELSE SET result to 'error'
        RETURN result
*/

function fahToCel(temp) {
    if(typeof(temp) == 'number') {

        var cel = (temp - 32) * 5 / 9;
        var result = cel;
        return console.log(result);
    }else {
        console.log('error');
    }
}

fahToCel(32); //0

function celToFah(temp) {
    if(typeof(temp) == 'number') {

        var fah = (temp * 9 / 5) + 32;
        var result = fah;
        return console.log(result);
    }else {
        console.log('error');
    }

    celToFah(100); //212

    function convert(temp = 32, unit = 'f') {
        var result;
        if(typeof(temp) == 'number') {
            if(unit.toLowerCase() == 'c') {
                result = (temp * 9 / 5) + 32;
            } else if (unit.toLowerCase() =='f') {
                result = (temp - 32) * 5 / 9;
            } else {
                result = 'error'
            }
        return console.log(result);

        } else {
            console.log('not a valid temp')
        }
    }

    convert();
    convert(100, 'c');

    /*
        Write a function that will count the characters in a string
        Take an array of strings and return the number of characters along with each string
        Ex: "'hello has 5 characters"
    */

        var characters = [
            Hello World, Hola Mundo, Bonjour le Monde, Salve Mundo
        ]
        