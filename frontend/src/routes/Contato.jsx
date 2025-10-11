import React from 'react'
import Header from '../components/Header'

const Contato = () => {
  return (
    <div className="h-screen w-screen bg-neutral-900 p-[20vh]">
      <div className="bg-gray-900 h-[50vh] text-white text-center rounded-2xl p-10">
        <h1 className="text-6xl">Nexus</h1>
        <img src="" alt="logo telefone" />
        <p>📞(11)4000-1234</p>
        <br></br>
        <h3>Unidade Moema</h3>
        <p>Av.ibirapuera, 3100 - Moema, São paulo - SP 04028-000</p>
        <br></br>

        <h3>Unidade Vila Mariana</h3>
        <p>R.domingos de moraes, 1581-vila mariana, São paulo - SP 04009-002</p>
        <br></br>

        <h3>Unidade Pinheiros</h3>
        <p>R. dos Pinheiros, 750-Pinheiros, São paulo - SP 05422-001</p>
      </div>
    </div>
  )
}

export default Contato
