import React from 'react'
import Header from '../components/Header';

// src/routes/Home.jsx
const Home = () => {
  return (
    <main>
      <div className="bg-blue-100 h-screen w-full flex flex-col justify-center text-center bg-home pt-20">
          <h1 className="text-5xl md:text-7xl text-white">Nexus Gym</h1>
          <h2 className="text-2xl md:text-5xl text-white">Disciplina + Resistencia</h2>
          <div className="flex flex-col ml-5 mr-5 justify-center gap-15 mt-25 md:flex-row">
            <a href="/login" className="bg-cyan-600 text-white rounded-2xl p-1.5 text-3xl"><button>Nossos Planos</button></a>
            <a href="/cadastro" className="bg-cyan-600 text-white rounded-2xl p-1.5 text-3xl"><button>Nossos Treinos</button></a>
          </div>
          <a href="/login" 
            className="p-1 px-2 text-white text-center text-[1.3rem] mx-auto mt-20 bottom-2.5 border-1 rounded-4xl">
              Entrar
          </a>
      </div>
    </main>
  );
};

export default Home
