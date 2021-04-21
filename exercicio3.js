function lanHouse(){

var tempoLan = document.getElementById('tempoLan');
var tempoCliente = document.getElementById('tempoCliente');

var tempoLan = Number(tempoLan.value);
var tempoCliente = Number(tempoCliente.value);

var outPrecocliente = Math.ceil(tempoCliente / 15);
var outPrecototal = Math.ceil(outPrecocliente * tempoLan);

outLan.textContent = `valor a pagar R$${outPrecototal}`;

}