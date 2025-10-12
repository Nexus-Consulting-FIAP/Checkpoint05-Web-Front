import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Header from '../components/Header'

const API_URL = 'http://localhost:5001'

const Planos = () => {
  const [isPurchased, setPurchased] = useState(false)
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleBuy = async (subscriptionName) => {
    const token = localStorage.getItem('token')
    
    if(!token) {
      console.log('Usuário não está logado. Redirecionando para o Login.')
      navigate('/login')
      return
    }

    setMessage('Processando compra...')

    try {
      const response = await axios.post(
        `${API_URL}/subscribe-plan`,
        { subscription: subscriptionName },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      )

      if (response.status == 200) {
        const currentData = JSON.parse(localStorage.getItem('userData') || '{}')
        currentData.subscription = response.data.newSubscription
        localStorage.setItem('userData', JSON.stringify(currentData))

        window.dispatchEvent(new Event('Storage'))

        setPurchased(true)
        setMessage(response.data.message)
      }
    } catch (error) {
            console.error('Erro na compra:', error);
            setMessage(error.response?.data?.message || 'Erro ao finalizar a compra. Tente novamente.');
    }

    //console.log(`Simulando compra do plano: ${subscriptionName}`)
    //setPurchased(true)
  }

  const handleBack = () => {
    navigate('/')
  };


  if (isPurchased) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-900 text-white p-6">
        <h2 className="text-5xl font-extrabold text-cyan-500 mb-6 mt-10">
          Plano Comprado!
        </h2>
        <p className="text-2xl mb-10 text-center">
          Obrigado por assinar. Seu novo plano está ativo!
        </p>
        <button
          onClick={handleBack}
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-full text-xl transition-colors shadow-lg"
        >
          Voltar
        </button>
      </div>
    ) 
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-900 text-white px-4">
      <h1 className="text-3xl font-semibold mb-10 tracking-wide">Nossos Planos</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Plano Blue */}
        <div className="bg-cyan-500 text-white rounded-xl p-8 flex flex-col items-center shadow-lg w-72 transform transition-transform duration-300 hover:scale-105 transition-shadow shadow-[0_0_18px_rgba(255,255,255,0.7)]
hover:shadow-[0_0_28px_rgba(255,255,255,0.9)]">
          <h2 className="text-xl font-semibold mb-4">Plano Blue</h2>
          <ul className="text-sm mb-6 space-y-2 text-left">
            <li>✔️ Acesso ilimitado à Musculação e Aeróbico (todos os locais)</li>
            <li>❌ Direito a aulas com personal trainer (1x por semana)</li>
            <li>❌ Avaliação Física Trimestral com Bioimpedância</li>
            <li>✔️ Acesso Livre às Aulas Coletivas (Zumba, Spinning, etc.)</li>
            <li>❌ Treino Funcional em Grupo (3x por semana)</li>
            <li>❌ Acesso à Área VIP de Hidromassagem e Sauna</li>
          </ul>
          <p className="text-lg font-semibold mb-4">R$59,99/mês</p>
          <button 
            onClick={() => handleBuy('Blue')}
            className="px-6 py-2 bg-white text-black rounded-lg font-medium hover:opacity-90 transition">
              Comprar
          </button>
        </div>

        {/* Plano Orange */}
        <div className="bg-orange-400 text-black rounded-xl p-8 flex flex-col items-center shadow-lg w-72 transform transition-transform duration-300 hover:scale-105 transition-shadow shadow-[0_0_18px_rgba(255,255,255,0.7)]
hover:shadow-[0_0_28px_rgba(255,255,255,0.9)]">
          <h2 className="text-xl font-semibold mb-4">Plano Orange</h2>
          <ul className="text-sm mb-6 space-y-2 text-left">
            <li>✔️ Acesso ilimitado à Musculação e Aeróbico (todos os locais)</li>
            <li>❌ Direito a aulas com personal trainer (1x por semana)</li>
            <li>✔️ Avaliação Física Trimestral com Bioimpedância</li>
            <li>✔️ Acesso Livre às Aulas Coletivas (Zumba, Spinning, etc.)</li>
            <li>✔️ Treino Funcional em Grupo (3x por semana)</li>
            <li>❌ Acesso à Área VIP de Hidromassagem e Sauna</li>
          </ul>
          <p className="text-lg font-semibold mb-4">R$99,99/mês</p>
          <button 
            onClick={() => handleBuy('Orange')}
            className="px-6 py-2 bg-white text-black rounded-lg font-medium hover:opacity-90 transition">
              Comprar
          </button>
        </div>

        {/* Plano Black */}
        <div className="bg-black text-white rounded-xl p-8 flex flex-col items-center shadow-lg w-72 transform transition-transform duration-300 hover:scale-105 transition-shadow shadow-[0_0_18px_rgba(255,255,255,0.7)]
hover:shadow-[0_0_28px_rgba(255,255,255,0.9)]">
          <h2 className="text-xl font-semibold mb-4">Plano Black</h2>
          <ul className="text-sm mb-6 space-y-2 text-left">
            <li>✔️ Acesso ilimitado à Musculação e Aeróbico (todos os locais)</li>
            <li>✔️ Direito a aulas com personal trainer (1x por semana)</li>
            <li>✔️ Avaliação Física Trimestral com Bioimpedância</li>
            <li>✔️ Acesso Livre às Aulas Coletivas (Zumba, Spinning, etc.)</li>
            <li>✔️ Treino Funcional em Grupo (3x por semana)</li>
            <li>✔️ Acesso à Área VIP de Hidromassagem e Sauna</li>
          </ul>
          <p className="text-lg font-semibold mb-4">R$199,99/mês</p>
          <button 
            onClick={() => handleBuy('Black')}
            className="px-6 py-2 bg-white text-black rounded-lg font-medium hover:opacity-90 transition">
              Comprar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Planos
