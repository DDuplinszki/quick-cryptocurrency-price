let dateValue = document.getElementById('date-selector');
let converted = undefined;
let startButton = document.getElementById('start');
let currentCrypto = document.getElementById('crypto');
let results = document.getElementById('result-paragraph');
let cryptocurrencyLogo = document.getElementById('logo');

dateConverter = Converter = () => {
    converted = dateValue.value.split("-").reverse().join("-");
}

dataQuery = () => {
    let requestURL = `https://api.coingecko.com/api/v3/coins/${currentCrypto.value}/history?date=${converted}&localization=false`;
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        const result = request.response;
        console.log(result);
        cryptocurrencyLogo.src = result.image.small;
        results.textContent = `${result.name}'s price on ${dateValue.value} was: $${result.market_data.current_price.usd.toFixed(3)} USD`;
        results.appendchild(results.textContent);
    };
    
}

startButton.addEventListener('click', function(){dateConverter()});
startButton.addEventListener('click', function(){dataQuery()});

//appendchild creates an error, it works perfectly though ¯\_(ツ)_/¯