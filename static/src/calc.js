function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById('resultado').innerText = "Por favor, insira valores válidos para peso e altura.";
        return;
    }

    if (altura > 10) {
        altura = altura / 100;
    }

    const imc = peso / (altura * altura);
    const imcFormatado = imc.toFixed(2);
    const classificacao = classificarIMC(imc);

    document.getElementById('resultado').innerText = `Seu IMC é: ${imcFormatado} (${classificacao})`;
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
        return "Obesidade grau I";
    } else if (imc >= 35 && imc <= 39.9) {
        return "Obesidade grau II";
    } else {
        return "Obesidade grau III";
    }
}
