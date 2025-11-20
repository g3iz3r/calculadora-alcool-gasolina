function calcularcombustivel() {
    const inputAlcool = document.getElementById('valorAlcool');
    const inputGasolina = document.getElementById('valorGasolina');

    const resultadoInput = document.getElementById("resultado");

    const precoAlcool = parseFloat(inputAlcool.value);
    const precoGasolina = parseFloat(inputGasolina.value);

    if (isNaN(precoAlcool) || isNaN(precoGasolina) || precoAlcool <= 0 || precoGasolina <= 0) {
        resultadoInput.value = "ERRO: Insira valores válidos.";
    }


    const relacao = precoAlcool / precoGasolina;
    const FATOR_LIMITE = 0.73;
    let mensagemResultado;

    if (relacao <= FATOR_LIMITE) {
        mensagemResultado = " Compensa abastecer com ÁLCOOL! (Etanol)";
    } else {
        mensagemResultado = " Compensa abastecer com GASOLINA!";
    }

    resultadoInput.innerHTML = mensagemResultado;
}