var billAmount = document.querySelector("#bill-amount");
var checkButton = document.querySelector("#check-button");
var cashGiven = document.querySelector("#cash-given");
var message = document.querySelector("#error-msg");

checkButton.addEventListener("click", validateBillAndCashAmount);

function validateBillAndCashAmount() {
    hideMessage ();
    console.log(billAmount.value);
    if (billAmount > 0) {
        if (cashGiven >= billAmount) {
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

 function calculateChange() {

 }

function hideMessage() {
    message.style.display = "none";
}

function errorMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}