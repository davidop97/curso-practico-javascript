// Código del cuadrado
console.group('Cuadrados');
// const ladoCuadrado = 5;
// console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm');


function perimetroCuadrado(lado) {
    return lado*4;
}  
// console.log('El perímetro del cuadrado es: ' + perimetroCuadrado + 'cm');

function areaCuadrado(lado) {
    return lado*lado;
}
// console.log('El área del cuadrado es: ' + areaCuadrado + 'cm^2');

console.groupEnd();

// Código del triangulo
console.group('Triángulos');
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log('Los lados del triangulo miden: ' + ladoTriangulo1 + 'cm, ' + ladoTriangulo1 + 'cm, ' + baseTriangulo + 'cm');
// const alturaTriangulo = 5.5;
// console.log(`La altura del triángulo mide: ${alturaTriangulo}cm`); // Otra forma de expresar un console.log

function perimetroTriangulo(lado1, lado2, base) {
    return (Number(lado1)+Number(lado2)+Number(base));
} 
// console.log('El perímetro del triángulo es: ' + perimetroTriangulo + 'cm');

function areaTriangulo(base, altura) {
    return (base*altura/2)
}
// console.log('El área del triángulo es: ' + areaTriangulo + 'cm^2');
console.groupEnd();

// Código del circulo
console.group('Circulos');
// const radioCirculo = 4;
// console.log('El radio del circulo miden: ' + radioCirculo + 'cm');

function diametroCirculo(radio) {
    return radio*2;
}
// console.log('El diametro del circulo miden: ' + diametroCirculo + 'cm');

const PI = Math.PI;
// console.log('PI ES: ' + PI);


function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// console.log('El perímetro del circulo es: ' + perimetroCirculo + 'cm');

function areaCirculo(radio) {
    return (radio**2)*PI;
}
// console.log('El área del circulo es: ' + areaCirculo + 'cm^2');

console.groupEnd();

// Aquí interactuamos con el HTML 

function calcularPerimetroCuadrado() {
    const input = document.getElementById('InputCuadrado');
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById('InputCuadrado');
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Continuando con el triangulo 

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById('InputLado1').value;
    const input2 = document.getElementById('InputLado2').value;
    const input3 = document.getElementById('InputBase').value;
  

    const perimetroT= perimetroTriangulo(input1, input2, input3);
    alert(perimetroT);
}
function calcularAreaTriangulo() {
    const input4 = document.getElementById('InputAltura').value;
    const input3 = document.getElementById('InputBase').value;
    const areaT = areaTriangulo(input3, input4);
    alert(areaT);
}

//Finalizando con el circulo 

function calcularPerimetroCirculo() {
    const inputRadio = document.getElementById('InputRadio').value;

    const perimetroC = perimetroCirculo(inputRadio);
    alert(perimetroC);
}
function calcularAreaCirculo() {
    const inputRadio = document.getElementById('InputRadio').value;

    const areaC = areaCirculo(inputRadio);
    alert(areaC);
}