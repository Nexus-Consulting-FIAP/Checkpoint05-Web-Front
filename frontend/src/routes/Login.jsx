import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Header from '../components/Header'

const API_URL = 'http://localhost:5001'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const navigate = useNavigate()

  const handleLogin = async(e) => {
    e.preventDefault()
    setMessage('')

    try {
      const response = await axios.post(`${API_URL}/login`, {email, password})
      const token = response.data.token 

      if (token) {
        localStorage.setItem('token', token)
        localStorage.setItem('userData', JSON.stringify(response.data.user))
        setMessage('Login realizado com sucesso!')
        window.dispatchEvent(new Event('storage'))
        setTimeout(() => navigate('/treinos'), 1000)
      }
      else {
        setMessage('Erro ao autenticar Token')
      }
    } catch (error) {
      console.error('Erro ao logar', error)
    }
  }

  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-4">
      <div className="flex bg-zinc-800 mt-20 rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
        {/* Lado Esquerdo - Formulário de Login */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <div className="bg-cyan-500 text-white text-center py-4 rounded-lg mb-8 text-4xl font-bold tracking-wider shadow-md">
            Login
          </div>

          <div className="bg-zinc-700/50 p-8 rounded-lg">
            <form className="space-y-8" onSubmit={handleLogin}>
              <div className="flex items-end space-x-3">
                <label htmlFor="email" className="block text-white text-lg font-medium">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent border-b-2 border-gray-500 focus:border-cyan-500 outline-none text-white text-lg"
                  required
                />
              </div>

              <div className="flex items-end space-x-3">
                <label htmlFor="senha" className="block text-white text-lg font-medium">
                  Senha:
                </label>
                <input
                  type="password"
                  id="senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex-1 bg-transparent border-b-2 border-gray-500 focus:border-cyan-500 outline-none text-white text-lg"
                  required
                />
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="bg-zinc-900 hover:bg-black text-yellow-500 font-bold text-lg py-2 px-12 rounded-full transition-colors"
                >
                  Entrar
                </button>
                <a href="#" className="block mt-4 text-sm text-gray-400 hover:text-white">
                  Esqueci minha senha
                </a>
              </div>
            </form>
            <p className='text-cyan-500 font-bold'>{message}</p>
          </div>
        </div>

        {/* Lado Direito - Imagem */}
        <div className="hidden md:block md:w-1/2">
          <img 
            src="/login_imagem.png" 
            alt="Homem treinando na academia" 
            className="w-full h-full object-cover" 
          />
        </div>
        
      </div>
    </div>
  )
}

export default Login
