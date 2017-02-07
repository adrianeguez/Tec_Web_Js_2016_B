/**
 * Administrador.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      nombres:{
          type:'string',
          minLength:5
      },
      apellidos:{
          type:'string',
          minLength:5
      },
      correo:{
          type:'string',
          email:true,
          defaultsTo:'correo@invalido.com'
      },
      tipo:{
          type:'string',
          enum:['Perfil','Usuarios','Correos'],
          defaultsTo:'Usuarios'
      }

  }
};








