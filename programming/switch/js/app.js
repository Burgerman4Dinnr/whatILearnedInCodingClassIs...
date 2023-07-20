// switch statements
// they are statements that evaluate an expression
// they match the expression's value against a series of case clauses

/*
    syntax =>
    const exp = 'Atlanta':
    switch(exp) {
        case 'Chicago':
            console.log('Trip to Chicago');
            break;
        case 'Miami':
            console.log('Trip to Miami');
            break;
        case 'Atlanta':
            console.log('Trip to Atlanta');
            break;
        default:
            console.log('You aren't going anywhere');
            break;
    }
*/

const exp = 'Atlanta';//fah
    switch(exp) {
        case 'Chicago'://case 'fah':
            console.log('Trip to Chicago');
            break;
        case 'Miami':
            console.log('Trip to Miami');
            break;
        case 'Atlanta':
            console.log('Trip to Atlanta');
            break;
        default:
            console.log('You aren\'t going anywhere');
            break;
    }