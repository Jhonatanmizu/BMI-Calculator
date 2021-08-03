const form = document.getElementById("formulario");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector("#peso");
    const inputAltura = e.target.querySelector("#altura");
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // condition to check values
    if (!peso) {
        setResultado("Peso inválido", false);
        return;
    }
    if (!altura) {
        setResultado("Altura inválida", false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = levelImc(imc)
    msg = `Seu imc é ${imc} e seu nível é ${nivelImc}`
    setResultado(msg, true);
});
// Check the level of imc
function levelImc(imc) {
    const level = [
        "Abaixo do peso",
        "Peso normal",
        "Sobrepeso",
        "Obesidade grau I",
        "Obesidade grau II",
        "Obesidade grau III",
    ];

    if (imc >= 39.9) {
        return level[5];
    }
    if (imc >= 34.9) {
        return level[4];
    }
    if (imc >= 29.9) {
        return level[3];
    }
    if (imc >= 24.9) {
        return level[2];
    }
    if (imc >= 18.5) {
        return level[1];
    }
    if (imc < 18.5) {
        return level[0];
    }
}
// get imc
function getImc(peso, altura) {
    const imc = peso / altura **2;
    return imc.toFixed(2);
}

function createP() {
    const p = document.createElement("p");
    return p;
}
// show result
function setResultado(msg, isValid) {
    const resultado = document.querySelector(".resultado");
    resultado.innerHTML = "";
    const p = createP();
    if(isValid){
        p.classList.add('p-resultado')
    }else{
        p.classList.add('warning')
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}
