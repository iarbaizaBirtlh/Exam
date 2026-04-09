// =======================
// 📌 VARIABLES
// =======================
var globalVar;
let bloqueVar;
const constante = 3.14;

// =======================
// 📊 TIPOS DE DATOS
// =======================
let texto = "Hola";     // string
let numero = 10;        // number
let booleano = true;    // boolean
let nulo = null;        // null
let indefinido;
let objeto1 = {a:1};    // object
let objeto2 = [1, 2];   // "object" (los arrays son objetos)
let funcion = function(){};   // "function"

console.log("--- Tipos de datos: ---");
console.log(typeof texto + ' -> ' + texto);
console.log(typeof numero + ' -> ' + numero);
console.log(typeof booleano + ' -> ' + booleano);
console.log(typeof nulo + ' -> ' + nulo);
console.log(typeof indefinido + ' -> ' + indefinido);
console.log(typeof objeto1 + ' -> ' + objeto1);
console.log(typeof objeto2 + ' -> ' + objeto2);
console.log(typeof funcion + ' -> ' + funcion);
console.log();

// =======================
// 🔄 CONVERSIÓN DE TIPOS
// =======================
let numString = "123";
let convertidoInt = parseInt(numString);
let convertidoFloat = parseFloat("3.14");
let numATexto = "" + 50;

console.log("--- Conversion de tipos: ---");
console.log(typeof numString + ' -> ' + numString);
console.log("Transforma a Int con parseInt(): " + convertidoInt);
console.log("Transforma a Int con parseFloat(): " + convertidoFloat);
console.log("Transforma Int a String con '' + 50: " + typeof numATexto + ' -> ' + numATexto);
console.log();

// =======================
// ➕ OPERADORES
// =======================
let a = 5, b = 2;

let suma = a + b;
let resta = a - b;
let multi = a * b;
let div = a / b;
let mod = a % b;

console.log("--- Operaciones Aritméticas: ---");
console.log("a + b = " + suma);
console.log("a - b = " + resta);
console.log("a * b = " + multi);
console.log("a / b = " + div);
console.log("a % b = " + mod);
console.log();

a++; // incremento -> ++a incrementa antes y a++ incrementa despues
b--; // decremento

console.log(a + " -> a++ -> " + ++a);
console.log(b + " -> b-- -> " + ++b);
console.log();

// =======================
// ⚖️ OPERADORES DE COMPARACIÓN
// =======================
let aa = 5;
console.log("--- Operadores de comparación: ---");
console.log(typeof aa + " -> " + aa);
console.log('aa == "5" -> ' + (aa == "5"));   // true -> Compara solamente si 5 es igual a 5
console.log('aa === "5" -> ' + (aa === "5")); // false -> Compara si el string "5" es exactamente igual a int 5 
console.log('aa != "6" -> ' + (aa != "6"));   // true -> Distinto (solo valor)
console.log('aa !== "5" -> ' + (aa !== "5")); // true -> Desigualdad estricta (valor y tipo)
console.log('10 > 5 -> ' + (10 > 5));         // true -> Mayor que
console.log('10 <= 10 -> ' + (10 <= 10));     // true -> Menor o igual que
// Comparación de cadenas (ASCII)
console.log('"Marta" == "marta" -> ' + ("Marta" == "marta")); // false (sensible a mayúsculas)
console.log('"Mark" < "Marta" -> ' + ("Mark" < "Marta"));     // true (orden alfabético)
console.log();

// =======================
// 🚦 OPERADORES BOOLEANOS
// =======================
console.log("--- Operaciones Booleanos: ---");
let trueANDfalse = true && false;
let trueORfalse = true || false;
let NOfalse = !true;
console.log("true && false -> " + trueANDfalse);
console.log("true || false -> " + trueORfalse);
console.log("!true -> " + NOfalse);
console.log();

// =======================
// 📝 OPERADORES DE ASIGNACIÓN
// =======================
let x = 10;
console.log("--- Operador de asignación: ---");
console.log("x = " + x);
x += 5; console.log("x += 5  ->  x = x + 5  ->  " + x); // Equivalente a: x = x + 5
x -= 3; console.log("x -= 3  ->  x = x - 3  ->  " + x); // Equivalente a: x = x - 3
x *= 2; console.log("x *= 2  ->  x = x * 2  ->  " + x); // Equivalente a: x = x * 2
x /= 4; console.log("x /= 4  ->  x = x / 4  ->  " + x); // Equivalente a: x = x / 4
x %= 2; console.log("x %= 2  ->  x = x % 2  ->  " + x); // Equivalente a: x = x % 2
console.log();

