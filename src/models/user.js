const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = new Schema({
  nombre: {type: String, required: true},
  apellido: {type: String, required: true},
  dni: {type: String, required: true},
  email: {type: String, required: true},
  username: {type: String, required: true},
  password: {type: String, required: true},
  rolUser: {type: String, required: true}
});