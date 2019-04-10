var amount = document.getElementById("amount")
var spendings = document.getElementById("spendings")
var total = document.getElementById('total')

function addTo() {
  var value = amount.value;
  var newSpending = document.createElement("li");
  newSpending.innerHTML = value;
  newSpending.onclick = clear;
  spendings.appendChild(newSpending);
  updateTotal()
}

function clear() {
  spendings.removeChild(this)
  updateTotal()
}

function updateTotal() {
  var totalSpend = 0
  for (var index = 0; index < spendings.children.length; index++) {
    var spending = spendings.children[index]
    totalSpend += Number(spending.innerHTML)
  }
  total.innerHTML  = totalSpend
}