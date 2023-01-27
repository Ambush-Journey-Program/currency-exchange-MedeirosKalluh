//Currency Exchange
const usdValue = document.getElementById("value-usd") 
const brlValue = document.getElementById("value-brl")

async function fetchResponse(url) {
    const response = await fetch(url);
    const body = await response.json();
    return body.USDBRL.ask
} 

usdValue.addEventListener("input", async function exchangeInBRL(event){
    const usdExchange = await fetchResponse(`https://economia.awesomeapi.com.br/last/USD-BRL`)
    const brValueAsNumber = Number(event.target.value)
    const calcConvertion = (brValueAsNumber * usdExchange).toFixed(2)
    brlValue.value = calcConvertion
})

brlValue.addEventListener("input", async function exchangeInUSD(event){
    const usdExchange = await fetchResponse(`https://economia.awesomeapi.com.br/last/USD-BRL`)
    const usdValueAsNumber = Number(event.target.value)
    const calcConvertion = (usdValueAsNumber / usdExchange).toFixed(2)
    usdValue.value = calcConvertion
})

//Switch Button
const currencyWrapperEl = document.querySelectorAll(".currency")
const currencyContainer = document.querySelector("#container")
const button = document.getElementById("switch-button")
button.addEventListener("click", function switchCurrency(event){
    currencyContainer.classList.toggle("container--reverse")
    currencyWrapperEl.forEach(function(element){
        element.classList.toggle("currency--reverse")
    })
    const inputs = document.querySelectorAll(".currency__input")
    const usdInput = inputs[0]
    const brlInput = inputs [1]
    if (brlInput.disabled) {
        brlInput.removeAttribute("disabled", "");;
      } else {
        brlInput.setAttribute("disabled", "");
      }

    if (usdInput.disabled) {
        usdInput.removeAttribute("disabled", "");;
      } else {
        usdInput.setAttribute("disabled", "");
      }
})