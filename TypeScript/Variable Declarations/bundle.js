//loger
var log = console.log;
var espacio = ' - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ';
log(espacio);
log('BOOLEAN');
//Boolean verdadero y falso
var estaSoleado = true;
var estaNublado = false;
// estaSoleado = 0;    ERROR booleano no es numero
// estaNublado = 'No'; ERROR booleano no es string
// etc...
log('Esta nublado?', estaNublado);
log('Esta soleado?', estaSoleado);
log(espacio);
log('NUMBER');
//Number
var decimal;
var entero = 1;
var hex = 0xf00d;
var binario = 10;
var octal = 484;
decimal = 1.2;
log('Decimal: ', decimal);
decimal = entero;
log('Decimal entero - 0xf00d : ', decimal);
decimal = hex;
log('Decimal hex - 0b1010: ', decimal);
decimal = binario;
log('Decimal binario - 0o744 : ', decimal);
decimal = octal;
log('Decimal octal - 0o744: ', decimal);
// decimal = true; ERROR
log(espacio);
log('STRING');
var color = "Azul";
log('color', color);
color = 'amarillo';
log('color', color);
var numeroString = "1";
log('numeroString', numeroString + 1 + 3 + 4 + 5);
log(espacio);
log('ARRAYS');
var arrayBooleans;
arrayBooleans = [true, false, (true || true), (true || false), (true && false)];
log('arrayBooleans', arrayBooleans);
var arrayNumbers1 = [1, 2 + 2, 3 * 3, 4 + 2];
log('arrayNumbers1', arrayNumbers1);
var arrayNumbers2 = [2 * 3 + 1, 11 + 32, 423 * 555, 4 + 123];
log('arrayNumbers2', arrayNumbers2);
var arrayString = ['A', 'B', 'C', 'D'];
log('arrayNumbers1', arrayNumbers1);
log(espacio);
log('TUPLAS');
var nombreYEdad = ['Adrian Eguez', 4 + 2];
log('nombreYEdad', nombreYEdad);
var aproboEstudiante = ['Matematicas', true, 'Lenguaje', true, 'Biologia', true, 'Computacion', true];
log('aproboEstudiante', aproboEstudiante);
var turnoActual = ['E1234', false];
log('turnoActual', turnoActual);
log(espacio);
log('ENUM');
var enumerarPuntajesMasAltos;
(function (enumerarPuntajesMasAltos) {
    enumerarPuntajesMasAltos[enumerarPuntajesMasAltos["Francia"] = 10] = "Francia";
    enumerarPuntajesMasAltos[enumerarPuntajesMasAltos["Alemania"] = 9] = "Alemania";
    enumerarPuntajesMasAltos[enumerarPuntajesMasAltos["Brazil"] = 4] = "Brazil";
    enumerarPuntajesMasAltos[enumerarPuntajesMasAltos["Mexico"] = 2] = "Mexico";
})(enumerarPuntajesMasAltos || (enumerarPuntajesMasAltos = {}));
log('enumerarPuntajesMasAltos de Francia', enumerarPuntajesMasAltos.Francia);
log('enumerarPuntajesMasAltos de Alemania', enumerarPuntajesMasAltos.Alemania);
log('enumerarPuntajesMasAltos de Brazil', enumerarPuntajesMasAltos.Brazil);
log('enumerarPuntajesMasAltos de Mexico', enumerarPuntajesMasAltos.Mexico);
log('----');
var arregloDeNumerosDeColores;
(function (arregloDeNumerosDeColores) {
    arregloDeNumerosDeColores[arregloDeNumerosDeColores["Amarillo"] = 0] = "Amarillo";
    arregloDeNumerosDeColores[arregloDeNumerosDeColores["Azul"] = 1] = "Azul";
    arregloDeNumerosDeColores[arregloDeNumerosDeColores["Rojo"] = 2] = "Rojo";
})(arregloDeNumerosDeColores || (arregloDeNumerosDeColores = {}));
log('arregloDeNumerosDeColores Amarillo', arregloDeNumerosDeColores.Amarillo);
log('arregloDeNumerosDeColores Azul', arregloDeNumerosDeColores.Azul);
log('arregloDeNumerosDeColores Rojo', arregloDeNumerosDeColores.Rojo);
log('----');
(function (arregloDeNumerosDeColores) {
    arregloDeNumerosDeColores[arregloDeNumerosDeColores["Amarillo"] = 4] = "Amarillo";
    arregloDeNumerosDeColores[arregloDeNumerosDeColores["Azul"] = 5] = "Azul";
    arregloDeNumerosDeColores[arregloDeNumerosDeColores["Rojo"] = 6] = "Rojo";
})(arregloDeNumerosDeColores || (arregloDeNumerosDeColores = {}));
log('arregloDeNumerosDeColores Amarillo', arregloDeNumerosDeColores.Amarillo);
log('arregloDeNumerosDeColores Azul', arregloDeNumerosDeColores.Azul);
log('arregloDeNumerosDeColores Rojo', arregloDeNumerosDeColores.Rojo);
log('----');
(function (arregloDeNumerosDeColores) {
    arregloDeNumerosDeColores[arregloDeNumerosDeColores["Amarillo"] = 9] = "Amarillo";
    arregloDeNumerosDeColores[arregloDeNumerosDeColores["Azul"] = 1] = "Azul";
    arregloDeNumerosDeColores[arregloDeNumerosDeColores["Rojo"] = 2] = "Rojo";
    arregloDeNumerosDeColores[arregloDeNumerosDeColores["Verde"] = 3] = "Verde";
})(arregloDeNumerosDeColores || (arregloDeNumerosDeColores = {}));
log('arregloDeNumerosDeColores Amarillo', arregloDeNumerosDeColores.Amarillo);
log('arregloDeNumerosDeColores Azul', arregloDeNumerosDeColores.Azul);
log('arregloDeNumerosDeColores Rojo', arregloDeNumerosDeColores.Rojo);
log('arregloDeNumerosDeColores Verde', arregloDeNumerosDeColores.Verde);
log(espacio);
log('ANY');
var mutable = 1;
var mutable2 = 2.2;
log('mutable', mutable);
mutable = 'string';
log('mutable', mutable);
mutable = true;
log('mutable', mutable);
mutable = [1, 2, 3];
log('mutable', mutable);
mutable = [1, "TRUE", false];
log('mutable', mutable);
mutable = mutable2;
log('mutable', mutable);
log(espacio);
log('FUNCTIONS - FUNCTIONS - FUNCTIONS - FUNCTIONS - FUNCTIONS - FUNCTIONS - FUNCTIONS - FUNCTIONS');
log('FUNCTIONS - VOID');
function logeoLoQueRecivoNoDevulevoNada(a) {
    log('logeoLoQueRecivoNoDevulevoNada', a);
}
var devuelve = logeoLoQueRecivoNoDevulevoNada('1');
log('devuelve', devuelve);
devuelve = logeoLoQueRecivoNoDevulevoNada(213123);
log('devuelve', devuelve);
devuelve = logeoLoQueRecivoNoDevulevoNada(true);
log('devuelve', devuelve);
devuelve = logeoLoQueRecivoNoDevulevoNada([1, 54, 67543]);
log('devuelve', devuelve);
log(espacio);
log('FUNCTIONS');
function devuelvoNumeros(number) {
    log('devuelvoNumeros', number);
}
devuelvoNumeros(666);
function devuelvoString(string) {
    log('devuelvoString', string);
}
devuelvoString('Vaya un string');
function devuelvoBoolean(boolean) {
    log('devuelvoBoolean', boolean);
}
devuelvoBoolean(true);
function devuelvoArregloDeLoQueSea(arreglo) {
    log('devuelvoArregloDeLoQueSea', arreglo);
}
devuelvoArregloDeLoQueSea([1, 'A', true, [1, 2, 3, 'Hola']]);
log(espacio);
log('CONST');
var genero = 'Hombre';
log('genero', genero);
//genero = 'Mujer'; //Error de compilacion 
