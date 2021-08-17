// BANKING FUNCTIONALITY WITHOUT FUNCTION // Handle deposit button event 

// document.getElementById('deposit-button').addEventListener('click', function(){
//     // get the amount deposited 

//     const depositInput = document.getElementById('deposit-input');
//     const newDepositAmount = depositInput.value;

//     // update Deposit total 

//     const depositTotal = document.getElementById('deposit-total');
//     const previousDepositAmount = depositTotal.innerText;
//     const newDepositTotal = parseFloat(previousDepositAmount)  + parseFloat(newDepositAmount);
//     depositTotal.innerText= newDepositTotal;


//     // Update Balance after deposit
//     const balanceTotal = document.getElementById('balance-total');

//     const previousBalanceTotal = balanceTotal.innerText;
//     const newBalanceTotal = parseFloat(previousBalanceTotal) + parseFloat(newDepositAmount);
//     balanceTotal.innerText = newBalanceTotal;



//     // clear the deposit input Field 
//     depositInput.value = '';

//   })


// //   Handle withdraw 

// document.getElementById('withdraw-button').addEventListener('click', function(){
//     const withDrawInput = document.getElementById('withdraw-input');
//     const newWithdrawAmount = withDrawInput.value;

//     // Set Withdraw Total 

//     const withDrawTotal = document.getElementById('withdraw-total');
//     const previousWithdrawTotal = withDrawTotal.innerText;

//     const newWithdrawTotal = parseFloat(previousWithdrawTotal) + parseFloat (newWithdrawAmount);

//     withDrawTotal.innerText = newWithdrawTotal;

//     withDrawInput.value = '';

//     // update balance after withdrawal 

//     const balanceTotal = document.getElementById('balance-total');
//     const previousBalanceTotal = balanceTotal.innerText;
//     const newBalanceTotal = parseFloat(previousBalanceTotal) - parseFloat(newWithdrawAmount)

//     balanceTotal.innerText = newBalanceTotal;

// })


// BANKING FUNCTIONALITY WITH FUNCTION 

// get deposit and withdraw amount function 

function getValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  // clear the deposit input Field 
  inputField.value = '';

  return amountValue;
}

// update diposit and withdraw amount function 

function updateValue(outputId, amount) {
  const totalElement = document.getElementById(outputId);
  const totalText = totalElement.innerText;
  const previousTotal = parseFloat(totalText);
  totalElement.innerText = previousTotal + amount;
}

// this function for withdraw negetive withdraw amount and less than current balance
function getCurrentBalance(){
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  return previousBalanceTotal;
}

// Update Balance Total after diposit or withdraw 
function updateBalance(amount, isAdd) {
  const balanceTotal = document.getElementById('balance-total');
  const previousBalanceTotal = getCurrentBalance();
  if (isAdd == true) {
    balanceTotal.innerText = previousBalanceTotal + amount;
  } else {
    balanceTotal.innerText = previousBalanceTotal - amount;
  }
}

// HANDLE DEPOSIT

document.getElementById('deposit-button').addEventListener('click', function () {
  const depositAmount = getValue('deposit-input');

  if (depositAmount > 0) {
    // update deposit total
    updateValue('deposit-total', depositAmount);

    // Update balance after deposit 
    updateBalance(depositAmount, true);
  } else {
    alert('invalid number');
  }




});

// HANDLE WITHDRAW

document.getElementById('withdraw-button').addEventListener('click', function () {

  const withdrawAmount = getValue('withdraw-input');
  const currentBalance = getCurrentBalance();

  if(withdrawAmount>0 && withdrawAmount < currentBalance){
    // update withdraw total 
  updateValue('withdraw-total', withdrawAmount);

  // update balance after withdraw 
  updateBalance(withdrawAmount, false)
  }else if(withdrawAmount > currentBalance){
    alert('you can not withdraw more than what you have in your account');
  }else{
    alert('invalid number');
  }

})