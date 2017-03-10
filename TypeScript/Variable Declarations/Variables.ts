//loger
let log = console.log;
let espacio = ' - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ';
log(espacio);
log('BOOLEAN');

//Boolean verdadero y falso
let estaSoleado:boolean = true;
let estaNublado:boolean = false;

// estaSoleado = 0;    ERROR booleano no es numero
// estaNublado = 'No'; ERROR booleano no es string
// etc...

log('Esta nublado?',estaNublado);
log('Esta soleado?',estaSoleado );

log(espacio);
log('NUMBER');

//Number

let decimal:number;
let entero:number = 1;
let hex: number = 0xf00d;
let binario: number = 0b1010;
let octal: number = 0o744;

decimal = 1.2
log('Decimal: ',decimal);
decimal = entero;
log('Decimal entero - 0xf00d : ',decimal);
decimal = hex;
log('Decimal hex - 0b1010: ',decimal);
decimal = binario;
log('Decimal binario - 0o744 : ',decimal);
decimal = octal;
log('Decimal octal - 0o744: ',decimal);

// decimal = true; ERROR


log(espacio);
log('STRING');

let color: string = "Azul";
log('color',color)
color = 'amarillo';
log('color',color)

let numeroString: string = "1";

log('numeroString',numeroString+1+3+4+5)

log(espacio);
log('ARRAYS');

let arrayBooleans:boolean[];
arrayBooleans = [true,false,(true||true),(true||false),(true&&false)];
log('arrayBooleans',arrayBooleans);

let arrayNumbers1:number[]  = [1,2+2,3*3,4+2];
log('arrayNumbers1',arrayNumbers1);

let arrayNumbers2:Array<number>  = [2*3+1,11+32,423*555,4+123];
log('arrayNumbers2',arrayNumbers2);

let arrayString:string[]  = ['A','B','C','D'];
log('arrayNumbers1',arrayNumbers1);

log(espacio);
log('TUPLAS');


let nombreYEdad:[string,number]  = ['Adrian Eguez',4+2];
log('nombreYEdad',nombreYEdad);


let aproboEstudiante:[string,boolean]  = ['Matematicas',true,'Lenguaje',true,'Biologia',true,'Computacion',true];
log('aproboEstudiante',aproboEstudiante);


let turnoActual:[string,boolean]  = ['E1234',false];
log('turnoActual',turnoActual);


log(espacio);
log('ENUM');

enum enumerarPuntajesMasAltos {Francia = 10, Alemania = 9,Brazil = 4, Mexico = 2}

log('enumerarPuntajesMasAltos de Francia',enumerarPuntajesMasAltos.Francia);
log('enumerarPuntajesMasAltos de Alemania',enumerarPuntajesMasAltos.Alemania);
log('enumerarPuntajesMasAltos de Brazil',enumerarPuntajesMasAltos.Brazil);
log('enumerarPuntajesMasAltos de Mexico',enumerarPuntajesMasAltos.Mexico);
log('----')
enum arregloDeNumerosDeColores {Amarillo,Azul,Rojo}
log('arregloDeNumerosDeColores Amarillo',arregloDeNumerosDeColores.Amarillo);
log('arregloDeNumerosDeColores Azul',arregloDeNumerosDeColores.Azul);
log('arregloDeNumerosDeColores Rojo',arregloDeNumerosDeColores.Rojo);
log('----')
enum arregloDeNumerosDeColores {Amarillo=4,Azul,Rojo}
log('arregloDeNumerosDeColores Amarillo',arregloDeNumerosDeColores.Amarillo);
log('arregloDeNumerosDeColores Azul',arregloDeNumerosDeColores.Azul);
log('arregloDeNumerosDeColores Rojo',arregloDeNumerosDeColores.Rojo);
log('----')
enum arregloDeNumerosDeColores {Amarillo=9,Azul=1,Rojo,Verde}
log('arregloDeNumerosDeColores Amarillo',arregloDeNumerosDeColores.Amarillo);
log('arregloDeNumerosDeColores Azul',arregloDeNumerosDeColores.Azul);
log('arregloDeNumerosDeColores Rojo',arregloDeNumerosDeColores.Rojo);
log('arregloDeNumerosDeColores Verde',arregloDeNumerosDeColores.Verde);

log(espacio);
log('ANY');

let mutable:any = 1;
let mutable2 = 2.2;

log('mutable',mutable);
mutable = 'string'
log('mutable',mutable);
mutable = true;
log('mutable',mutable);
mutable = [1,2,3]
log('mutable',mutable);
mutable = [1,"TRUE",false]
log('mutable',mutable);
mutable = mutable2
log('mutable',mutable);


log(espacio);
log('FUNCTIONS - FUNCTIONS - FUNCTIONS - FUNCTIONS - FUNCTIONS - FUNCTIONS - FUNCTIONS - FUNCTIONS');
log('FUNCTIONS - VOID');

function logeoLoQueRecivoNoDevulevoNada(a:any):void{
    log('logeoLoQueRecivoNoDevulevoNada',a);
}

let devuelve:any = logeoLoQueRecivoNoDevulevoNada('1');
log('devuelve',devuelve);
devuelve = logeoLoQueRecivoNoDevulevoNada(213123);
log('devuelve',devuelve);
devuelve = logeoLoQueRecivoNoDevulevoNada(true);
log('devuelve',devuelve);
devuelve = logeoLoQueRecivoNoDevulevoNada([1,54,67543]);
log('devuelve',devuelve);


log(espacio);
log('FUNCTIONS');

function devuelvoNumeros(number:number):void{
    log('devuelvoNumeros',number);
}

devuelvoNumeros(666);

function devuelvoString(string:string):void{
    log('devuelvoString',string);
}

devuelvoString('Vaya un string');

function devuelvoBoolean(boolean:boolean):void{
    log('devuelvoBoolean',boolean);
}

devuelvoBoolean(true);

function devuelvoArregloDeLoQueSea(arreglo:any[]):void{
    log('devuelvoArregloDeLoQueSea',arreglo);
}

devuelvoArregloDeLoQueSea([1,'A',true,[1,2,3,'Hola']]);

log(espacio);
log('CONST');
const genero = 'Hombre';
log('genero',genero)
//genero = 'Mujer'; //Error de compilacion