import React from 'react'

const Error = () => {
  return (
    <div className="bg-black flex items-center justify-center h-screen">
      <div>
        <h1 className="text-6xl text-white font-bold mb-4">404</h1>
        <p className="text-xl text-white mb-6">Página não encontrada</p>
        <a href="/" className="px-6 py-2 bg-cyan-600 rounded-lg hover:bg-blue-700 transition">
          Voltar para o início
        </a>
      </div>
    </div>
  )
}

export default Error
