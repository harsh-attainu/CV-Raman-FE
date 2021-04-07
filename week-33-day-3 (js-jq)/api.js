$('#main-form').submit(function(event) {
    event.preventDefault();
    let from_currency = $('#from-currency').val();

    console.log('from currency', from_currency);

    $.ajax({
        type:'GET',
        url: `https://api.exchangerate-api.com/v4/latest/${from_currency}`,
        success: displayConvertedCurrency
    });
})

function displayConvertedCurrency(data, status) {

    let from_currency = $('#from-currency').val();
    let to_currency = $('#to-currency').val();
    let from_amount = $('#from-amount').val();
    let exchange_rate = data.rates[to_currency];

    console.log('to currency:',to_currency);
    console.log('from_amount:', from_amount);
    console.log('exchange rate:', exchange_rate);

    
    let converted_amount = from_amount*exchange_rate;
    // Number(converted_amount.toFixed(2));
    $('#output').html(`${from_currency}${from_amount} in ${to_currency} is:<b>${converted_amount.toFixed(2)}</b>`)


}

$(document).ready(function() {
    $.ajax({
        type:'GET',
        url: `https://api.exchangerate-api.com/v4/latest/INR`,
        success: populateTheCurrencies
    });

})

function populateTheCurrencies(data, status) {
    let all_rates = Object.keys(data.rates)
    console.log('all_rates',all_rates);

    let from_currency = $('#from-currency');
    let to_currency = $('#to-currency');

    all_rates.forEach(function(currency) {
        from_currency.append(`<option value=${currency}>${currency}</option>`)
        to_currency.append(`<option value=${currency}>${currency}</option>`)
    });
}