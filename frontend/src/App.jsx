import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header"

import Home from "./routes/Home";
import Contato from "./routes/Contato";
import Login from "./routes/Login";
import Planos from "./routes/Planos";
import Sobre from "./routes/Sobre";
import Treinos from "./routes/Treinos";
import Error from "./routes/Error";
import Cadastro from "./routes/Cadastro";

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />      {/* página inicial */}
        <Route path="/home" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/login" element={<Login />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/treinos" element={<Treinos />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="*" element={<Error />} />    {/* rota para erros */}
      </Routes>
    </Router>
  );
};

export default App;
