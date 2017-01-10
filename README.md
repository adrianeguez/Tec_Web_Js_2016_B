## Comandos Importantes

### Instalar sailsjs

Sailsjs es un servidor web que se conecta a bases de datos y puede funcionar con aplicaciones en tiempo real, ayudandonos a crear REST APIs.

´´´
> npm install -g sails
´´´

El -g nos deja utilizarlo globalmente.

### Crear un proyecto en Sailsjs

´´´
> sails new NombreProyecto
´´´

### Levantar el servidor

´´´
> sails lift
´´´


´´´
> node app.js
´´´

El sails les pide opciones si no estan definidas, las opciones son:

- 1: SAFE MODE no se va a alterar la base de datos
- 2: ALTER MODE se va a alterar la base de datos si nosotros hicimos cambios en los modelos por ejemplo
- 3: DELETE MODE borra todos los datos de la base y vuelve a crear los modelos

## Servidor Web de Sailsjs

El servidor web de sails se encuentra localizado en la carpeta **assets**


## Generar Controladores Sailsjs

´´´
> sails generate controller NombreControlador
´´´

## Generar Modelos en Sailsjs

´´´
> sails generate model NombreModelo
´´´

## Generar APIs en Sailsjs

´´´
> sails generate api NombreAPI
´´´

Un Api es la fusión de un **Controlador** y de un **Modelo**.

# API REST

## Modelo Usuario

### Crear Usuarios

URL:

´http://localhost:1337/Usuario´

Metodo HTTP:

´POST´

Datos:


´´´javascript
{
    nombre:'Adrian',
    apellido:'Eguez',
    correo:'adrian.eguez@epn.edu.ec'
}
´´´


### Buscar Usuarios

URL:

´http://localhost:1337/Usuario´

Metodo HTTP:

´GET´

Datos:


´´´javascript
[
  {
    "nombres": "Adrian",
    "apellidos": "Eguez",
    "correo": "adrian.eguez@epn.edu.ec",
    "createdAt": "2016-12-21T18:57:16.362Z",
    "updatedAt": "2016-12-21T18:57:16.362Z",
    "id": 1
  },
  {
    "nombress": "Vicente",
    "apellidoss": "Sarzosa",
    "correos": "vicente.sarzosa@epn.edu.ec",
    "correo": "correo@invalido.com",
    "createdAt": "2016-12-21T18:58:00.888Z",
    "updatedAt": "2016-12-21T19:06:31.603Z",
    "id": 2,
    "nombre": "Carlos",
    "casa": "Azul",
    "mouse": "negro"
  }
]
´´´

### Buscar Usuario por ID

URL:

´http://localhost:1337/Usuario/1´

Metodo HTTP:

´GET´

Datos:


´´´javascript
  {
    "nombres": "Adrian",
    "apellidos": "Eguez",
    "correo": "adrian.eguez@epn.edu.ec",
    "createdAt": "2016-12-21T18:57:16.362Z",
    "updatedAt": "2016-12-21T18:57:16.362Z",
    "id": 1
  }
´´´

### Borrar Usuarios

URL:

´http://localhost:1337/Usuario/1´

Metodo HTTP:

´DELETE´

Datos:


´´´javascript
  {
    "nombres": "Adrian",
    "apellidos": "Eguez",
    "correo": "adrian.eguez@epn.edu.ec",
    "createdAt": "2016-12-21T18:57:16.362Z",
    "updatedAt": "2016-12-21T18:57:16.362Z",
    "id": 1
  }
´´´

### Actualizar Usuarios

URL:

´http://localhost:1337/Usuario/1´

Metodo HTTP:

´PUT´

Datos:


´´´javascript
  {
    "nombres": "Adrian",
    "apellidos": "Eguez",
    "correo": "adrian.eguez@epn.edu.ec",
    "createdAt": "2016-12-21T18:57:16.362Z",
    "updatedAt": "2016-12-21T18:57:16.362Z",
    "id": 1
  }
´´´


## Blueprint API

### Shortcuts

Con los shortcuts tenemos la posibilidad de crear borrar y actualizar mediante solamente un URL en sails


´´´
http://localhost:1337/Usuario/create?nombres=Adrian&apellidos=Lucho
    
http://localhost:1337/Usuario/destroy/1
    
http://localhost:1337/Usuario/update/1?nombres=Fernando

´´´


