document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault(); //to prevent reload after click.
    const accountNumber = document.getElementById("account-number").value;
    const pin = document.getElementById("pin").value;

    if (accountNumber === "01937165042") {
      if (pin === "1234") {
        console.log("Valid");
        window.location.href = "./main.html";
      } else {
        alert("Enter valid 4-digit PIN");
      }
    } else {
      alert("Enter valid account number");
    }
  });
