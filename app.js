var billAmount = document.querySelector("#bill-amount");
var checkButton = document.querySelector("#check-button");
var cashGiven = document.querySelector("#cash-given");
var message = document.querySelector("#error-msg");
checkButton.addEventListener("click" , function validateBillAndCashAmount () {
    message.style.display="none";
    if(billAmount>0){
           if(cashGiven ≥ billAmount){
                 var amountToBEReturned= cashGiven.value - billAmount.value ;
                 calculateChange(amountToBEReturned);
           }
           else{
            erroeMessage("Cash given should atleast be equal to bill amount");
           }
    };
    else{
          erroeMessage("Invalid Bill Amount");
    }
});

function calculateChange() {}

function erroeMessage(message) {
    message.style.display="block";
    message.innerText= message
}