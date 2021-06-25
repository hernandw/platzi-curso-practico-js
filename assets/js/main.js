/* Nos traemos los valores por getElementById y lo procesamos con las funciones */

const calcularPerimetroCuadrado = () => {
    const lado = document.getElementById("inputCuadrado").value;
    
    alert(`El perímetro del cuadrado es: ${perimetroCuadrado(lado)} cm`);
}

const calcularAreaCuadrado = () => {
    const lado = document.getElementById("inputCuadrado").value;
    
    alert(`El area del cuadrado es: ${areaCuadrado(lado)} cm2`);
}

/* Nos traemos los valores por getElementById y lo procesamos con las funciones */

const calcularPerimetroTriangulo = () => {
    const lado1 = parseInt(document.getElementById("inputlado1").value);
    const lado2 = parseInt(document.getElementById("inputlado2").value);
    const base = parseInt(document.getElementById("inputbase").value);
    
    
    alert(`El perímetro del triangulo es: ${lado1+lado2+base} cm`);
}

const calcularAreaTriangulo = () => {
    const altura = parseInt(document.getElementById("inputaltura").value);
    const base = parseInt(document.getElementById("inputbase").value);
    
    alert(`El area del triangulo es: ${areaTriangulo(base, altura)} cm2`);
}


/* Nos traemos los valores por getElementById y lo procesamos con las funciones */

const calcularPerimetroCirculo = () => {
    const radio = document.getElementById("inputradio").value;
    
    alert(`El perímetro del cuadrado es: ${perimetroCirculo(radio)} cm`);
}

const calcularAreaCirculo= () => {
    const radio = document.getElementById("inputradio").value;
    
    alert(`El area del cuadrado es: ${areaCirculo(radio)} cm2`);
}


//Funciones del Cuadrado
console.group("Cuadrados");

const perimetroCuadrado = (lado) => lado *4;

const areaCuadrado = (lado) => lado * lado;

console.groupEnd;

//Funciones del Triangulo}
console.group("Triangulos");


const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base; 

const areaTriangulo = (base, altura) => (base * altura)/2;

console.groupEnd;

//Funciones del Circulo}

const PI = Math.PI;

const perimetroCirculo = (radio) => (radio * 2) * PI;
const areaCirculo = (radio) => PI * (radio*radio);

console.groupEnd;