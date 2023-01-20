const usdValue = document.getElementById("value-usd") 
const brlValue = document.getElementById("value-brl")

usdValue.addEventListener("input", function exchangeInBRL(event){
    const brValueAsNumber = Number(event.target.value)
    const calcConvertion = (brValueAsNumber * 5.21).toFixed(2)
    brlValue.value = calcConvertion
})

brlValue.addEventListener("input", function exchangeInUSD(event){
    const usdValueAsNumber = Number(event.target.value)
    const calcConvertion = (usdValueAsNumber / 5.21).toFixed(2)
    usdValue.value = calcConvertion
})