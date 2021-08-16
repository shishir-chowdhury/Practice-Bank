/* Handle diposit and withdraw button event with same function */
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    /* Clear the deposit input field */
    inputField.value = '';
    return amountValue;
}
/* Handle diposit button event */
document.getElementById('deposit-button').addEventListener('click', function () {
    /* Get the amount deposited */
    /*     const depositInput = document.getElementById('deposit-input');
        const newDepositAmountText = depositInput.value;
        const newDepositAmount = parseFloat(newDepositAmountText); */
    const newDepositAmount = getInputValue('deposit-input');

    /* Update deposit total */
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;


    /* Update account balance */
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
})

/* Handle withdraw button event */
document.getElementById('withdraw-button').addEventListener('click', function () {
    /*     const withdrawInput = document.getElementById('withdraw-input');
        const withdrawAmountText = withdrawInput.value;
        const newWithdrawAmount = parseFloat(withdrawAmountText); */
    const newWithdrawAmount = getInputValue('withdraw-input');

    /* Set withdraw total */
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    /* Update account balance */
    const balanceTotal = document.getElementById('balance-total');
    const previousBalancetext = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalancetext);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
})

