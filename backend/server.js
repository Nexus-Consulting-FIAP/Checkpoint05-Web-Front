const express = require("express");
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

// Define a chave secreta usada para autenticação (pega do ambiente ou usa "12345" como padrão)
const Secret_Key = process.env.SECRET_KEY || "12345"; 

// Caminho do arquivo JSON
const localDados = path.join(__dirname, "data", "usuarios.json");

// Lê o arquivo JSON e retorna os usuários
const consultarUsuarios = () => {
  try {
    const data = fs.readFileSync(localDados, "utf-8");
    return JSON.parse(data || "[]");
  } catch (err) {
    console.error("Erro lendo usuários:", err);
    return [];
  }
};

// Salva os usuários no arquivo JSON
const salvarUsuarios = (users) => {
  try {
    fs.writeFileSync(localDados, JSON.stringify(users, null, 2));
  } catch (err) {
    console.error("Erro salvando usuários:", err);
    throw err;
  }
};

// ROTA PARA REGISTRAR OS USUÁRIOS
app.post("/register", async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ message: "Campos obrigatórios." });
  }

  const users = consultarUsuarios();

  if (users.find((u) => u.email === email)) {
    return res.status(400).json({ message: "Email já cadastrado no banco de dados." });
  }

  try {
    const hashSenha = await bcrypt.hash(senha, 10);
    const novoUsuario = { id: Date.now(), email, senha: hashSenha };
    users.push(novoUsuario);
    salvarUsuarios(users);
    return res.status(201).json({ message: "Usuário registrado com sucesso!" });
  } catch (err) {
    console.error("Erro no register:", err);
    return res.status(500).json({ message: "Erro interno." });
  }
});

// ROTA LOGIN
app.post("/login", async (req, res) => {
  const { email, senha } = req.body;
  const users = consultarUsuarios();
  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(401).json({ message: "Usuário/senha inválidos." });
  }

  const senhaValida = await bcrypt.compare(senha, user.senha);
  if (!senhaValida) {
    return res.status(401).json({ message: "Usuário/senha inválidos." });
  }

  // AUTENTICAÇÃO JWTOKEN
  const token = jwt.sign({ id: user.id, email: user.email }, Secret_Key, { expiresIn: "10m" });
  return res.json({ message: "Login realizado com sucesso!", token });
});

// MIDDLEWARE DE AUTENTICAÇÃO
const autenticarToken = (req, res, next) => {
  // Pega o cabeçalho "Authorization" (ex: "Bearer <token>")
  const authHeader = req.get("authorization");
  // Se existir, pega só o token
  const token = authHeader?.split(" ")[1];

  if (!token) return res.sendStatus(401); // sem token

  try {
    const payload = jwt.verify(token, Secret_Key); // lança se inválido/expirado
    req.user = payload;
    next();
  } catch (err) {
    return res.sendStatus(403); // token inválido/expirado
  }
};

// ROTA PRINCIPAL
app.get("/home", autenticarToken, (req, res) => {
  res.json({ message: "Acesso autorizado, Bem-vindo", user: req.user });
});

// Inicializa servidor
app.listen(port, () => {
  console.log(`Server rodando em http://localhost:${port}`);
});
