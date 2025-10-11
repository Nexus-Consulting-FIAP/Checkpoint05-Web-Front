import React from 'react'
import Header from '../components/Header';

// src/routes/Home.jsx
const Home = () => {
  return (
    // pagina Home 
    <main className="bg-black ">
      <section className="bg-blue-100 mb-6 h-screen w-screen flex flex-col justify-center text-center section1-bg">
          <h1 className="text-7xl text-white">Nexus Gym</h1>
          <h2 className="text-5xl text-white">Disciplina + Resistencia</h2>
          <div className="flex flex-col ml-5 mr-5 justify-center gap-15 mt-25 md:flex-row">
            <a href="" className="bg-cyan-600 rounded-2xl p-1.5 text-3xl"><button>Nossos Planos</button></a>
            <a href="" className="bg-cyan-600 rounded-2xl p-1.5 text-3xl"><button>Nossos Treinos</button></a>
          </div>
          <br/>
          <br/>
          <h2 className="text-3xl"><a href="" className="p-4 text-white border-4 rounded-4xl">Entrar</a></h2>

      </section>
      {/* fim da home */}

      <section className="bg-green-100 p-6 rounded-lg h-screen w-screen">
        <h2 className="text-2xl font-semibold text-green-700">Seção 2</h2>
        <p className="mt-2 text-gray-700">
          Aqui temos outra parte da página.
        </p>
      </section>
    </main>
  );
};

export default Home
