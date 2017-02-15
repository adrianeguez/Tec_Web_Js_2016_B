
module.exports = function(req, res, next) {
    
    var parametros = req.allParams();
    
sails.log.info()

  if (parametros.id==req.session.credencialSegura.id) {
    return next();
  }
  return res.forbidden('USTED NO PUEDE EDITAR LA INFORMACIÓN DE OTROS USUARIOS');
    
};