// =======================
// 💻 OPERADORES BIT A BIT
// =======================
console.log("--- Operadores Binarios: ---");
// Convierte a binario 32 bits y opera
console.log("4 << 2 -> " + (4 << 2)); // 16 (Desplaza bits a la izquierda: 000100 pasa a 010000)
console.log("5 & 1 -> " + (5 & 1));   // 1  (AND a nivel de bits)
console.log("5 | 1 -> " + (5 | 1));   // 5  (OR a nivel de bits)
console.log();

// =======================
// 🔀 CONDICIONES
// =======================
console.log("--- Condiciones: ---");

if (a > b) {
  console.log("a > b -> a es mayor que b");
} else {
  console.log("a < b -> b es mayor o igual");
}

// Operador ternario (igual que la condicion anterior)
let mayorA = (a > b) ? a : b;

console.log();

// =======================
// 🔁 BUCLES
// =======================
console.log("--- Bucles: ---");

// for
for (let i = 0; i < 3; i++) {
  console.log("for:", i);
}

// while
let i = 0;
while (i < 3) {
  console.log("while:", i);
  i++;
}

// do...while
let j = 0;
do {
  console.log("do...while:", j);
  j++;
} while (j < 3);

console.log();

// =======================
// 🧩 FUNCIONES
// =======================
console.log("--- Funciones: ---");

function sumar(x, y) {
  return x + y;
}

console.log("suma(3, 4):", sumar(3, 4));
console.log();

// =======================
// 🧩 FUNCIONES AVANZADAS
// =======================
// Con parámetros
function saludar(nombre1, nombre2) {
  return "Hola " + nombre1 + " y " + nombre2;
}
// Función que devuelve valor
function mayor(a, b) {
  return (a > b) ? a : b;
}
// Función anidada
function hipotenusa(a, b) {
  function cuadrado(x) {
    return x * x;
  }
  return Math.sqrt(cuadrado(a) + cuadrado(b));
}

console.log("--- Funciones avanzadas: ---");
console.log(saludar("Juan","Ana"));
console.log("Mayor:", mayor(10,5));
console.log("Hipotenusa:", hipotenusa(3,4));
console.log();

// =======================
// 🌐 FUNCIONES GLOBALES
// =======================
console.log("--- Funciones globales: ---");
console.log("parseInt('123') -> " + parseInt("123"));
console.log("parseFloat('3.14') -> " + parseFloat("3.14"));
console.log("isNaN('abc') -> " + isNaN("abc"));
console.log("isFinite(100) -> " + isFinite(100));
console.log("eval('2+2') -> " + eval("2+2"));
console.log();

// =======================
// 📚 ARRAYS
// =======================
// Formas de creación
let listaVacia = new Array();        // Constructor clásico
let listaGrande = new Array(40);     // Reserva 40 posiciones (vacías)
let planetas = ["Tierra", "Marte"];  // Array denso (literal) - RECOMENDADO

// Array Mixto / Objeto Literal (Índices con nombre)
let persona1 = {
  "nombre": "Ana",
  "edad": 25,
  0: "Posición cero"
};

console.log("--- Acceso Mixto: ---");
console.log(persona1["nombre"]); // Ana
console.log(persona1[0]);        // Posición cero
console.log();

let frutas = ["manzana", "pera", "plátano"];

// Añadir / eliminar elementos
frutas.push("naranja");   // añade al final
frutas.unshift("kiwi");   // añade al inicio
frutas.pop();             // elimina último y lo devuelve
frutas.shift();           // elimina primero y lo devuelve

console.log("--- Arrays: ---");
console.log(frutas);
console.log("frutas[1] -> " + frutas[1]);

// delete vs splice
delete frutas[1];         // deja undefined
console.log("Elimina contenido de la posicion 1 -> delete frutas[1]:")
console.log(frutas);
frutas.splice(1,1);       // elimina correctamente
console.log("Elimina la posicion 1 -> frutas.slice(1,1):")
console.log(frutas);
console.log();

// Propiedad length (dinámica)
// Si asignas una posición lejana, length crece automáticamente
frutas[10] = "uva";
console.log("Length tras frutas[10]:", frutas.length); // 11
console.log(frutas);
console.log();

