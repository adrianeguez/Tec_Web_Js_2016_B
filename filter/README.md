# Filter

```

let elementos = ["a",2,3]

//Filter filtra un arreglo y devuelve los elementos
//que cumplan la condición del filtro

var nuevoArregloDeElementos = elementos.filter(function(value, key) {
  console.log("value",value)
  console.log("key",key)
  return value=="a"||value==2
});

nuevoArregloDeElementos;

```
