var amount = document.getElementById("amount")
var spendings = document.getElementById("spendings")


function addTo() {
  var value = amount.value;
  var newSpending = document.createElement("ol");
  newSpending.innerHTML = value;
  newSpending.onclick = clear;
  spendings.appendChild(newSpending);
  console.log(newSpending.length);
}

function clear() {
  spendings.removeChild(this)
}
