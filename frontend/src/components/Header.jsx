import React from 'react'

const Header = () => {
  return (
    <div className="p-5 h-25 w-screen flex justify-between items-center bg-cyan-700 fixed top-0 left-0 z-1">

      <div>
        <h1 className="text-3xl font-bold text-white">NexusGym</h1>
      </div>

      <div className="text-xl">
        <ul className="flex gap-4">
          <li><a href="Home" className="text-white hover:text-yellow-300">Home</a></li>
          <li><a href="Planos" className="text-white hover:text-yellow-300">Planos</a></li>
          <li><a href="Treinos" className="text-white hover:text-yellow-300">Treino</a></li>
          <li><a href="Contato" className="text-white hover:text-yellow-300">Contato</a></li>
        </ul>
      </div>

      <div className="text-xl flex gap-2">
        <a href="Cadastro" className="text-white hover:text-yellow-300"><button className="border-2 rounded-4xl p-2">Cadastro</button></a>
        <a href="Login" className="text-white hover:text-yellow-300"><button className="border-2 rounded-4xl p-2">Login</button></a>
      </div>

    </div>
  )
}

export default Header
