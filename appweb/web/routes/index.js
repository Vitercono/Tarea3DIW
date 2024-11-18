var express = require('express');
var router = express.Router();

var datos = require("../data/dataprovider");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/home');
});

router.get('/home', function(req,res){
  res.render('home', {title: "Inicio"})
});

router.get('/login', function(req,res){
  res.render('login', {title: "Inicio de sesión"})
});

router.get('/usuario', function(req,res){
  var listado = datos.getAllPeliculas();
  res.render('usuario', {title: "Zona de usuario", listado:listado})
});

router.get('/contacto', function(req,res){
  res.render('contacto', {title: "Contacto"})
});

router.get('/pelicula/:id', function(req,res){
  const id = req.params.id;
  const pelicula = datos.getPeliculaById(id);
  res.render('/pelicula', {title: "Pelicula", pelicula:pelicula})
})

router.post('/login', function(req,res){
  const email = req.body.email;
  const pwd = req.body.pwd;

  let user = datos.validateUser(email,pwd);

  if(user){
    res.redirect('/home')
  }
})
module.exports = router;
