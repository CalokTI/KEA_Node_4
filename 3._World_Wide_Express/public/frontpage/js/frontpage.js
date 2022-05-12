fetch("/amountoffavoriteanimals")
.then(response => response.json())
.then(result => {
    console.log(result);
    document.getElementById("favorite-animals-amount").innerText = result.amount;
})