fetch ('https://economia.awesomeapi.com.br/json/last/USD-BRL').then(resposta =>{
    return resposta.json();
}).then(economia =>{
    console.log(economia);
    document.getElementById('dollar').innerHTML = 'Valor atual em R$: ' + economia.USDBRL.bid;
    document.getElementById('code').innerHTML = ' Código: ' + economia.USDBRL.code;
    document.getElementById('nome').innerHTML = ' Nome: ' + economia.USDBRL.name;
    document.getElementById('data').innerHTML = 'Data e Horario: ' + economia.USDBRL.create_date;
    document.getElementById('menor-preco').innerHTML = 'Menor preço: ' + economia.USDBRL.low;
})
