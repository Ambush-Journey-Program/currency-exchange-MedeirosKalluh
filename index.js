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


// 1. Inicia com o input de baixo desabilitado (<input disabled>)
// 2. input de cima fica habilitado (<input />)
const currencyContainer = document.querySelector("#container")
const button = document.getElementById("switch-button")
button.addEventListener("click", function switchCurrency(event){
// 3. Quando clicar no botao de switch, adicionar a variante para aplicar o flex-direction: column-reverse
    currencyContainer.setAttribute("style", "flex-direction:column-reverse")

    // 1. faz a query de todos querySelectAll()
    const inputs = document.querySelectorAll(".currency__input")
    // 2. Separa em 2 variaveis, um para cada
    const usdInput = inputs[0]
    const brlInput = inputs [1]
//3.1 Chamar a funcao para desabilitar o input de BRL e habilitar o input USD
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
