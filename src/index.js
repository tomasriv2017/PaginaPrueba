const express = require("express");
const {Router} = require('express');
const morgan = require('morgan');
const dotenv = require("dotenv");
const path = require('path'); //para poder trabajar con rutas que sirvan para cualquier S.O

dotenv.config({
  //path: __dirname + "/.env.local", //esto no es lo mas optimo ya que solo sirve con windows
  path: path.join(__dirname, '/.env.local'), //de esta forma la ruta es entendible en cualquier S.O
});

//DATABASE CONNECTION
require("./database/connection");

//INIT
const app = express();

//MIDDLEWARES------------------------------------------
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(morgan('dev'));


//CONFIG
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});


//ROUTES
const router = Router();
const usuarioController = require('./controllers/userController');
app.use("/usuarios", router.post("/new", usuarioController.agregarUsuario));
app.use("/usuarios", router.get("/:id", usuarioController.buscarUsuarioPorId));


