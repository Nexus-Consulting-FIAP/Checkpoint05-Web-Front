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

  const Secret_Key = process.env.SECRET_KEY || "12345"; 

  const localDados = path.join(__dirname, "data/users.json");

  const consultUsers = () => {
    try {
      const data = fs.readFileSync(localDados, "utf-8");
      return JSON.parse(data || "[]");
    } catch (err) {
      console.error("Erro lendo usuários:", err);
      return [];
    }
  };
  const saveUsers = (users) => {
    try {
      fs.writeFileSync(localDados, JSON.stringify(users, null, 2));
    } catch (err) {
      console.error("Erro salvando usuários:", err);
      throw err;
    }
  };
  const autenticateToken = (req, res, next) => {
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

  app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Campos obrigatórios." });
    }

    const users = consultUsers();
    if (users.find((u) => u.email === email)) {
      return res.status(400).json({ message: "Email já cadastrado no banco de dados." });
    }

    try {
      const hashPassword = await bcrypt.hash(password, 10);
      const newUser = { id: Date.now(), name, email, password: hashPassword, subscription: "free"};
      users.push(newUser);
      saveUsers(users);
      return res.status(201).json({ message: "Usuário registrado com sucesso!" });
    } catch (err) {
      console.error("Erro no register:", err);
      return res.status(500).json({ message: "Erro interno." });
    }
  });
  app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const users = consultUsers();
    const user = users.find((u) => u.email === email);
    const userPayload = { 
      id: user.id, 
      email: user.email,
      name: user.name,
      subscription: user.subscription
  };

    if (!user) {
      return res.status(401).json({ message: "Usuário/password inválidos." });
    }

    const passwordValida = await bcrypt.compare(password, user.password);
    if (!passwordValida) {
      return res.status(401).json({ message: "Usuário/password inválidos." });
    }

    // AUTENTICAÇÃO JWTOKEN
    const token = jwt.sign({ id: user.id, email: user.email }, Secret_Key, { expiresIn: "10m" });
    return res.json({ message: "Login realizado com sucesso!", token, user: userPayload });
  });
  app.get("/home", autenticateToken, (req, res) => {
    res.json({ message: "Acesso autorizado, Bem-vindo", user: req.user });
  });
  app.listen(port, () => {
    console.log(`Server rodando em http://localhost:${port}`);
  });
