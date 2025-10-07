import React from 'react'
import Home from "./routes/Home"
import Contato from "./routes/Contato"
import Login from "./routes/Login"
import Planos from "./routes/Planos"
import Sobre from "./routes/Sobre"
import Treinos from './routes/Treinos'
import Error from './routes/Error'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contato" element={<Contato/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/planos" element={<Planos/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/treinos" element={<Treinos/>}/>
        <Route path="*" element={<Error/>}/>
        
      </Routes>
    </Router>
  )
}

export default App
