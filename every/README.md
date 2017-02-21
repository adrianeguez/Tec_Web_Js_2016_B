# Every

```
let elementos = ["a","1","2","3"]

//Devuelve TRUE o FALSE si TODOS los elementos del arreglo
//cumplen una condición dada

var todosSonString = elementos.every(function(value, key) {
  console.log("value",value)
  console.log("key",key)
  return typeof value == "string"
});

todosSonString;
```
