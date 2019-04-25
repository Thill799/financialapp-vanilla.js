var table = document.getElementById("myTable")
var amount = document.getElementById("amount")
var item = document.getElementById("item")
var spendings = document.getElementById("spendings")
var total = document.getElementById('total')

function addTo() {
  var row = table.insertRow();
  var cell1 = row.insertCell();
  var cell2 = row.insertCell();
  cell1.innerHTML = document.getElementById("amount").value;
  cell2.innerHTML = document.getElementById("item").value;  
  var value = amount.value;
  var newSpending = document.createElement("li");
  newSpending.innerHTML = value;
  newSpending.onclick = clear;
  spendings.appendChild(newSpending);
  updateTotal()
  var item = document.createElement("li")
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
