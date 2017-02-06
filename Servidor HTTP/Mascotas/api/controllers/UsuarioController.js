/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */



module.exports = {

  crearUsuario: function (req, res) {
    //   Se accede asi: /Usuario/crearUsuario

    // Guardando todos los parametros en la variable parametros

    var parametros = req.allParams();
    console.log(parametros);
    console.log('sacudelo');
    console.log(req.method);


    if (req.method == 'POST') {
      if (parametros.nombres && parametros.apellidos) {
        //creo el usuario
        Usuario.create({
          nombres: parametros.nombres,
          apellidos: parametros.apellidos,
          correo: parametros.correo
        }).exec(function (error, usuarioCreado) {
          if (error) return res.serverError()
          sails.log.info(usuarioCreado);



          Usuario.find({
            skip: 1
          }).exec(function (error, usuariosEncontrados) {
            if (error) return res.serverError()
            sails.log.info(usuariosEncontrados);
            return res.view('vistas/listarUsuarios', {
              title: 'Lista de Usuarios',
              usuarios: usuariosEncontrados
            })
          });




        });
      } else {
        // bad Request
        return res.view('error', {
          title: 'Error',
          error: {
            descripcion: 'No envia todos los parametros'
          }
        });
      }
    } else {
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'Falla en el metodo HTTP'
        }
      });
    }

  },
  crearUsuarioForm: function (req, res) {

    var parametros = req.allParams();
    console.log(parametros);

    console.log('Metodo:', req.method);
    if (req.method == 'POST') {
      if (parametros.nombres && parametros.apellidos) {
        //creo el usuario
        console.log('Va a crear el usuario.')
        Usuario.create({
          nombres: parametros.nombres,
          apellidos: parametros.apellidos,
          correo: parametros.correo
        }).exec(function (error, usuarioCreado) {
          if (error) {
            return res.view('error', {
              title: 'Error',
              error: {
                descripcion: 'hubo un error enviando los parametros:',
                error,
                url: '/crearUsuario'
              }
            });
          }
          sails.log.info('Se creo el usuario: ', usuarioCreado);

          Usuario.find().exec(function (error, usuariosEncontrados) {
            if (error) return res.serverError()
            sails.log.info(usuariosEncontrados);
            return res.view('vistas/listarUsuarios', {
              title: 'Lista de Usuarios',
              usuarios: usuariosEncontrados
            })
          });
        });

      } else {
        // bad Request
        console.log('NO PARAMETROS');
        return res.view('error', {
          title: 'Error',
          error: {
            descripcion: 'No envia todos los parametros',
            url: '/crearUsuario'
          }
        });
      }
    } else {
      console.log('POST');
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'Falla en el metodo HTTP',
          url: '/crearUsuario'
        }
      });
    }

  },
  editarUsuarioForm: function (req, res) {

    var parametros = req.allParams();
    if (req.method == 'POST') {
      if (parametros.nombres && parametros.apellidos && parametros.id) {
        //creo el usuario
        console.log('Va a actualizar el usuario.')
        Usuario.update({
          id: parametros.id
        }, {
          nombres: parametros.nombres,
          apellidos: parametros.apellidos,
          correo: parametros.correo
        }).exec(function (error, usuarioCreado) {
          if (error) {
            return res.view('error', {
              title: 'Error',
              error: {
                descripcion: 'hubo un error enviando los parametros:',
                error,
                url: '/crearUsuario'
              }
            });
          }
          sails.log.info('Se actualizo el usuario: ', usuarioCreado);

          Usuario.find().exec(function (error, usuariosEncontrados) {
            if (error) return res.serverError()
            sails.log.info(usuariosEncontrados);
            return res.view('vistas/listarUsuarios', {
              title: 'Lista de Usuarios',
              usuarios: usuariosEncontrados
            })
          });

        });

      } else {
        // bad Request
        console.log('NO PARAMETROS');
        return res.view('error', {
          title: 'Error',
          error: {
            descripcion: 'No envia todos los parametros',
            url: '/crearUsuario'
          }
        });
      }
    } else {
      console.log('POST');
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'Falla en el metodo HTTP',
          url: '/crearUsuario'
        }
      });
    }

  }

};
