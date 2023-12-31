class GameObject {
    constructor() {
        this.startBtn = document.getElementById('startBtn');
        this.roll = document.getElementById('roll')
        this.die1 = document.getElementById('die1')
        this.die2 = document.getElementById('die2')
        this.totalBox = document.getElementById('totalBox')
        this.rollBox = document.querySelector('.dice-wrapper')
        this.winningRoll = document.getElementById('winningRoll')
        this.updateBox = document.getElementById('updateBox')
        this.totalWins = document.getElementById('totalWins')
        this.moneyDisplay = document.getElementById('money')
        this.numbers = ['one', 'two', 'three', 'four', 'five', 'six'];

        this.firstDice = 1;
        this.secondDice = 2;
        this.rolls = 0;
        this.total = 0;
        this.winRoll = null;
        this.win = null;
        this.win = 0;
        this.losses = 0;
        this.money = 550;
        this.buyin = 50;

        this.rollBox.style.display = 'none'
        this.totalBox.style.display = 'none'
        this.roll.style.display = 'none'
        this.die1.style.display = 'none'
        this.die2.style.display = 'none'
    }

    startGame() {
        this.money = this.buyin;
        this.startBtn.style.display = 'none';
        this.rollBox.style.display = 'block';
        this.totalBox.style.display = 'block';
        this.roll.style.display = 'block';
        this.die1.style.display = 'inline-block';
        this.die2.style.display = 'inline-block';
        this.moneyDisplay.innerText = `You Have $${this.money}`;
        this.totalWins.innerText = `You have won ${this.wins} time/s and lost ${this.losses}`;

        //Default Values
        this.firstDice = 1;
        this.secondDice = 1;
        this.rolls = 0;
        this.total = 0;
        this.winRoll = null;
        this.win = null;
    }

    update() {
        this.rollBox.innerText =   `Rolls:' ${this.rolls}`;
        this.totalBox.innerText =  `Total: ${this.total}`;

        let dice = `div class= "${this.numbers[this.firstDice - 1]}">`;

        for(let i = 0; 1 < this.firstDice; i++) {
            dice += `<div></div>`
        }
        dice +=    `</div>`;

        this.die1.innerHTML = dice;

        dice = `<div class="${this.numbers[this.secondDice]}">`

        for(let i = 0; i < this.secondDice; i++) {
            dice += `<div></div>`
        }

        dice += `</div>`;

        this.die2.innerHTML = dice;

        if(this.total == 2 && this.rolls == 1) {
            this.win = false;
        } else if ((this.total == 7 || this.total == 11) && this.rolls == 1){
            this.win = true;
        } else if (this.total == this.winRoll && this.rolls > i) {
            this.win = true;
        } else if (this.total == 7 && this.rolls > 1) {
            this.win = false;
        }

        if(this.win == true) {
            this.updateBox.innerText `Winner Winner Chicken Dinner! You won in ${this.rolls} with a winning number of ${this.total}`;
            this.roll.style.display = 'none';
            this.rollBox.style.display = 'none';
            this.totalBox.style.display = 'none';
            this.winningRoll.style.display = 'none';
            this.startBtn.style.display = 'block'
            this.wins++;
            this.money += this.buyin + this.buyin;
        } else if(this.win == false) {
            this.updateBox.innerTExt = `You Loseee! You rolled ${this.total} on roll ${this.rolls}`;
            this.updateBox.innerText `Winner Winner Chicken Dinner! You won in ${this.rolls} with a winning number of ${this.total}`;
            this.roll.style.display = 'none';
            this.rollBox.style.display = 'none';
            this.totalBox.style.display = 'none';
            this.winningRoll.style.display = 'none';
            this.startBtn.style.display = 'block'
            this.losses++;
        }else {
            this.updateBox.innerText = 'Mama needs a new pair of shoes, keep rolling!'
        }
    }

    rollDice() {
        this.firstDice = Math.ceil(Math.random * 6);
        this.secondDice = Math.ceil(Math.random * 6);
        this.total = this.firstDice + this.secondDice;
        this.rolls++;
        if(this.rolls == 1) {
            this.winRoll = this.total;
        }

        this.update();
    }
}
    
    let newGame = new GameObject();

    newGame.startBtn.addEventListener('click', (e)=> {
        e.preventDefault();
        newGame.startGame();
        newGame.rollDice();
    })

    newGame.roll.addEventListener('click', (e)=> {
        e.preventDefault();
        newGame.rollDice();
    })