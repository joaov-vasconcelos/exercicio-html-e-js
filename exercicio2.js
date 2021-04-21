function valorBuffet(){

    var txtQuilo = document.getElementById('txtQuilo');
    var txtGramas = document.getElementById('txtGramas');

    var txtQuilo = Number(txtQuilo.value);
    var txtGramas = Number(txtGramas.value);

    var precoFinal = Math.floor((txtGramas * txtQuilo) / 1000);

    outValor.textContent = `valor a pagar R$ ${precoFinal}`;

}
