const form = document.querySelector('form')
const nameInput = document.querySelector('#name-input')
const creditSelect = document.querySelector('#credit')
const formBalance = document.querySelector('#form')
//const headerVal = document.querySelector('#walletBalance')

const addTenButton = document.querySelector('#addTen')
const addTwentyButton = document.querySelector('#addTwenty')
const addFiftyButton = document.querySelector('#addFifty')
const addHundredButton = document.querySelector('#addHundred')

//const {getCreditCards} = require("./controller.js")


/*
document.write(33 + 30)
document.write(33 + 30)
document.write(33 + 30)
document.write(33 + 30)
document.write(33 + 30)
*/

function startBalance(e) {
    e.preventDefault()

    let inputField = document.getElementById('startHundred') 
    var startBal = document.createElement('li')
    var startBalspan = document.createElement("span")
    startBalspan.textContent = '$' + 100 
    startBal.appendChild(startBalspan)
    const list = document.querySelector('ul')
    list.appendChild(startBal)
    inputField.value = ''
}

function pickCreditCard(e) {
    
}
/*
function addTwenty(e) {
    Withdrawing, Depositing Check Balance
}
function addFifty(e) {
    e.preventDefault()
    document.getElementById('walletBalance').innerHTML = msg + 50
}
function addHundred(e) {
    e.preventDefault()
    document.getElementById('walletBalance').innerHTML = msg + 100
}
*/
//document.getElementById('walletBalance').innerHTML = msg + balance;

//app.post('/creditcards', getCreditCards)
/*
function serveCreditCards() {
    getCreditCards()
}
*/

/*
creditSelect.addEventListener("click", serveCreditCards)

//headerVal.addEventListener("click", startBalance)
addTenButton.addEventListener("click", addTen)
addTwentyButton.addEventListener("click", addTwenty)
addFiftyButton.addEventListener("click", addFifty)
addHundredButton.addEventListener("click", addHundred)
//form.addEventListener('submit', handleSubmit)
*/
/*
axios.get('')
.then(res => {
    res.data.forEach(creditCards => {
        const option = document.createElement('option')
        option.setAttribute('value', creditCards['creditCards_id'])
        option.textContent = creditCards.ccname
        creditSelect.appendChild(option)
    })
})
*/