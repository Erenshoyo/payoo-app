document
  .getElementById("cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = document.getElementById("cash-out-amount").value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById("cash-out-pin").value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if (amount && pin) {
      if (convertedPin === 1234) {
        if (convertedAmount <= convertedMainBalance) {
          const newBalance = convertedMainBalance - convertedAmount;
          document.getElementById("main-balance").innerText = newBalance;
          alert("Money withdrawn.");
        } else {
          alert("Insufficient balance.");
        }
      } else {
        alert("Incorrect PIN.");
      }
    } else {
      alert("Please enter both amount and PIN.");
    }
  });
