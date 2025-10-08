import React from 'react'

// src/routes/Home.jsx
const Home = () => {
  return (
    // pagina Home 
    <main className="p-8 bg-black ">
      <section className="bg-blue-100 p-6 rounded-lg mb-6 h-screen w-screen ">
        <h1 className="text-3xl font-bold text-blue-700">Nexus gym</h1>
        <h2 className="mt-2 text-gray-700">
          <ul>
            <li><a href=""></a>Home</li>
            <li><a href="">Planos</a></li>
            <li><a href="">Treino</a></li>
            <li><a href=""></a>Contato</li>
            <li><a href="">Cadastro</a></li>
            <li><a href=""></a>Login</li>
          </ul>
        </h2>

        <div>

          <h1>Nexus Gym</h1>
          <h2>Disciplina + Resistencia</h2>
          <h2><a href="">Nossos Planos</a></h2>
          <h2><a href="">Nossos Treinos</a></h2>
          <h2><a href="">Entrar</a></h2>
        </div>

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
