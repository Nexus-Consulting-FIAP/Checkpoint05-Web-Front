import React from 'react'
import Header from '../components/Header'

const Planos = () => {
  return (

    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-900 text-white px-4">
      <h1 className="text-3xl font-semibold mb-10 tracking-wide">Nossos Planos</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Plano Blue */}
        <div className="bg-cyan-500 text-white rounded-xl p-8 flex flex-col items-center shadow-lg w-72 transform transition-transform duration-300 hover:scale-105">
          <h2 className="text-xl font-semibold mb-4">Plano Blue</h2>
          <ul className="text-sm mb-6 space-y-2 text-left">
            <li>✔️ Acesso ilimitado à Musculação e Aeróbico (todos os locais)</li>
            <li>✔️ Direito a aulas com personal trainer (1x por semana)</li>
            <li>✔️ Avaliação Física Trimestral com Bioimpedância</li>
            <li>✔️ Acesso Livre às Aulas Coletivas (Zumba, Spinning, etc.)</li>
            <li>✔️ Treino Funcional em Grupo (3x por semana)</li>
            <li>✔️ Acesso à Área VIP de Hidromassagem e Sauna</li>
          </ul>
          <p className="text-lg font-semibold mb-4">R$59,99/mês</p>
          <button className="px-6 py-2 bg-white text-black rounded-lg font-medium hover:opacity-90 transition">
            Comprar
          </button>
        </div>

        {/* Plano Orange */}
        <div className="bg-orange-400 text-black rounded-xl p-8 flex flex-col items-center shadow-lg w-72 transform transition-transform duration-300 hover:scale-105">
          <h2 className="text-xl font-semibold mb-4">Plano Orange</h2>
          <ul className="text-sm mb-6 space-y-2 text-left">
            <li>✔️ Acesso ilimitado à Musculação e Aeróbico (todos os locais)</li>
            <li>✔️ Direito a aulas com personal trainer (1x por semana)</li>
            <li>✔️ Avaliação Física Trimestral com Bioimpedância</li>
            <li>✔️ Acesso Livre às Aulas Coletivas (Zumba, Spinning, etc.)</li>
            <li>✔️ Treino Funcional em Grupo (3x por semana)</li>
            <li>✔️ Acesso à Área VIP de Hidromassagem e Sauna</li>
          </ul>
          <p className="text-lg font-semibold mb-4">R$99,99/mês</p>
          <button className="px-6 py-2 bg-white text-black rounded-lg font-medium hover:opacity-90 transition">
            Comprar
          </button>
        </div>

        {/* Plano Black */}
        <div className="bg-black text-white rounded-xl p-8 flex flex-col items-center shadow-lg w-72 transform transition-transform duration-300 hover:scale-105">
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
          <button className="px-6 py-2 bg-white text-black rounded-lg font-medium hover:opacity-90 transition">
            Comprar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Planos
