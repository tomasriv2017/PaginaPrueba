const mongoose = require("mongoose");
const userModel = require('../models/user');
const rolUserModel = require('../models/rolUser');

/** CONFIGURACIÓN CONEXION PARA LA BD */
mongoose
  .connect("mongodb://127.0.0.1:27017/ecommerce-mongo")
  .then((db)=> console.log("Db connected"))
  .catch((err) => console.log(err));

/***MAPEOS DE LAS CLASES */
const UserModel = mongoose.model('user', userModel);
const RolUserModel = mongoose.model('rolUser', rolUserModel);

module.exports = {
  UserModel,
  RolUserModel
}