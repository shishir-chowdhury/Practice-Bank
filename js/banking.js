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
/* Update balance with one function */
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
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
    const newDepositAmount = getInputValue('deposit-input');

    /* Update deposit total */

    /*         
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
    */
    updateTotalField('deposit-total', newDepositAmount);
    /* Update account balance */
    /*     
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal; 
    */
    updateBalance(newDepositAmount, true);
})

/* Handle withdraw button event */
document.getElementById('withdraw-button').addEventListener('click', function () {
    /*  
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    */
    const newWithdrawAmount = getInputValue('withdraw-input');

    /* Update withdraw total */
    /*  
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal; 
    */
    updateTotalField('withdraw-total', newWithdrawAmount);
    /* Update account balance */
    /*     
    const balanceTotal = document.getElementById('balance-total');
    const previousBalancetext = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalancetext);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
    */
    updateBalance(newWithdrawAmount, false);
})

