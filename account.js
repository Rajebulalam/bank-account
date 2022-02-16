// Deposit Button Event

document.getElementById('deposit-btn').addEventListener('click', function () {

    // Deposit Input
    const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const deposiInputFloat = parseFloat(depositInputText);
    const depositInputVlue = deposiInputFloat;

    // Deposit Totoal
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const depositTotalFloat = parseFloat(depositTotalText);
    const depositTotalVlue = depositTotalFloat;

    // New Deposit Total
    const newDepositTotal = depositTotalVlue + depositInputVlue;
    if (depositInputVlue > 0) {
        depositTotal.innerText = newDepositTotal;
    } else {
        alert('Please!! Give a Positive Value');
    }

    // Balance Account
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalFloat = parseFloat(balanceTotalText);
    const previousBalanceTotal = balanceTotalFloat;

    // New Balance Total
    const newBalanceTotal = previousBalanceTotal + depositInputVlue;
    if (depositInputVlue > 0) {
        balanceTotal.innerText = newBalanceTotal;
    }

    // Clear Input
    depositInput.value = '';
})


// Withdraw Event Button

document.getElementById('withdraw-btn').addEventListener('click', function () {

    // Withdraw Input Account
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawInputFloat = parseFloat(withdrawInputText);
    const withdrawInputValue = withdrawInputFloat;

    // Withdraw Total
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalFloat = parseFloat(withdrawTotalText);
    const withdrawTotalValue = withdrawTotalFloat;


    // Withdrwa With Negative Condition
    const currentBalanceTotal = getCurrentTotal();
    const withdrawInputToatl = getWithdraInput();

    // New Withdraw Total

    if (withdrawInputValue > 0 && currentBalanceTotal > withdrawInputToatl) {
        const newWithdrawTotal = withdrawTotalValue + withdrawInputValue;
        withdrawTotal.innerText = newWithdrawTotal;

    } else {
        alert('Please!! Give a Positive Number');
    }

    // Balance Account
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalFloat = parseFloat(balanceTotalText);
    const previousBalanceTotal = balanceTotalFloat;

    // Balance Total After Withdraw

    if (withdrawInputValue > 0 && currentBalanceTotal > withdrawInputToatl) {
        const newBalanceTotal = previousBalanceTotal - withdrawInputValue;
        balanceTotal.innerText = newBalanceTotal;
    } else {
        alert("Sorry!! You can't withdarw more what you have");
    }

    // Withdraw Input Clear
    withdrawInput.value = '';
})

// Get Current Balance
function getCurrentTotal() {

    // Get Current Balance
    const currentBalance = document.getElementById('balance-total');
    const currentBalanceText = currentBalance.innerText;
    const currentBalanceFloat = parseFloat(currentBalanceText);
    const currentBalanceAmount = currentBalanceFloat;

    return currentBalanceAmount;
}


// Withdraw Total Amount
function getWithdraInput() {

    // Get Withdraw balnace
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawInputFloat = parseFloat(withdrawInputText);
    const withdrawInputAmount = withdrawInputFloat;

    return withdrawInputAmount;

}