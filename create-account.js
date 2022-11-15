function createAccount(pin, amount = 0) {
return {
    checkBalance(inputPin){
        if(inputPin === pin) return `$${amount}` 
        else {
            return "Invalid PIN."
        }
    },
    deposit(inputPin, depositAmt){
        if(inputPin !== pin) return "Invalid PIN.";
        amount += depositAmt;
        return `Succesfully deposited $${depositAmt}. Current balance: $${amount}.`
    },
    withdraw(inputPin, withdrawAmt){
        if(inputPin !== pin) return "Invalid PIN.";
        if((amount - withdrawAmt) < 0) return "Withdrawal amount exceeds account balance. Transaction cancelled."
        amount -= withdrawAmt;
        return `Succesfully withdrew $${withdrawAmt}. Current balance: $${amount}.`
    },
    changePin(inputPin, newPin){
        if(inputPin !== pin) return "Invalid PIN.";
        pin = newPin;
        return "PIN successfully changed!"
    }
}
}

module.exports = { createAccount };
