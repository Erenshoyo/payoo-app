document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();//to prevent reload after click.
    const accountNumber = document.getElementById("account-number").value;
    if (accountNumber.length == 11) {
      console.log("Yes");
    } else {
      console.log("Enter valid account number");
    }
    const pin = document.getElementById("pin").value;
    if (pin.length == 4) {
      console.log("Yes");
    } else {
      console.log("Enter valid 4-digit PIN");
    }
  });

