const usdValue = document.getElementById("value-usd") 
const brlValue = document.getElementById("value-brl")

usdValue.addEventListener("input", function exchangeInBRL(event){
    const brValueAsNumber = Number(event.target.value)
    const calcConvertion = (brValueAsNumber * 5.17).toFixed(2)
    brlValue.value = calcConvertion
})

brlValue.addEventListener("input", function exchangeInUSD(event){
    const usdValueAsNumber = Number(event.target.value)
    const calcConvertion = (usdValueAsNumber / 5.17).toFixed(2)
    usdValue.value = calcConvertion
})

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
