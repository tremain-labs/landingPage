function calculateTip() {
    let billAmount = parseFloat(document.getElementById("billAmount").value);
    let tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
    let numPeople = parseInt(document.getElementById("numPeople").value);

    let tip = (tipPercentage / 100) * billAmount;
    let newAmount = billAmount + tip;
    let perPerson = newAmount / numPeople;

    document.getElementById("result").innerText = "Each person pays: $" + perPerson.toFixed(2);
}