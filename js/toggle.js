document.getElementById("get-bonus").style.display = "none";
document.getElementById("addmoney").style.display = "none";
document.getElementById("cashout").style.display = "none";
document.getElementById("transfer-money").style.display = "none";
document.getElementById("pay-bills").style.display = "none";

document
  .getElementById("add-money-click")
  .addEventListener("click", function () {
    document.getElementById("addmoney").style.display = "block";
    document.getElementById("cashout").style.display = "none";
    document.getElementById("transfer-money").style.display = "none";
    document.getElementById("get-bonus").style.display = "none";
    document.getElementById("pay-bills").style.display = "none";
    // document.getElementById("cashout").style.display = "none";
  });
document
  .getElementById("cash-out-click")
  .addEventListener("click", function () {
    document.getElementById("cashout").style.display = "block";
    document.getElementById("addmoney").style.display = "none";
    document.getElementById("transfer-money").style.display = "none";
    document.getElementById("get-bonus").style.display = "none";
    document.getElementById("pay-bills").style.display = "none";
    // document.getElementById("cashout").style.display = "none";
  });
document
  .getElementById("transfer-money-click")
  .addEventListener("click", function () {
    document.getElementById("transfer-money").style.display = "block";
    document.getElementById("addmoney").style.display = "none";
    document.getElementById("cashout").style.display = "none";
    document.getElementById("get-bonus").style.display = "none";
    document.getElementById("pay-bills").style.display = "none";
    // document.getElementById("cashout").style.display = "none";
  });
document
  .getElementById("get-bonus-click")
  .addEventListener("click", function () {
    document.getElementById("get-bonus").style.display = "block";
    document.getElementById("addmoney").style.display = "none";
    document.getElementById("cashout").style.display = "none";
    document.getElementById("transfer-money").style.display = "none";
    document.getElementById("pay-bills").style.display = "none";
    // document.getElementById("cashout").style.display = "none";
  });
document
  .getElementById("pay-bills-click")
  .addEventListener("click", function () {
    document.getElementById("pay-bills").style.display = "block";
    document.getElementById("addmoney").style.display = "none";
    document.getElementById("cashout").style.display = "none";
    document.getElementById("transfer-money").style.display = "none";
    document.getElementById("get-bonus").style.display = "none";
    // document.getElementById("cashout").style.display = "none";
  });
// document.getElementById("transaction-click").addEventListener("click",function(){
//     document.getElementById("addmoney").style.display = "block";
//     document.getElementById("cashout").style.display = "none";
//     document.getElementById("transfer-money").style.display = "none";
//     document.getElementById("get-bonus").style.display = "none";
//     document.getElementById("pay-bills").style.display = "none";
//     document.getElementById("").style.display = "none";
// })
