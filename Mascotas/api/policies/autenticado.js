

module.exports = function(req, res, next) {

  if (req.session.credencialSegura) {
    return next();
  }
  return res.forbidden('USTED NO PUEDE ENTRAR A ESTA VISTA');
    
};
