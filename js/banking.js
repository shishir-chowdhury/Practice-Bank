/* Handle diposit and withdraw button event with same function */
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    /* Clear the deposit input field */
    inputField.value = '';
    return amountValue;
}
/* Get update deposit and withdraw total with same function */
function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousAmount = parseFloat(totalText);
    const newDepositTotal = previousAmount + amount;
    totalElement.innerText = newDepositTotal;
}
/* Getting Current Balance */
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;

}
/* Update balance with one function */
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    /* 
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText); 
    */
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        const newBalanceTotal = previousBalanceTotal + amount;
        balanceTotal.innerText = newBalanceTotal;
    }
    else {
        const newBalanceTotal = previousBalanceTotal - amount;
        balanceTotal.innerText = newBalanceTotal;
    }

}
/* Handle diposit button event */
document.getElementById('deposit-button').addEventListener('click', function () {
    /* Get the amount deposited */
    /*  
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText); 
    */


    /* Update deposit total */

    /*         
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
    */

    /* Update account balance */
    /*     
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal; 
    */
    const newDepositAmount = getInputValue('deposit-input');
    if (newDepositAmount > 0) {
        updateTotalField('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount, true);
    }

})

/* Handle withdraw button event */
document.getElementById('withdraw-button').addEventListener('click', function () {
    /*  
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    */


    /* Update withdraw total */
    /*  
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal; 
    */

    /* Update account balance */
    /*     
    const balanceTotal = document.getElementById('balance-total');
    const previousBalancetext = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalancetext);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
    */
    const newWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', newWithdrawAmount);
        updateBalance(newWithdrawAmount, false);
    }
    if (newWithdrawAmount > currentBalance) {
        console.log('You can not withdraw more than what you have in your account')
    }

})

