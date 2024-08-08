//impresión mensaje en consola
console.log('Hola Mundo...!!!');
alert('Hola desde un alert...!!!');
let persona = { nombre: 'Karina', apellido: 'Cantu', edad: 20 };
console.log(persona);
let persona[{ nombre:'Perla', apellido:'Soto', edad:21},
    { nombre:'María', apellido:'Perez', edad:30},
    { nombre:'Karla', apellido:'Bringas', edad:42},
    { nombre:'Josefina', apellido:'Torres', edad:25}
];
console.log(persona);
console.log(persona[2]);

//función JS
//listado de instrucciones
function suma(a,b) {
    return a + b;
}
let resultado_suma = suma(10,5);
console.log(resultado_suma);

function multiplicacion(a,b) {
    return a * b;
}
let resultado_multi=multiplicacion(2,10);
console.log(resultado_multi);
//operadores aritmeticos
/*let datoA=10;
let datoB=5;

let suma=datoA+datoB;
let reta=datoA-datoB;
let multi=datoA*datoB;
let div=datoA/datoB;

let mayorque=datoA>datoB;
*/