// =======================
// 🛠️ MÉTODOS ÚTILES
// =======================
let letras = ["a", "b", "c", "d"];

console.log("--- Métodos: ---");
console.log(letras);
console.log("join('-') (une en string):", letras.join("-"));      // a-b-c-d
console.log("reverse() (invierte):", letras.reverse());        // d,c,b,a
console.log("sort() (ordena):", letras.sort());               // a,b,c,d
console.log("slice(1,3) (sub-array 1 a 3):", letras.slice(1,3));  // b,c (no toca original)
console.log("concat(['e', 'f']):", letras.concat(["e", "f"]));          // une arrays
console.log("toString():", letras.toString());                 // convierte a string
console.log();

// =======================
// 🔄 RECORRIDOS (LOOPS)
// =======================
console.log("--- Recorridos: ---");
// 1. For clásico (Acceso por índice)
for (let i = 0; i < letras.length; i++) {
  if(letras[i] !== undefined) console.log("clásico:", letras[i]);
}
// 2. For...in (Recorre índices/claves)
for (let i in letras) {
  console.log("for-in índice " + i + ": " + letras[i]);
}
// 4. While (Acceso manual)
let cont = 0;
while (cont < letras.length) {
    console.log("while:", letras[cont]);
    cont++;
}
console.log();

// =======================
// 🧩 ARRAYS PARALELOS
// =======================
let profesores = ["Ana","Luis","Carlos"];
let asignaturas = ["JS","BD","Sistemas"];
let alumnos = [20,25,30];

console.log("--- Arrays paralelos: ---");
for (let i = 0; i < profesores.length; i++) {
  console.log(profesores[i] + " da " + asignaturas[i] + " a " + alumnos[i] + " alumnos");
}
console.log();

// =======================
// 🧱 ARRAYS MULTIDIMENSIONALES
// =======================
let datos = [
  ["Ana","JS",20],
  ["Luis","BD",25],
  ["Carlos","Sistemas",30]
];

console.log("--- Arrays multidimensionales: ---");
console.log(datos)
console.log("Acceso [0][0]:", datos[0][0]); // Fila 0, Columna 0
console.log("Acceso [1][1]:", datos[1][1]);  // Fila 1, Columna 1
for (let i = 0; i < datos.length; i++) {
  console.log(datos[i][0] + " da " + datos[i][1] + " a " + datos[i][2]);
}
console.log();

// =======================
// 🧱 OBJETOS
// =======================
let persona = {
  nombre: "Juan",
  edad: 30,
  saludar: function() {
    return "Hola " + this.nombre;
  }
};

console.log("--- Objetos: ---");
// Objetos literales
console.log("persona.nombre -> " + persona.nombre);
console.log("persona['edad'] -> " + persona["edad"]);
console.log("persona.saludar() -> " + persona.saludar());
console.log();

// =======================
// 🧱 OBJETOS (CONSTRUCTOR)
// =======================
function Coche(marca, combustible) {
  this.marca = marca;
  this.combustible = combustible;
  this.cantidad = 0;
  
  this.rellenar = function(litros) {
    this.cantidad = litros;
  };
}

let coche1 = new Coche("BMW","diesel");
coche1.rellenar(40);

console.log("--- Objetos constructor: ---");
console.log(coche1.marca + " + " + coche1.cantidad);
console.log();

// =======================
// 🔤 OBJETO STRING
// =======================
let cadena = "Hola Mundo";

console.log("--- String: ---");
console.log(cadena);
console.log("length -> " + cadena.length);
console.log("toUpperCase() -> " + cadena.toUpperCase());
console.log("toLowerCase() -> " + cadena.toLowerCase());
console.log("charAt(3) -> " + cadena.charAt(3));
console.log("charCodeAt(3) -> " + cadena.charCodeAt(3));
console.log("indexOf('Mundo') -> " + cadena.indexOf("Mundo"));
console.log("substring(0,4) -> " + cadena.substring(0,4));
console.log();

/* concat()	Une una o más cadenas y devuelve el resultado de esa unión.
fromCharCode()	Convierte valores Unicode a caracteres.
lastIndexOf()	Devuelve la posición de la última ocurrencia del carácter buscado en la cadena.
match()	Busca una coincidencia entre una expresión regular y una cadena y devuelve las coincidencias o null si no ha encontrado nada.
replace()	Busca una subcadena en la cadena y la reemplaza por la nueva cadena especificada.
search()	Busca una subcadena en la cadena y devuelve la posición dónde se encontró.
slice()	Extrae una parte de la cadena y devuelve una nueva cadena.
split()	Divide una cadena en un array de subcadenas.
substr()	Extrae los caracteres de una cadena, comenzando en una determinada posición y con el número de caracteres indicado.
 */

