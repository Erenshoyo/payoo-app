document.getElementById("cash-out").addEventListener("click", function (event) {
  event.preventDefault();
  const amount = getInputValueByID("cash-out-amount"); // Corrected
  const pin = getInputValueByID("cash-out-pin");
  const account = document.getElementById("cash-out-account-number").value;
  const mainBalance = getInnerTextByID("main-balance") || 0;

  if (account.length === 11) {
    if (pin === 1234) {
      if (amount <= mainBalance) {
        const newBalance = mainBalance - amount;
        //document.getElementById("main-balance").innerText = newBalance;
        setInnerTextByIDandValue("main-balance", newBalance);
        alert("Money withdrawn.");
      } else {
        alert("Insufficient balance.");
      }
    } else {
      alert("Incorrect PIN.");
    }
  } else {
    alert("Enter account number correctly.");
  }
});
