const prompt = require("prompt-sync")({ sigint: true});

let numeroUno = prompt("Ingresá un número: ");

let numeroDos = prompt("Ingresá otro número: ");

let numeroTres = prompt("Ingresá otro número: ");




//PARTE UNO Y DOS//

function sumar (numeroUno, numeroDos) {
    return Number(numeroUno) + Number(numeroDos);
}

console.log (sumar(numeroUno, numeroDos));



function resta (numeroUno, numeroDos) {
    return (numeroUno) - (numeroDos);
}

console.log (resta(numeroUno, numeroDos)); 



function multiplicar (numeroUno, numeroDos) {
    return numeroUno * numeroDos;
}

console.log (multiplicar(numeroUno, numeroDos));


function dividir (numeroUno, numeroDos) {
    return numeroUno / numeroDos;
}

console.log (dividir(numeroUno, numeroDos));



//PARTE TRES//

function cuadradoDeUnNumero (numeroUno) {
    return multiplicar(numeroUno, numeroUno);

}

console.log (cuadradoDeUnNumero (numeroUno));

function promedioDeTresNumeros (numeroUno, numeroDos, numeroTres) {
    return (sumar (numeroUno, numeroDos) +  Number(numeroTres)) / 3;
}

console.log (promedioDeTresNumeros (numeroUno, numeroDos, numeroTres));


function calcularPorcentaje (numeroUno, numeroDos) {
    return multiplicar (numeroUno, numeroDos) / 100;
}

console.log(calcularPorcentaje (numeroUno, numeroDos));

