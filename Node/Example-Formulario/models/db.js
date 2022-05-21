const Sequelize = require("sequelize");
// TEM QUE DAR O NODE NO ARQUIVO PARA CRIAR O BANCO DE DADOS
// LOGIN COM MYSQL
const sequelize = new Sequelize("formulario_post", "root", "Pcdfgh135790!", {
    host: "localhost",
    dialect: "mysql"
});

const Post = sequelize.define("postagens", {
    titulo: {
        type: Sequelize.STRING
    },
    posts: {
        type: Sequelize.STRING
    }
})

module.exports = Post