import React from 'react'
import { useEffect, useState } from 'react';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa'

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'))
  const [showProfilePopup, setShowProfilePopup] = useState(false)
  const userData = isLoggedIn ? JSON.parse(localStorage.getItem('userData') || '{}') : {}

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userData')
    setIsLoggedIn(false)
    setShowProfilePopup(false)
  }

  const getSubscriptionColor = (subscription) => {
        if (!subscription) return 'text-white';

        switch (subscription.toLowerCase()) {
            case 'blue':
                return 'text-white bg-cyan-500'; 
            case 'orange':
                return 'text-white bg-orange-400';
            case 'black':
                return 'text-white bg-zinc-900';
            default:
                return 'text-white';
        }
  };
  const colorClass = getSubscriptionColor(userData.subscription)

  const togglePopup = () => {
    setShowProfilePopup(prev => !prev)
  }

  useEffect(() => {
    const checkLoginStatus = () => {
      setIsLoggedIn(!!localStorage.getItem('token'))
    }

    window.addEventListener('storage', checkLoginStatus)

    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    }
  }, [])

  return (
    <div className="p-5 h-20 w-screen flex justify-between items-center bg-cyan-700 fixed top-0 left-0 z-1">

      <div>
        <a href='/home' className="text-3xl font-bold text-white">NexusGym</a>
      </div>

      <div className="text-xl">
        <ul className="flex gap-4">
          <li><a href="Home" className="text-white hover:text-yellow-300">Home</a></li>
          <li><a href="Planos" className="text-white hover:text-yellow-300">Planos</a></li>
          <li><a href="Treinos" className="text-white hover:text-yellow-300">Treino</a></li>
          <li><a href="Contato" className="text-white hover:text-yellow-300">Contato</a></li>
        </ul>
      </div>

      {isLoggedIn ? (
        <>
          <button onClick={togglePopup} aria-expanded={showProfilePopup} className="text-white hover:text-yellow-300 flex items-center">
              <FaUserCircle size={40}/>
          </button>

          {showProfilePopup && (
            <div className="absolute right-0 top-full mt-2 mr-9 w-64 bg-zinc-800 text-white rounded-lg rounded-tr-none shadow-2xl overflow-hidden z-20 border border-cyan-500">
                <div className="p-4 space-y-3">
                    <h3 className="text-xl font-bold text-cyan-400 border-b border-zinc-700 pb-2">
                        {userData.name || 'Nome do Usuário'}
                    </h3>
                    <p className="text-sm">
                        <span className="font-semibold text-gray-400">Email:</span> {userData.email}
                    </p>
                    <p className="text-sm">
                        <span className="font-semibold text-gray-400">Plano:</span> 
                        <span className={`ml-1 ${colorClass} px-2 py-0.2 rounded-2xl font-bold uppercase`}>
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
        <div className="text-xl flex gap-2">
          <a href="Cadastro" className="text-white hover:text-yellow-300"><button className="border-2 rounded-4xl p-2">Cadastro</button></a>
          <a href="Login" className="text-white hover:text-yellow-300"><button className="border-2 rounded-4xl p-2">Login</button></a>
        </div>
      )}


    </div>
  )
}

export default Header
