//Metodo fetch para buscar o arquivo dados.json ou qualquer outro api, transfomando o resultado em um objeto usando metodo response.json
fetch('JSONarchives/dados.json').then(response => response.json()).then(corpo => {
    //acessando os dados do objeto json e adicionado ao html dentro do elemento Div
    document.getElementById('imagem1').innerHTML = corpo.produto1.imagem1
    document.getElementById('nome1').innerHTML = corpo.produto1.name1
    document.getElementById('preco1').innerHTML = corpo.produto1.price1
   
    document.getElementById('imagem2').innerHTML = corpo.produto2.imagem2
    document.getElementById('nome2').innerHTML = corpo.produto2.name2
    document.getElementById('preco2').innerHTML = corpo.produto2.price2
   
    document.getElementById('imagem3').innerHTML = corpo.produto3.imagem3
    document.getElementById('nome3').innerHTML = corpo.produto3.name3
    document.getElementById('preco3').innerHTML = corpo.produto3.price3
});