// =======================
// 🔢 OBJETO MATH
// =======================
console.log("--- Math: ---");
console.log("PI -> " + Math.PI);
console.log("sqrt(16) -> " + Math.sqrt(16));
console.log("pow(2,3) -> " + Math.pow(2,3));
console.log("round(4.6) -> " + Math.round(4.6));
console.log("random() -> " + Math.random());
console.log();

/* abs(x)	Devuelve el valor absoluto de x.
acos(x)	Devuelve el arcocoseno de x, en radianes.
asin(x)	Devuelve el arcoseno de x, en radianes.
atan(x)	Devuelve el arcotangente de x, en radianes con un valor entre -PI/2 y PI/2.
atan2(y,x)	Devuelve el arcotangente del cociente de sus argumentos.
ceil(x)	Devuelve el número x redondeado al alta hacia el siguiente entero.
cos(x)	Devuelve el coseno de x (x está en radianes).
floor(x)	Devuelve el número x redondeado a la baja hacia el anterior entero.
log(x)	Devuelve el logaritmo neperiando (base E) de x.
max(x,y,z,...,n)	Devuelve el número más alto de los que se pasan como parámetros.
min(x,y,z,...,n)	Devuelve el número más bajo de los que se pasan como parámetros.
sin(x)	Devuelve el seno de x (x está en radianes).
tan(x)	Devuelve la tangente de un ángulo.
 */

// =======================
// 🔢 OBJETO NUMBER
// =======================
let num = 13.3714;

console.log("--- Number: ---");
console.log(num);
console.log("num.toFixed(2) -> " + num.toFixed(2));
console.log("toPrecision(3) -> " + num.toPrecision(3));
console.log("Number.MAX_VALUE -> " + Number.MAX_VALUE);
console.log();

/* constructor	Devuelve la función que creó el objeto Number.
MIN_VALUE	Devuelve el número más pequeño disponible en JavaScript.
NEGATIVE_INFINITY	Representa a infinito negativo (se devuelve en caso de overflow).
POSITIVE_INFINITY	Representa a infinito positivo (se devuelve en caso de overflow).
toExponential(x)	Convierte un número a su notación exponencial.
 */

// =======================
// 🔘 OBJETO BOOLEAN
// =======================
let bool = new Boolean(1);

console.log("--- Boolean: ---");
console.log(bool)
console.log("toString() -> " + bool.toString());
console.log("valueOf() -> " + bool.valueOf());
console.log();

// =======================
// 📅 OBJETO DATE
// =======================
let fecha = new Date();

console.log("--- Date: ---");
console.log(fecha)
console.log("getFullYear() -> " + fecha.getFullYear());
console.log("getMonth() -> " + fecha.getMonth());
console.log("getDate() -> " + fecha.getDate());
console.log("getHours() -> " + fecha.getHours());
console.log();

/* getDay()	Devuelve el día de la semana (de 0-6).
getMilliseconds()	Devuelve los milisegundos (de 0-999).
getMinutes()	Devuelve los minutos (de 0-59).
getSeconds()	Devuelve los segundos (de 0-59).
getTime()	Devuelve los milisegundos desde media noche del 1 de Enero de 1970.
getTimezoneOffset()	Devuelve la diferencia de tiempo entre GMT y la hora local, en minutos.
getUTCDate()	Devuelve el día del mes en base a la hora UTC (de 1-31).
getUTCDay()	Devuelve el día de la semana en base a la hora UTC (de 0-6).
getUTCFullYear()	Devuelve el año en base a la hora UTC (4 dígitos).
setDate()	Ajusta el día del mes del objeto (de 1-31).
setFullYear()	Ajusta el año del objeto (4 dígitos).
setHours()	Ajusta la hora del objeto (de 0-23).
 */



/* // =======================
// 🌐 DOM BÁSICO
// =======================
document.write("<h2>Chuleta JS funcionando</h2>");
document.write("Texto: " + texto + "<br>");
document.write("Número: " + numero + "<br>");

// =======================
// 🎯 RESUMEN FINAL
// =======================
console.log("Chuleta COMPLETA JS lista 🚀");
 */
