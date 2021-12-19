const express = require("express");
const dotenv = require("dotenv");

dotenv.config({
  path: __dirname + "/.env.local",
});

require("./database/connection");
require("./models/user");

//INIT
const app = express();

//CONFIG
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
