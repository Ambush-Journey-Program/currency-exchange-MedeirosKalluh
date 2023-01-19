//converter moeda
let usdValue = document.getElementById("value-usd") 
let brlValue = document.getElementById("value-brl")

usdValue.addEventListener("input", function exchangeInBRL(event){

    const brValueAsNumber = Number(event.target.value)
     const calcConvertion = (brValueAsNumber * 5.15).toFixed(2)
     const currencyUsdFormat = new Intl.NumberFormat('pt-BR', { 
        style: 'currency', 
        currency: 'BRL',
        
    });

    brlValue.value = currencyUsdFormat.format(calcConvertion)
})

brlValue.addEventListener("input", function exchangeInUSD(event){
    const usdValueAsNumber = Number(event.target.value)
    const calcConvertion = (usdValueAsNumber / 5.15).toFixed(2)
    const currencyBrlFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',     
    });

    usdValue.value = currencyBrlFormat.format(calcConvertion)
})