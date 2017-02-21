# Reduce
```
let elementos = [1,2,3,4]

// Reduce suma, resta, anade, elimina, muta un elemento dependiendo de una condición
// se puede definir como empieza esta condicion

let sum = 0

var sumaElementos = elementos.reduce(function(sum, value) {
  console.log("sum",sum)
  console.log("value",value)
  return sum + value
},0);
//10 = 1 + 2 + 3 + 4
sumaElementos;

sum = 0;

var restaElementos = elementos.reduce(function(sum, value) {
  console.log("sum",sum)
  console.log("value",value)
  return sum - value
},25);
//15 = 25 - 1 - 2 - 3 - 4
restaElementos;


let usuarios = [
  {
    profesion:"Doctor",
    nombre:"Pedro"
  },
  {
    profesion:"Medico",
    nombre:"Juan"
  },
  {
    profesion:"Ingeniero",
    nombre:"Andres"
  },
  {
    profesion:"Ingeniero",
    nombre:"Mateo"
  }
]


var usuariosReducidos = usuarios.reduce(function(anterior, value) {
  console.log("anterior",anterior)
  console.log("value",value)
  if(value.profesion=="Ingeniero"){
    anterior.push(value);
  }

  return anterior
},[{
    profesion:"Ingeniero",
    nombre:"Ivonne"
  }]);


//Devuelve usuarios con profesion Ingeniero.
usuariosReducidos;
```