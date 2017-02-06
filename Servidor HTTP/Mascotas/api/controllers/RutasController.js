/**
 * RutasController
 *
 * @description :: Server-side logic for managing Rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  home: function (req, res) {

    // res.view(String: Nombre vista, Datos JSON)
    return res.view('vistas/home', {
      titulo: 'Inicio',
      title: 'Inicio',
      numero: 1,
      mauricio: {
        nombre: 'Mauricio',
        cedula: 1718137159
      },
      usuarios: []
    })
  },
  crearUsuario: function (req, res) {

    return res.view('vistas/crearUsuario', {
      title: 'Crear Usuarios'
    })
  },
  editarUsuario: function (req, res) {

    var parametros = req.allParams();
    console.log(parametros);
    if (parametros.id) {

      Usuario.findOne({
        id: parametros.id
      }).exec(function (error, usuarioEncontrado) {
        if (error) return res.serverError()
        return res.view('vistas/editarUsuario', {
          title: 'Editar usuario - ' + usuarioEncontrado.apellidos,
          usuario: usuarioEncontrado
        })
      });

    } else {
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'No existe el ID'
        }
      });
    }
  },
  listarUsuarios: function (req, res) {

    Usuario.find().exec(function (error, usuariosEncontrados) {
      if (error) return res.serverError()
      sails.log.info(usuariosEncontrados);
      return res.view('vistas/listarUsuarios', {
        title: 'Lista de Usuarios',
        usuarios: usuariosEncontrados
      })
    });
  }

};
