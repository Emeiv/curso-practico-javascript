// Código del cuadrado
console.group("Cuadrados");
function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();

// Código del triángulo
console.group("Triángulos");
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;      
}

function areaTriangulo(lado1, lado2, lado3) {
    const altura = (Number(lado1) + Number(lado2) + Number(lado3))/2;
    const area = Math.sqrt(altura*((altura-lado1)*(altura-lado2)*(altura-lado3)));
    return (area);
}

function alturaTriangulo(lado1, lado2, base) {
    const altura = (Number(lado1) + Number(lado2) + Number(base))/2;
    return altura
}

// Función para verificar si un triángulo es "Equilatero(3), Isósceles(2) o Escaleno(0)"
function verificaTriangulo(lado1, lado2, base) {
    const l1 = Number(lado1);
    const l2 = Number(lado2);
    const l3 = Number(base);
    let resultado;

    if (l1 === l2 && l2 === l3) {
        resultado = 3;
    } else if (l1 != l2 && l1 != l3 && l2 != l3) {
        resultado = 0;        
    } else {
        resultado = 2;
    }
    return(resultado);
}

// Función para calcular la altura de un triángulo y dar el tipo de triángulo
function alturaYTipoTriangulo (lado1, lado2, base) {
    const tipoTriangulo = verificaTriangulo(lado1, lado2, base);
     if (tipoTriangulo == 0) {
         const respuestaTipo = alturaTriangulo(lado1, lado2, base);
         alert(`Tu triángulo es escaleno y su altura es ${respuestaTipo}`)
     } else if ( tipoTriangulo == 2) {
        const respuestaTipo = alturaTriangulo(lado1, lado2, base);
        alert(`Tu triángulo es isosceles y su altura es ${respuestaTipo}`)

     } else {
        const respuestaTipo = alturaTriangulo(lado1, lado2, base);
        alert(`Tu triángulo es equilatero y su altura es ${respuestaTipo}`)

     }

}

console.groupEnd();

// Código del círculo
console.group("Círculos");
function diametroCirculo(radio) {
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo (radio) {
    return diametroCirculo(radio) * PI;
}

function areaCirculo(radio) {    
    return PI * (radio * radio);
}
console.groupEnd();


//Aquí interactuamos con HTML.

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const L1 = document.getElementById("InputTrianguloL1");
    const L2 = document.getElementById("InputTrianguloL2");
    const L3 = document.getElementById("InputTrianguloL3");

    const valueL1 = Number(L1.value);
    const valueL2 = Number(L2.value);
    const valueL3 = Number(L3.value);

    const perimetro = perimetroTriangulo(valueL1, valueL2, valueL3);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const L1 = document.getElementById("InputTrianguloL1");
    const L2 = document.getElementById("InputTrianguloL2");
    const L3 = document.getElementById("InputTrianguloL3");

    const valueL1 = Number(L1.value);
    const valueL2 = Number(L2.value);
    const valueL3 = Number(L3.value);

    const area = areaTriangulo(valueL1, valueL2, valueL3);
    alert(area);
}

function calcularDiametroCirculo() {
    const input = document.getElementById("InputCirculo");
    const radio = input.value;

    const diametro = diametroCirculo(radio);
    alert(diametro);

}

function calcularPerimetroCirculo() {
    const input =  document.getElementById("InputCirculo");
    const radio = input.value;

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const radio = input.value;

    const area = areaCirculo(radio);
    alert(area);
}