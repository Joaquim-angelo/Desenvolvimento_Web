//Geralmente, para que esse tipo de aplicação funcione o node js deve estar instalado

//Criando variáveis para acessar o backand

//express: framework do nodejs para auxiliar na criação de servidores
const express = require("express");
//requerido o uso do mysql
const mysql = require("mysql2");
//cors: usado para o controle de acesso ao servidor
const cors = require("cors");

//Criando o servido app
const app = express();
//liberando o acesso ao backand
app.use(cors());
//fazendo o servidor compreender JSON
app.use(express.json());

//Um banco de dados mysql já precisa existir

// criando conexão com banco de dados
const banco = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", 
    database: "exemplo_db"
});

banco.connect(err => {
    if (err) {
        console.error("Erro ao conectar:", err);
    } else {
        console.log("Conectado ao MySQL");
    }
});

// post: envia dados.
app.post("/usuarios", (req, res) => {
    //tem-se uma fuction com dois parâmetros.
    //req: elemento requerido
    //res: elemento de resposta

    const { nome, email } = req.body;

    //query: método para enviar comandos ao SQL
    const sql = "INSERT INTO usuarios (nome, email) VALUES (?, ?)";
    banco.query(sql, [nome, email], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json({ message: "Usuário cadastrado!" });
    });
});

// get: recebe dados.
app.get("/usuarios", (req, res) => {
    banco.query("SELECT * FROM usuarios", (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
});

// listen: exibe dados
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});