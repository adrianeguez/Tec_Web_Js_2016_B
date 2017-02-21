# Map

```
let elementos = ["a",2,3]

//Map transforma el arreglo en un nuevo arreglo

var nuevoArregloDeElementos = elementos.map(function(value, key) {
  console.log("value",value)
  console.log("key",key)
  return value+" Hola Amigos"
});

nuevoArregloDeElementos;
```