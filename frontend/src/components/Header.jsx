import React, { useEffect, useState } from 'react'
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa'
import { Sling as Hamburger } from 'hamburger-react' // Import do ícone

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'))
  const [showProfilePopup, setShowProfilePopup] = useState(false)
  const [isOpen, setIsOpen] = useState(false) // controla o menu mobile

  const userData = isLoggedIn ? JSON.parse(localStorage.getItem('userData') || '{}') : {}

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userData')
    setIsLoggedIn(false)
    setShowProfilePopup(false)
  }

  const togglePopup = () => {
    setShowProfilePopup(prev => !prev)
  }

  useEffect(() => {
    const checkLoginStatus = () => {
      setIsLoggedIn(!!localStorage.getItem('token'))
    }

    window.addEventListener('storage', checkLoginStatus)
    return () => window.removeEventListener('storage', checkLoginStatus)
  }, [])

  return (
    <header className="p-5 h-20 w-screen flex justify-between items-center bg-cyan-700 fixed top-0 left-0 z-10">

      {/* Logo */}
      <a href="/home" className="text-3xl font-bold text-white">NexusGym</a>

      {/* Menu normal (desktop) */}
      <nav className="hidden md:block text-xl">
        <ul className="flex gap-4">
          <li><a href="Home" className="text-white hover:text-yellow-300">Home</a></li>
          <li><a href="Planos" className="text-white hover:text-yellow-300">Planos</a></li>
          <li><a href="Treinos" className="text-white hover:text-yellow-300">Treino</a></li>
          <li><a href="Contato" className="text-white hover:text-yellow-300">Contato</a></li>
        </ul>
      </nav>

      {/* Botões ou perfil */}
      {isLoggedIn ? (
        <>
          <button onClick={togglePopup} aria-expanded={showProfilePopup} className="text-white hover:text-yellow-300 flex items-center">
            <FaUserCircle size={40}/>
          </button>

          {showProfilePopup && (
            <div className="absolute right-0 top-full mt-2 ml-4 w-64 bg-zinc-800 text-white rounded-lg shadow-2xl overflow-hidden z-20 border border-cyan-500">
              <div className="p-4 space-y-3">
                <h3 className="text-xl font-bold text-cyan-400 border-b border-zinc-700 pb-2">
                  {userData.name || 'Nome do Usuário'}
                </h3>
                <p className="text-sm">
                  <span className="font-semibold text-gray-400">Email:</span> {userData.email}
                </p>
                <p className="text-sm">
                  <span className="font-semibold text-gray-400">Plano:</span> 
                  <span className="ml-1 text-black bg-yellow-300 px-2 py-0.2 rounded-2xl font-bold uppercase">
                    {userData.subscription || 'N/A'}
                  </span>
                </p>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center justify-center w-full bg-zinc-900 hover:bg-red-700 text-red-400 hover:text-white py-2 transition-colors text-sm font-medium"
              >
                <FaSignOutAlt className="mr-2" />
                Sair
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="hidden md:flex text-xl gap-2">
          <a href="Cadastro" className="text-white hover:text-yellow-300"><button className="border-2 rounded-4xl p-2">Cadastro</button></a>
          <a href="Login" className="text-white hover:text-yellow-300"><button className="border-2 rounded-4xl p-2">Login</button></a>
        </div>
      )}

      {/* Ícone do menu (mobile) */}
      <div className="md:hidden text-white z-20">
        <Hamburger toggled={isOpen} toggle={setIsOpen} color="white" />
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <nav className="absolute top-20 left-0 w-full bg-cyan-800 text-white flex flex-col items-center gap-4 py-5 md:hidden z-10 shadow-lg">
          <a href="Home" onClick={() => setIsOpen(false)} className="hover:text-yellow-300">Home</a>
          <a href="Planos" onClick={() => setIsOpen(false)} className="hover:text-yellow-300">Planos</a>
          <a href="Treinos" onClick={() => setIsOpen(false)} className="hover:text-yellow-300">Treino</a>
          <a href="Contato" onClick={() => setIsOpen(false)} className="hover:text-yellow-300">Contato</a>

          {!isLoggedIn && (
            <div className="flex flex-col gap-2 mt-3">
              <a href="Cadastro" onClick={() => setIsOpen(false)} className="hover:text-yellow-300 border-2 rounded-4xl p-2 text-center">Cadastro</a>
              <a href="Login" onClick={() => setIsOpen(false)} className="hover:text-yellow-300 border-2 rounded-4xl p-2 text-center">Login</a>
            </div>
          )}
        </nav>
      )}

    </header>
  )
}

export default Header
