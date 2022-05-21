const Express = require("express")
const {engine} = require("express-handlebars")
const bodyPars = require("body-parser")
const app = Express();
const Post = require("./models/db")

// CONFIGURAÇÕES
app.engine("handlebars", engine({defaultLayout:"main"}))
app.set("view engine", "handlebars")


app.use(bodyPars.urlencoded({extended:false}))
app.use(bodyPars.json())

// ROTAS
// LIGAÇÃO COM BD
app.post("/add", function(req, res){
   Post.create({
       titulo:req.body.titulo,
       conteudo:req.body.posts
   }).then(function(){
       res.send("Post enviado com sucesso")
   }).catch(function(erro){
       res.send(erro)
   })
})

// PORTA
app.listen(5050, function(){
    console.log("Server loading-Express");
});