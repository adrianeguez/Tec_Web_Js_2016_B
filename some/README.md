# Some

```
let elementos = ["a",1,2,true,null,[1,2,3]]

//Some devuelve TRUE o FALSE si se cumple al menos
//en un elemento del arreglo una condición

var hayUnString = elementos.some(function(value, key) {
  console.log("value",value)
  console.log("key",key)
  return typeof value == "string"
});

hayUnString;
```