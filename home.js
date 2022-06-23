class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement; 
        this.clear();
    }



    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined; 
    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number){
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation){
        if (this.currentOperand === '' ) return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation; 
        this.previousOperand = this.currentOperand
        this.currentOperand = '';
    }

    compute(){
        let computation; 
        const prev = parseFloat(this.previousOperand); 
        const current = parseFloat(this.currentOperand);
        switch (this.operation) {
            case '+': 
                computation = prev + current
                break
            case '×': 
                computation = prev * current; 
                break
            case '-':
                computation = prev - current;
                break
            case '÷':
                computation = prev / current; 
                break
            case 'Tan':
                var rad = prev * Math.PI/180;
                computation = Math.tan(rad);
                computation = computation.toFixed(10);
                break;
            case 'Cos':
                var rad = prev * Math.PI/180;
                computation = Math.cos(rad);
                computation = computation.toFixed(10);
                break;
            case 'Sin':
                var rad = prev * Math.PI/180;
                computation = Math.sin(rad);
                computation = computation.toFixed(10);
                break;
            case '%':
                computation = prev / 100;
                break;
            case '^':
                computation = Math.pow(prev, current);
                break;
            default: 
                return
        }

        let quoteOne = "It is during our darkest moments that we must focus to see the light - Aristotle";
        let quoteTwo = "A tragedy of mathematics is a beautiful conjecture ruined by an ugly fact - Plato";
        let quoteThree = "When nothing goes right, go left - Martha Cecilia";
        let quoteFour = "Don't worry if plan A fails, you still have 25 more letter in the Alphabet - Clair Cook";
        let quoteFive = "I fear the day when people post memes on the internet with quotes I've never said. - Albert Einstein";
        let quoteSix = "Remember, today is the tommorow you worried about yesterday - Dale Carnegie";
        let quoteSeven = "Better to remain silent and be thought a fool than to speak out and remove all doubt - Abraham Lincoln";
        let quoteEight = "People say nothing is impossible, but some people do nothing everyday";
        let quoteNine = "Don't worry about the world comming to an end today, it is already tommorow in Australia - Charles M. Schulz";
        let quoteTen = "If you can't explain it simply, you don't understand it well enough - Albert Einstein";
        let quoteEleven = "The greatest glory in living lies not in never falling, but in rising every time we fall - Nelson Mandela";
        let quoteTwelve = "The way to get started is to quit talking and begin doing - Walt Disney";
        let quoteThirteen = "If life were predictable it would cease to be life, and be without flavor - Eleanor Roosevelt";
        let quoteFourteen = "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success - James Cameron";
        let quoteFiveteen = "Don't judge each day by the harvest you reap but by the seeds that you plant - Robert Stevenson";
        let quoteSixteen = "The future belongs to those who believe in the beauty of their dreams - Eleanor Roosevelt";
        let quoteSeventeen = "Mathematics is the art of giving the same name to different things - Henry Ponicare";
        let quoteEighteen = "Logic will get you from A to B. Imagination will take you everywhere - Albert Einstein";
        let quoteNineteen = "Insanity: Doing the same thing over and over again and expecting different results - Albert Einstein";
        let quoteTwenty = "The supreme art of war is to subdue the enemy without fighting - Sun Tzu";
        let quoteTwentyOne = "The only true wisdom is in knowing you know nothing - Socrates";
        let quoteTwentyTwo = "Strong minds discuss ideas, average minds discuss events, weak minds discuss people - Socrates";
        let quoteTwentyThree = "Know thyself - Socrates";
        let quoteTwentyFour = "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom - Issac Asimov";
        let quoteTwentyFive = "Never memorize something that you can look up - Albert Einstein";
        let quoteTwentySix = "If you want to find the secrets of the universe, think in terms of energy, frequency and vibration - Nikola Tesla";
        let quoteTwentySeven = "I don't care that they stole my idea . . I care that they don't have any of their own - Nikola Tesla";
        let quoteTwentyEight = "Of all things, I liked books best - Nikola Tesla";
        let quoteTwentyNine = "The present is theirs; the future, for which I really worked, is mine - Nikola Tesla";
        let quoteThirty = "Who wishes to fight must first count the cost - Sun Tzu";
        let quoteThirtyOne = "In the midst of chaos, there is also opportunity - Sun Tzu"; 
        let quoteThirtyTwo = "It is better to offer no excuse than a bad one - George Washington"; 
        let quoteThirtyThree = "It is better to be alone than in bad company - George Washington"; 
        let quoteThirtyFour = "Any sufficiently advanced technology is indistinguishable from magic - Arthur Clark"; 
        let quoteThirtyFive = "I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it - Bill Gates";
        let quoteThirtySix = "If you can't make it good, at least make it look good - Bill Gates";
        let quoteThirtySeven = "Success is a lousy teacher. It seduces smart people into thinking they can't lose - Bill Gates";
        let quoteThirtyEight = "When something is important enough, you do it even if the odds are not in your favour - Elon Musk"; 
        let quoteThirtyNine = "You get paid in direct proportion to the difficulty of problems you solve - Elon Musk";
        let quoteFourty = "Constantly seek criticism. A well thought out critique of whatever you’re doing is as valuable as gold - Elon Musk";
        let quoteFourtyOne = "It is possible for ordinary people to choose to be extraordinary - Elon Musk";
        let quoteFourtyTwo = "Innovation distinguishes between a leader and a follower - Steve Jobs";
        let quoteFourtyThree = "Don’t let the noise of others’ opinions drown out your own inner voice - Steve Jobs";
        let quoteFourtyFour = "You only fail when you stop trying - Unknown";
        let quoteFourtyFive = "A question that sometimes drives me hazy: am I or are the others crazy? - Albert Einstein"; 
        let quoteFourtySix = "Have no fear of perfection - you'll never reach it - Salvador Dali";
        let quoteFourtySeven = "Success is not final, failure is not fatal: it is the courage to continue that counts - Winston Churchhill";
        let quoteFourtyEight = 'Try not to become a man of success. Rather become a man of value - Albert Einstein';
        let quoteFourtyNine = "It is better to fail in originality than to succeed in imitation - Herman Melville";
        let quoteFifty = "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe - Albert Einstein";
        let ten = "Great achievement is usually born of great sacrifice, and is never the result of selfishness - Napoleon Hill";
        let nine = "Some are born great, some achieve greatness, and some have greatness thrust upon them - William Shakespeare";
        let eight = "Nothing great in the world has ever been accomplished without passion - Georg Hegel";
        let seven = "The greater the obstacle, the more glory in overcoming it - Moliere";
        let six = "Small opportunities are often the beginning of great enterprises - Demosthenes";
        let five = "Act first, explain later - Dan Brown";
        let four = "Yesterday is history, Tomorrow is a mystery, but today is a gift. That is why it is called the present - Master Oogway";
        let three = "How did it get so late so soon? - Dr. Seuss";
        let two = "There are no accidents - Master Oogway";
        let one = "There is always something more to learn. Even for a master - Master Oogway";

        var min = Math.ceil(-10);
        var max = Math.floor(50);
        var quoteNum = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(quoteNum);
        
         if (quoteNum == 50){
            this.currentOperand = quoteFifty; 
        } else if (quoteNum == 49){
            this.currentOperand = quoteFourtyNine; 
        } else if (quoteNum == 48){
            this.currentOperand = quoteFourtyEight; 
        } else if (quoteNum == 47){
            this.currentOperand = quoteFourtySeven; 
        } else if (quoteNum == 46){
            this.currentOperand = quoteFourtySix; 
        } else if (quoteNum == 45){
            this.currentOperand = quoteFourtyFive;
        } else if (quoteNum == 44){
            this.currentOperand = quoteFourtyFour; 
        } else if (quoteNum == 43){
            this.currentOperand = quoteFourtyThree; 
        } else if (quoteNum == 42){
            this.currentOperand = quoteFourtyTwo; 
        } else if (quoteNum == 41){
            this.currentOperand = quoteFourtyOne; 
        } else if (quoteNum == 40){
            this.currentOperand = quoteFourty; 
        } else if (quoteNum == 39){
            this.currentOperand = quoteThirtyNine; 
        } else if (quoteNum == 38){
            this.currentOperand = quoteThirtyEight; 
        } else if (quoteNum == 37){
            this.currentOperand = quoteThirtySeven; 
        } else if (quoteNum == 36){
            this.currentOperand = quoteThirtySix; 
        } else if (quoteNum == 35){
            this.currentOperand = quoteThirtyFive; 
        } else if (quoteNum == 34){
            this.currentOperand = quoteThirtyFour; 
        } else if (quoteNum == 33){
            this.currentOperand = quoteThirtyThree; 
        } else if (quoteNum == 32){
            this.currentOperand = quoteThirtyTwo; 
        } else if (quoteNum == 31){
            this.currentOperand = quoteThirtyOne; 
        } else if (quoteNum == 30){
            this.currentOperand = quoteThirty; 
        } else if (quoteNum == 29){
            this.currentOperand = quoteTwentyNine; 
        } else if (quoteNum == 28){
            this.currentOperand = quoteTwentyEight; 
        } else if (quoteNum == 27){
            this.currentOperand = quoteTwentySeven; 
        } else if (quoteNum == 26){
            this.currentOperand = quoteTwentySix; 
        } else if (quoteNum == 25) {
            this.currentOperand = quoteTwentyFive; 
        } else if (quoteNum == 24){
            this.currentOperand = quoteTwentyFour; 
        } else if (quoteNum == 23){
            this.currentOperand = quoteTwentyThree; 
        } else if (quoteNum == 22){
            this.currentOperand = quoteTwentyTwo; 
        } else if (quoteNum == 21){
            this.currentOperand = quoteTwentyOne; 
        } else if (quoteNum == 20){
            this.currentOperand = quoteTwenty; 
        } else if (quoteNum == 19){
            this.currentOperand = quoteNineteen; 
        } else if (quoteNum == 18){
            this.currentOperand = quoteEighteen; 
        } else if (quoteNum == 17){
            this.currentOperand = quoteSeventeen; 
        } else if (quoteNum == 16){
            this.currentOperand = quoteSixteen; 
        } else if (quoteNum == 15){
            this.currentOperand = quoteFiveteen; 
        } else if (quoteNum == 14){
            this.currentOperand = quoteFourteen; 
        } else if (quoteNum == 13){
            this.currentOperand = quoteThirteen; 
        } else if (quoteNum == 12){
            this.currentOperand = quoteTwelve; 
        } else if (quoteNum == 11){
            this.currentOperand = quoteEleven; 
        } else if (quoteNum == 10){
            this.currentOperand = quoteTen; 
        } else if (quoteNum == 9){
            this.currentOperand = quoteNine; 
        } else if (quoteNum == 8){
            this.currentOperand = quoteEight; 
        } else if (quoteNum == 7){
            this.currentOperand = quoteSeven; 
        } else if (quoteNum == 6){
            this.currentOperand = quoteSix; 
        } else if (quoteNum == 5){
            this.currentOperand = quoteFive; 
        } else if (quoteNum == 4){
            this.currentOperand = quoteFour; 
        } else if (quoteNum == 3){
            this.currentOperand = quoteThree; 
        } else if (quoteNum == 2){
            this.currentOperand = quoteTwo; 
        } else if (quoteNum == 1){
            this.currentOperand = quoteOne; 
        } else if (quoteNum == 0) {
            this.currentOperand = quoteTwentyFive;
        } else if (quoteNum == -1){
            this.currentOperand = ten; 
        } else if (quoteNum == -2){
            this.currentOperand = nine; 
        } else if (quoteNum == -3){
            this.currentOperand = eight; 
        } else if (quoteNum == -4){
            this.currentOperand = seven; 
        } else if (quoteNum == -5){
            this.currentOperand = six; 
        } else if (quoteNum == -6){
            this.currentOperand = five; 
        } else if (quoteNum == -7){
            this.currentOperand = four; 
        } else if (quoteNum == -8){
            this.currentOperand = three; 
        } else if (quoteNum == -9){
            this.currentOperand = two; 
        } else{
            this.currentOperand = one; 
        }
        this.operation = undefined
        this.previousOperand = '';
    }

    updateDisplay(){
        if (this.operation != null){
            this.previousOperandTextElement = `${this.previousOperand} ${this.operation}`
        } else {
            this.previousOperandTextElement = '';
        }    
        this.currentOperandTextElement.innerText = this.previousOperandTextElement + " " + this.currentOperand;     
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator (previousOperandTextElement, currentOperandTextElement);


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})

allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})
