import React from 'react'

const Header = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-700">Nexus gym</h1>
        <h2 className="mt-2 text-gray-700">
          <ul>
            <li><a href="Home">Home</a></li>
            <li><a href="Planos">Planos</a></li>
            <li><a href="Treinos">Treino</a></li>
            <li><a href="Contato">Contato</a></li>
            <li><a href="Cadastro">Cadastro</a></li>
            <li><a href="Login">Login</a></li>
          </ul>
        </h2>
    </div>
  )
}

export default Header
