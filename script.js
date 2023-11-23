document.getElementById("calcularbtn").addEventListener("click", function(event) {
    event.preventDefault();

    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.querySelector(".resultadoprincipal").innerText = "Por favor, insira valores válidos para peso e altura.";
        return;
    }

    // Calcular o IMC
    var imc = peso / Math.pow(altura / 100, 2);

    // Exibir o resultado
    document.querySelector(".resultadoprincipal").innerText = "Seu IMC é: " + imc.toFixed(2);
});