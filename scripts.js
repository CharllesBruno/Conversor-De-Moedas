const convertButton = document.querySelector('.convert-button')
const currencySelect = document.querySelector('.currency-select')

function convertValues() {
    const inputCurrencyValue = document.querySelector('.input-currency').value
    const currencyValueToConvert = document.querySelector
        ('.currency-value-to-convert')
    //valor em real
    const currencyValueConverted = document.querySelector('.currency-value') //outras moedas

    const dolarToday = 5.413
    const euroToday = 6.2
    const libraToday = 6.9
    const bitcoinToday = 3.9

    if (currencySelect.value == 'dolar') {
        // se o select estiver selecionado o valor de dolar,entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == 'euro') {
        // se o select estiver selecionado o valor de euro,entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'eur'
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == 'libra') {
        // se o select estiver selecionado o valor de libra,entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == 'bitcoin') {
        // se o select estiver selecionado o valor de bitcoin,entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.querySelector('.currency-img')

    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dólar americano'
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro'
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == 'libra') {
        currencyName.innerHTML = 'Libra'
        currencyImage.src = "./assets/libra 1.png"
    }

    if (currencySelect.value == 'bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImage.src = "./assets/bitcoin 1.png"
    }

    convertValues()
}
currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener("click", convertValues)