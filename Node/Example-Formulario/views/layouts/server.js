const express = require("express");
const app = express();
const Sequelize = require("sequelize");
const Port = 1543

app.set("view engine", "ejs")

app.listen(1543, function(){
     console.log("Server loading");
})