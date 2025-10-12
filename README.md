# 🚀 Projeto Academia Inteligente – Checkpoint 05  

## 👥 Integrantes

| Nome | RM |
|--|--|
| [Lucas de Almeida Pires](https://github.com/LucasAllPires) | RM: 562757 |
| [Daniel Oliveira de Souza](https://github.com/xdlimao) | RM: 566284 |
| [João Pedro Raimundo Marcilio](https://github.com/Jonausss) | RM: 561603 |
| [Lucas Zanella Clemente](https://github.com/LucasZanellaClemente) | RM: 563880 |
| [João Pedro Ribeiro Palermo](https://github.com/jpPalermo) | RM: 562077 |
| [Felipe Campos Vianna Peres](https://github.com/camp0s0s) | RM: 562752 |

---

## 🧩 Dependências do Projeto

### **Backend (Node.js)**  

| Pacote | Versão | Função |
|--|--|--|
| **bcrypt** | ^6.0.0 | Criptografia de senhas |
| **cors** | ^2.8.5 | Controle de acesso entre domínios |
| **express** | ^5.1.0 | Framework para criação do servidor HTTP |
| **jsonwebtoken** | ^9.0.2 | Autenticação via JWT |
| **nodemon** | ^3.1.10 | Reinicialização automática em desenvolvimento |

**Scripts disponíveis**
| Script | Comando | Descrição |
|--|--|--|
| start | `node server.js` | Executa o servidor em produção |
| dev | `nodemon server.js` | Executa o servidor em modo de desenvolvimento |

---

### **Frontend (React + Vite)**  

| Pacote | Versão | Função |
|--|--|--|
| **@tailwindcss/vite** | ^4.1.14 | Integração do Tailwind com Vite |
| **axios** | ^1.12.2 | Requisições HTTP |
| **hamburger-react** | ^2.5.2 | Ícone de menu responsivo |
| **nodemon** | ^3.1.10 | Ferramenta auxiliar para desenvolvimento |
| **react** | ^19.1.1 | Biblioteca principal para interfaces |
| **react-dom** | ^19.1.1 | Renderização no DOM |
| **react-icons** | ^5.5.0 | Biblioteca de ícones |
| **react-router-dom** | ^7.9.3 | Roteamento entre páginas |
| **tailwindcss** | ^4.1.14 | Framework CSS utilitário |

**DevDependencies**
| Pacote | Versão | Função |
|--|--|--|
| **@eslint/js** | ^9.36.0 | Configuração base do ESLint |
| **@types/react** | ^19.1.16 | Tipagens para React |
| **@types/react-dom** | ^19.1.9 | Tipagens para React DOM |
| **@vitejs/plugin-react** | ^5.0.4 | Suporte React no Vite |
| **eslint** | ^9.36.0 | Linter para manter o código limpo |
| **eslint-plugin-react-hooks** | ^5.2.0 | Boas práticas de hooks |
| **eslint-plugin-react-refresh** | ^0.4.22 | Hot reload do React |
| **globals** | ^16.4.0 | Variáveis globais padrão |
| **vite** | ^7.1.7 | Bundler e servidor de desenvolvimento |

**Scripts disponíveis**
| Script | Comando | Descrição |
|--|--|--|
| dev | `vite` | Executa o projeto em modo de desenvolvimento |
| build | `vite build` | Gera a build de produção |
| lint | `eslint .` | Analisa o código com ESLint |
| preview | `vite preview` | Pré-visualiza a build de produção |

---

## 💡 Descrição do Projeto

Este projeto foi desenvolvido pelo **Nexus Group** da *Academia Inteligente*, com o objetivo de criar uma solução inovadora que transforma a experiência de treino, tornando-a mais personalizada e eficiente.  

O tema do projeto é uma **Academia Inteligente**, e o trabalho foi desenvolvido seguindo a estrutura de pastas e os requisitos de código apresentados em sala de aula.

---

## 📃 Funcionalidades e Escopo do Projeto

O projeto consiste em um sistema completo, dividido em **backend** e **frontend**, com as seguintes funcionalidades:

### **Backend 💾**

Desenvolvido em **Node.js**, o backend é responsável por toda a lógica de negócio e manipulação de dados.  
A estrutura de pastas foi organizada para facilitar a escalabilidade e manutenção.

- **Rotas**: O backend gerencia as seguintes rotas e requisições:
  - [x] **Home**: Informações gerais do sistema  
  - [x] **Planos**: Gestão de planos de membresia  
  - [x] **Treinos**: Gestão de treinos personalizados  
  - [x] **Sobre**: Informações sobre o projeto  
  - [x] **Contato**: Formulário de contato  
  - [x] **Login**: Autenticação de usuários  

- **Segurança**:  
  A rota de login utiliza **JWT (JSON Web Token)** para autenticação e **bcrypt** para criptografia de senhas.  

- **CRUD**:  
  O sistema possui funcionalidades de **Create, Read, Update, Delete** para planos e treinos, permitindo total personalização.

---

### **Frontend 💻**

Construído com **React + Vite**, o frontend é a interface do usuário, com componentes modulares e layout responsivo.

- [x] **Componentização**: Home, Planos, Treinos, Sobre, Contato e Login  
- [x] **Estilização**: Feita com **Tailwind CSS**, garantindo design moderno e adaptável  
- [x] **Dados Mockados**: Utilização de arquivo `.json` como banco de dados simulado  

---

## 🖼️ Visual do Site

### Home/Landing Page
![Home](https://github.com/user-attachments/assets/d2bcf104-c2d2-4d8e-9e7e-9e08b826953b)

### Planos
![Planos](https://github.com/user-attachments/assets/7e0f2135-b739-4e78-8dcb-ac997ef8b141)

### Treinos/Aulas
![Treinos](https://github.com/user-attachments/assets/cbe090b6-e38d-4023-bddf-3c5cf60b679e)

### Sobre Nós
![Sobre Nós](https://github.com/user-attachments/assets/5db5d2a8-c9c9-44ec-b094-c41d8a015a0b)

### Contato
![Contato](https://github.com/user-attachments/assets/10b425ff-4c3c-4b1c-9cdf-4244c6de7b9a)

### Cadastro
![Cadastro](https://github.com/user-attachments/assets/6d2d22d5-cea8-49e3-9bfd-1972e518929e)

### Login
![Login](https://github.com/user-attachments/assets/69375812-e0b7-45cc-af88-47da63885abd)

---

> Criado pelo [**Grupo Nexus**](https://github.com/Nexus-Consulting-FIAP)
