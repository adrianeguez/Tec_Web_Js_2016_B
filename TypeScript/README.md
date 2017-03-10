# Typescript

## Prerequisito

Necesita tener instalado Nodejs.

## Instalar transpilador typescript

Para instalar abrimos una consola y ejecutamos el siguiente comando:

```
> npm install -g typescript
```

## Levantar el servidor

Para levantar el servidor necesitamos abrir dos consolas. Las consolas deben de estar abiertas en la carpeta que se quiera correr los ejemplos. Por ejemplo, si queremos aprender sobre *Variable Declarations*, las dos consolas abrimos en la siguiente carpeta:

```
-Typescript
  --Variable Declarations
```
#### Consola 1
Dentro de la *PRIMERA CONSOLA*, levantamos el transpilador de typescript con el siguiente comando con el nombre del archivo typescript dentro de la carpeta. En nuestro ejemplo el archivo se llama *Variable.ts*:
```
> tsc --outFile bundle.js --watch Variable.ts
```
#### Consola 2
Dentro de la *SEGUNDA CONSOLA*, corremos con node.js el comando *node* al archivo *bundle.js* que definimos en la anterior consola. Con nuestro ejemplo es de la siguiente manera:
```
> node bundle.js
```