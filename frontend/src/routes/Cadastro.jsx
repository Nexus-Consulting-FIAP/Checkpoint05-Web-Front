import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const API_URL = 'http://localhost:5001'

function Cadastro() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const navigate = useNavigate()

  const handleRegister = async(e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${API_URL}/register`, {name, email, password})
      setMessage(response.data.message)
      setTimeout(() => navigate('/'), 2000)
    } catch (error) {
      setMessage(error.response.data.message || 'Erro ao registrar usuário')
    }
  }

  return (
   <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
      <div className="flex bg-zinc-800 rounded-lg shadow-lg overflow-hidden mt-20 max-w-4xl w-full">

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

          <form className="mt-8 space-y-6" onSubmit={handleRegister}>
            <div>
              <label htmlFor="nome" className="block text-white text-lg font-medium mb-1">
                Nome:
              </label>
              <input
                type="text"
                id="nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b-2 border-gray-500 focus:border-cyan-500 outline-none text-white text-lg pb-1"
                required
              />
            </div>

            <div>
              <label htmlFor="senha" className="block text-white text-lg font-medium mb-1">
                Senha:
              </label>
              <input
                type="password"
                id="senha" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-b-2 border-gray-500 focus:border-cyan-500 outline-none text-white text-lg pb-1"
                required
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