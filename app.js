var billAmount = document.querySelector("#bill-amount");
var checkButton = document.querySelector("#check-button");
var cashGiven = document.querySelector("#cash-given");
var message = document.querySelector("#error-msg");
var nextButton = document.querySelector("#nxt-btn");
var noOfNotes = document.querySelectorAll(".no-of-notes");

var availableNotes = [2000 , 500 , 100 , 20 , 10 , 5 , 1]; 

checkButton.addEventListener("click", validateBillAndCashAmount);

function validateBillAndCashAmount() {
    hideMessage ();
    
    if (billAmount.value > 0) {
        hideCashGiven();
        if (cashGiven.value >= billAmount.value) {
            var amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        } else {
            errorMessage("Cash given should atleast be equal to bill amount");
        }
    }
    else {
        errorMessage("Invalid Bill Amount");
    }
};

 function calculateChange(amountToBeReturned) {
       for(let i=0; i < availableNotes.length; i++){
        var numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
       }



 }

function hideMessage() {
    message.style.display = "none";
}

function errorMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}

function hideCashGiven(){
        cashGiven.style.display = "none";
}