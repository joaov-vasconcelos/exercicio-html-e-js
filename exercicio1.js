function Promoção(){

    var txtVeiculo = document.getElementById('txtVeiculo');
    var txtPreco = document.getElementById('txtPreco');
    var outVeiculo = document.getElementById('outVeiculo');
    var outPromocao = document.getElementById('OutPromocao');

    var veiculo = txtVeiculo.value;
    var promocao = Number(txtPreco.value);

    var promocaoEntrada = Math.floor(promocao / 2);
    var promocaoParcelas = Math.floor(promocao / 24);

    outVeiculo.textContent = veiculo;
    outEntrada.textContent = `entrada de R$ ${promocaoEntrada}`;
    outParcelas.textContent = `+ 12x de R$ ${promocaoParcelas}`;

}

var btnPromocao = document.getElementById('btnPromocao');
btnPromocao.addEventListener('click', Promoção);