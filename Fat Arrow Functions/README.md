# Fat Arrow Functions

```
function saludar(usuario){
  console.log(`Hola ${usuario}`);
}

saludar("Adrian")

let saludarArrow1 = ()=> console.log(`Hola`);

saludarArrow1();

let saludarArrow2 = (usuario)=> console.log(`Hola ${usuario}`);

saludarArrow2("Vicente");

let saludarArrow3 = (usuario)=>{
	 console.log(`Hola una vez ${usuario}`)
   console.log(`Hola dos veces ${usuario}`)
   console.log(`Hola tres veces ${usuario}`)
};

saludarArrow3("Vicente");


let saludarArrow4 = (usuario1, usuario2)=>{
	 console.log(`El Usuario 1 es: ${usuario1}`)
   console.log(`El Usuario 2 es: ${usuario2}`)
   console.log(`Usuario ${usuario1} twitteo sobre Usuario ${usuario2}`)
};

saludarArrow4("Eguez","Sarzosa");



```