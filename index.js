//converter moeda
let usdValue = document.getElementById("value-usd") 
let brlValue = document.getElementById("value-brl")

usdValue.addEventListener("input", function exchangeInBRL(event){
    const brValueasNumber = Number(event.target.value)
    brlValue.value= (brValueasNumber * 5.21).toFixed(2)
})

brlValue.addEventListener("input", function exchangeInUSD(event){
    const usdValueasNumber = Number(event.target.value)
    usdValue.value = (usdValueasNumber / 5.21).toFixed(2)
})


  