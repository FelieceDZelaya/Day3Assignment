//Credit Card Validator

function validDigitOccurrences(aCreditCard){

    for(var i = 0; i < aCreditCard.length; i++) {

        var digitCount = aCreditCard.split(aCreditCard[i]).length - 1;

        if((digitCount===16)){
            return false;
        }else{
            return true;
        }
    }
}

function validFinalDigit(aCreditCard) {

    const finalDigit = aCreditCard.substr(aCreditCard.length-1,aCreditCard.length);

    if((finalDigit % 2)===0){
        return true;
    }else{
        return false;
    }

}

function validSum(aCreditCard) {

    const ccNumArray = aCreditCard.split('').map(Number); 

    const digitsSum = ccNumArray.reduce((accum,digit) => accum + digit,0);

    if(digitsSum > 16){
        return true;
    }else{
        return false;
    }
}

function numbersOnly(aCreditCard) { 

    const nonDigitRegex = new RegExp('[^0-9]', 'g');

    if(!aCreditCard.match(nonDigitRegex)){
        return true;
    }else{
        return false; 
    }

}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

rl.question('Enter you credit card number: ', (ccNumber) => {

    const ccNum = ccNumber.replace(new RegExp('-', 'g'),'');

    const ccNumLength = ccNum.length;

    if(ccNumLength===16){

        if(numbersOnly(ccNum)){ 

            if(validDigitOccurrences(ccNum)){

                if(validFinalDigit(ccNum)){

                    if(validSum(ccNum)){

                        console.log(`${ccNumber} is a valid credit card number!`); 

                    }else{
                        console.log(`The sum of all digits must be > 16`);
                    }

                }else{
                    console.log(`The final digit must be even`);
                }

            }else{
                console.log(`Must contain at least 2 different digits`);
            }

        }else{
            console.log(`Must contain only numbers`);
        }

    }else{
        console.log(`Incorrect length ${ccNumLength}`);
    }

    rl.close();

});