var amount = document.getElementById("amount")
var spendings = document.getElementById("spendings")


function addTo() {
  var value = amount.value
  var newSpending = document.createElement("ol")
  newSpending.innerHTML = value
  newSpending.onclick = clear
  spendings.appendChild(newSpending)
}

function clear() {
  spendings.removeChild(this)
}
