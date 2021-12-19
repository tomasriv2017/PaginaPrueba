const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/ecommerce-mongo")
  .then((db) => console.log("Db connected"))
  .catch((err) => console.log(err));
