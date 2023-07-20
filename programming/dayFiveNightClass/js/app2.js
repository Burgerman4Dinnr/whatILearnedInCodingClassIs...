//Build an animal prototype that features legs, eyes, fur, name, and console the sound it makes. Pass the prototype to three different animals

// var m {
//     var michael = horse
//     michael.legs = 'None',
//     michael.eyes = 'None',
//     michael.fur = 'Black',
//     michael.name = 'MICHAEL!!!',
// }

// greeting() [
//     console.log('AAAAAHHHHH')
// ]

class Animal {
    constructor() {
        animalName : this.animalName
        legs : this.legs
        eyes : this.eyes
        fur : this.fur
        sound : this.sound
    }

    makeASound() {
        console.log('The ' + this.animalName + ' says ' + this.sound);
    }
}

var monkey = new Animal();
monkey.animalName = 'monkey';
console.log(monkey);