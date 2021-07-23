// Código del cuadrado

console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lafos del cuadrado miden " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es " + areaCuadrado + "cm^2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 8;
const alturaTriangulo = 4.5;

console.log(
    `Los lados del triángulo miden ${ladoTriangulo1}cm, ${ladoTriangulo2}cm y la base mide ${baseTriangulo}cm.`
);
console.log(`Su altura es ${alturaTriangulo}cm.`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perímetro del triángulo es ${perimetroTriangulo}cm.`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El área del triángulo es ${areaTriangulo}cm^2`);
console.groupEnd();

// Código del círculo
console.group("Círculos");
const radioCirculo = 15;
const diametroCirculo = radioCirculo * 2;

console.log(`El radio del circulo mide ${radioCirculo}cm.`);
console.log(`El diámetro del círculo mide ${diametroCirculo}cm. `);

const areaCirculo = 3.1415 * (radioCirculo * radioCirculo);
console.log(`El área del círculo mide ${areaCirculo}cm^2.`);
console.groupEnd();
