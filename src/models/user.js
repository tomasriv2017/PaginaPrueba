const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = new Schema({
  nombre: String,
  apellido: String,
  dni: String,
  email: String,
  username: String,
  password: String,
  rolUser: String
});