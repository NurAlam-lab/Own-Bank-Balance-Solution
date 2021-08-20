// this section used for banking-site.html page
// applied even handler on deposit button
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldText = inputField.value;
    const inputFieldAmount = parseFloat(inputFieldText);
    inputField.value = '';
    return inputFieldAmount;
}


function updateTotalField(totalFieldId, amount) {
    const previousTotal = document.getElementById(totalFieldId);
    const previousTotalText = previousTotal.innerText;
    const previousTotalAmount = parseFloat(previousTotalText);

    const totalBalance = previousTotalAmount + amount;
    previousTotal.innerText = totalBalance;
}


function getTotalMainBalance() {
    const mainBalance = document.getElementById('total-balance');
    const mainBalanceText = mainBalance.innerText;
    const totalBalance = parseFloat(mainBalanceText);
    return totalBalance;
}

function updateBalance(amount, isAdd) {
    const mainBalance = document.getElementById('total-balance');

    const totalMainBalance = getTotalMainBalance();

    if (isAdd == true) {
        const totalBalance = totalMainBalance + amount;
        mainBalance.innerText = totalBalance;
    }
    else {
        const totalBalance = totalMainBalance - amount;
        mainBalance.innerText = totalBalance;
    }


}



document.getElementById('diposit-button').addEventListener('click', function () {
    // for current deposit section
    const depositAmount = getInputValue('for-deposit');
    if (depositAmount > 0) {
        updateTotalField('current-deposit', depositAmount);


        // for main blance section
        updateBalance(depositAmount, true);
    }
})


// applied even handler on Withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawAmount = getInputValue('for-withdraw');
    const totalAccountBalance = getTotalMainBalance();
    if (withdrawAmount > 0 && withdrawAmount < totalAccountBalance) {
        updateTotalField('current-withdraw', withdrawAmount);

        // for main blance section
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > totalAccountBalance) {
        console.log("unsaficient balance");
    }
})