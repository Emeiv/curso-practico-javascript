// Código del cuadrado

console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lafos del cuadrado miden " + ladoCuadrado + "cm");


function perimetroCuadrado(lado){
    return lado * 4;
}
//console.log("El perímetro del cuadrado es " + perimetroCuadrado + "cm");
function areaCuadrado(lado) {
    return lado * lado;
}
//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log("El área del cuadrado es " + areaCuadrado + "cm^2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 8;
//const alturaTriangulo = 4.5;

//console.log(
//    `Los lados del triángulo miden ${ladoTriangulo1}cm, ${ladoTriangulo2}cm y la base mide ${baseTriangulo}cm.`
//);
//console.log(`Su altura es ${alturaTriangulo}cm.`);

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
      
}
//console.log(`El perímetro del triángulo es ${perimetroTriangulo}cm.`);

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
//console.log(`El área del triángulo es ${areaTriangulo}cm^2`);
console.groupEnd();

// Código del círculo
console.group("Círculos");
// Radio círculo
//const radioCirculo = 15;
// Diámetro círculo
//const diametroCirculo = radioCirculo * 2;
function diametroCirculo(radio) {
    return radio * 2;
}
// PI
//console.log(`El valor de PI es ${PI}.`)
// Perímetro - Circunferencia círculo
const PI = Math.PI;

function perimetroCirculo (radio) {
    return diametroCirculo(radio) * PI;
}

//console.log(`El radio del circulo mide ${radioCirculo}cm.`);
//console.log(`El diámetro del círculo mide ${diametroCirculo}cm. `);
//console.log(`El perímetro del circulo es ${perimetroCirculo}cm`)
// Área círculo.
//const areaCirculo = PI * (radioCirculo * radioCirculo);
function areaCirculo(radio) {
    return PI * (radio * radio);
}
//console.log(`El área del círculo mide ${areaCirculo}cm^2.`);
console.groupEnd();
