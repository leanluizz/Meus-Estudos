const express = require("express");
const app = express();
const handlebars = require("express-handlebars");

//express funciona com callbacks
app.get("/", function(req, res){
    res.send("Seja Bem-vindo")
})
app.get("/blog", function(req, res){
    res.send("Seja Bem-vindo ao meu blog")
})
app.get("/sobre", function(req, res){
    res.send("Seja Bem-vindo ao meu sobre")
})
//Parâmetros são com :
app.get("/nickname/:nome", function(req, res){
       res.send("Olá")
})

app.listen(8081, function(){
    console.log("Server loading-Express");
});