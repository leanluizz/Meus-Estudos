const Sequelize = require("sequelize")
const sequelize = new Sequelize('sistemacadastro','root','Pcdfgh135790!', {
    host: "localhost",
    dialect: "mysql"
})
// TEM QUE DAR O NODE NO ARQUIVO PARA CRIAR O BANCO DE DADOS
const Postagem = sequelize.define("postagem", {
      titulo:{
          type:
             Sequelize.STRING
      },
      conteudo:{
          type:
             Sequelize.STRING
      }
})

const Usuarios2 = sequelize.define("usuarios2",{
    nome:{
        type:
           Sequelize.STRING
    },
    email:{
         type:
            Sequelize.STRING
    },
    idade:{
        type:
            Sequelize.INTEGER
    }
})

Usuarios2.create({
    nome: "Masterson Luiz Gomes",
    email:"masmen09@gmail.com",
    idade: 18
})

Usuarios2.sync({force: true});
