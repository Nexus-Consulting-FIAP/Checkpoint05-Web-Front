const express = require("express")
const fs = require("fs")
const path = require("path") 
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cors = require("cors")
const app = express();
const port = 5001;
app.use(cors());
app.use(express.json());


// STRING PARA RENOVAÇÃO DA CHAVE DE AUTENTICAÇÃO (TOKEN)
const Secret_Key = "123456789"
// LOCAL ONDE ESTÁ O ARQUIVO DO BANCO DE DADOS
const localDados = path.join(__dirname, 'data/usuarios.json')

const consultarUsuarios=()=>{
    const data = fs.readFileSync(localDados, "utf-8");
    return JSON.parse(data);
}

// FUNCAO PARA GRAVAR OS DADOS NO ARQUIVO JSON
const salvarUsuarios=(users)=>{
    fs.writeFileSync(localDados,JSON.stringify(users,null,2))
}

// ROTA PARA REGISTRAR OS USUARIOS 
app.post("/register", async(req, res)=>{
    const {email,senha} = req.body;
    if(!email || senha){
        return res.status(400).json({message: "Campos obrigatórios."})
    }
    const users = consultarUsuarios();
    if(users.find(user=>user.email == email)){
        return res.status(400).json({message: "Email já cadastrado no banco de dados."})
    }

    // CRIPTOGRAFANDO A SENHA
    const hashSenha = await bcrypt.hash(senha,10)
    const novoUsuario = {id:Date.now(),email, senha:hashSenha};
    users.push(novoUsuario);
    salvarUsuarios(users);
    res.status(200).json({message: "Usuário registrado com sucesso!"})

})

//ROTA LOGIN

app.post("/login", async (req,res)=>{
    const {email, senha} = req.body;
    const users = consultarUsuarios();
    const user = users.find(user=>user.email === email);

    if(!user){
        return res.status(400).json({message: "Usuário/senha inválidos."})
    }
    const senhaValida = await bcrypt.compare(senha, user.senha);
    if(!senhaValida){
        return res.status(400).json({message: "Senha inválida."})
    }

    //AUTENTICAR JWT
    const token = jwt.sign({id:user.id,email:user.email}, Secret_Key,{expiresIn:"10m"});
    res.json({message:"Login realizado com sucesso!", token})
})
