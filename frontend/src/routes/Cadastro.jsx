import React from 'react'
import Header from '../components/Header'

function Cadastro() {
  return (
   <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-4">
      <div className="flex bg-zinc-800 rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
        
        {/* Lado Esquerdo - Imagem */}
        <div className="hidden md:block w-1/2">
          <img 
            src="/cadastro_imagem.png" 
            alt="Pessoa treinando com um instrutor" 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Lado Direito - Formulário de Cadastro */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <div className="bg-cyan-600 text-white text-center py-4 rounded-lg -mt-16 md:-mt-0 md:mb-8 text-3xl font-bold tracking-wide">
            Cadastro
          </div>

          <form className="mt-8 space-y-6">
            <div>
              <label htmlFor="nome" className="block text-white text-lg font-medium mb-1">
                Nome:
              </label>
              <input
                type="text"
                id="nome"
                className="w-full bg-transparent border-b-2 border-gray-500 focus:border-cyan-500 outline-none text-white text-lg pb-1"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white text-lg font-medium mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-transparent border-b-2 border-gray-500 focus:border-cyan-500 outline-none text-white text-lg pb-1"
              />
            </div>

            <div>
              <label htmlFor="senha" className="block text-white text-lg font-medium mb-1">
                Senha:
              </label>
              <input
                type="password"
                id="senha"
                className="w-full bg-transparent border-b-2 border-gray-500 focus:border-cyan-500 outline-none text-white text-lg pb-1"
              />
            </div>

            <button
              type="submit"
              className="bg-zinc-900 hover:bg-black text-yellow-500 font-bold text-lg py-2 px-12 rounded-full transition-colors w-full"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cadastro