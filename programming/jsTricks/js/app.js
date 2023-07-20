//Spread Operator

/*
    Includes elements of one array within an array literal

    syntax=> 
    let a = [1, 2, 3]'
    let b = ...a;
    console.log(a, b); // a = 1, 2, 3   b = 1, 2, 3
    ...a
    */
    let a = [1, 2, 3];
    let b = [0, ...a, 4];
    console.log(a, b);

    let c = 'hi, my name is Kevin.'
    let d = [...c];
    console.log(d);

    let arr = [
        'hello',
        'world',
        'what\'s',
        'up'
    ];
    console.log(arr);
    console.log(...arr);

    //Merging Arrays
    let arr3 = [8, 9, 10];
    let arr2 = [5, 6, 7, ...arr3];
    console.log(arr2);

    let arr4 = [5, 6, 7, ...arr2]
    console.log(arr4);

    console.log(arr.concat(arr2));

    if(arr2.includes(5)) {
        console.log('no five')
    }

    let str = 'oo de lolly';
    console.log(...str);
    console.clear();
    let newArr = [...arr4];
    console.log(newArr);
    newArr.push(...arr2);
    console.log(newArr);

    // .map()

    /*
        A method that passes each element of the array on which is invoked to the function you specify and returns an array containing the values returned by your function.

        EX:
        let a = [1, 2, 3];
        a.map(x => x*x) => [1, 4, 9];

    */

    let otherArr = [
        'Kevin',
        'Carlos',
        'Jayson',
        'Angela',
        'Devonte',
        'Ettamarie',
        'Adebola',
        'Precious',
        'Rhiannon',
        'Titi'

    ];
    console.log(
        otherArr.map(item => `Hello ${item}`)
    );

    let othererArr = otherArr.map(item => console.log(`hello ${item}`));

    let arrBy2 = arr2.map(item => item * 2);
    console.log(arrBy2);

        const add6 =()=> {
            return num + 6;
        }


    const arr6 = (arr2.map(item => add6(item)));

    console.log(arr2);
    console.log(arr6);

    let orig = [1, 3, 3, 4];

    let copy = [...orig];
    console.log(copy);

    copy[0] = 0;
    console.log(copy);

    // .filter()
    /*
        Returns an array containing a subset of the elements of the array on which it is invoked.

        EX:
        let a = [5, 4, 3, 2, 1];
        a.filter(x => x < 3); //[2, 1]
        a.filter((x, i) => i%2 === 0); [4, 2]

    */

    let classAges = [30, 19, 31, 36, 42, 23, 24, 20, 26, 33];

    let agesOver30 = classAges.filter(x => x >= 30); //give you x where x is greater or equal to 30 => [30, 31, 36, 33];
    console.log(agesOver30);

    console.log(classAges.sort());

    console.log(classAges.sort((a, b) => b - a)); //sort nums backward

    let vowels = ['a', 'e', 'i', 'o', 'u'];

    let beginsWithVowel = otherArr.filter(item =>
        {
            for(let i = 0; i < vowels.length; i ++) {
                if(item[0].toLowerCase() == vowels[i]) {
                    return item;
                }
            }
        })
    console.log(beginsWithVowel); //Adebola, Angela, Ettamarie

    //Regular Expressions or Regex

    /*
        A regular expression is an object that describes a textual pattern. The JS RegExp class represents regular expressions, and both String and RegExp methods that use regular expressions to perform powerful pattern matching and search and replace functions on text.

        Can be created with:
        -RegExp() constructor
        -literal syntax (slash(// characters))

        regex literal:
        let pattern = /s$/;

        regex constructor class:
        let pattern = new RegExp("s$");

        /java/

        let string = 'javabean', 'yas very appealing', 'no';

        let pattern = /s$/i;

        ^ $ . * + ? ! : | \ / ( ) { } [ ] 
    */

    var text = 'Oh what a great day it is';

    let regex = /[A-Z]/g; //O
    console.log(text.match(regex));

    let password = 'm1ghtyJ01!';
    let regex2 = /[a-zA-Z0-9]/g;
