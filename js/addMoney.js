document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const amount = getInputValueByID("amount"); // Corrected
    const pin = getInputValueByID("pin");
    const account = document.getElementById("account-number").value;
    const mainBalance = getInnerTextByID("main-balance") || 0; // Corrected to ensure numeric value

    if (account.length === 11) {
      if (pin === 1234) {
        const sum = mainBalance + amount;
        //document.getElementById("main-balance").innerText = sum;
        setInnerTextByIDandValue("main-balance", sum);
        alert("Money added to your account.");
      } else {
        alert("Enter the PIN correctly.");
      }
    } else {
      alert("Enter account number correctly.");
    }
  });

// const amount = document.getElementById("amount").value;
// const convertedAmount = parseFloat(amount);
// const pin = document.getElementById("pin").value;
// const convertedPin = parseInt(pin);
// const mainBalance = document.getElementById("main-balance").innerText;
// const convertedMainBalance = parseFloat(mainBalance);
// if (amount && pin) {
//   if (convertedPin === 1234) {
//     const sum = convertedMainBalance + convertedAmount;
//     document.getElementById("main-balance").innerText = sum;
//     alert("Money added.");
//   } else {
//     ("Incorrect PIN");
//   }
// } else {
//   alert("Enter amount and PIN");
// }
