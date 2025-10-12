import React from 'react'
import Header from '../components/Header'
import TreinoCard from '../components/TreinoCard';

const Treinos = () => {
  return (
    <div className="bg-zinc-800 min-h-screen text-white font-sans p-4 md:p-8">
      <div className="max-w-6xl mx-auto mt-20">
        
        {/* ======================= */}
        {/* VISUALIZAÇÃO DESKTOP  */}
        {/* ======================= */}
        <div className="hidden md:block">
          <section>
            <h2 className="text-gray-400 font-semibold uppercase">Nossos</h2>
            <h1 className="text-5xl font-extrabold uppercase">Treinos e Aulas</h1>
            <div className="mt-8 grid grid-cols-3 gap-x-6">
              <TreinoCard img="/treino1.png" title="Fit Dance" />
              <TreinoCard img="/treino2.png" title="Musculação" />
              <TreinoCard img="/treino3.png" title="Artes Marciais" />
            </div>
          </section>

          <section className="mt-16 bg-zinc-800 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-10">Quer um treino personalizado?</h2>
            <a href='/planos' className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-12 py-3 rounded-full transition-colors">
              Confira nossos planos
            </a>
          </section>
        </div>

        {/* ===================== */}
        {/* VISUALIZAÇÃO MOBILE  */}
        {/* ===================== */}
        <div className="md:hidden p-4 rounded-lg">
          <section>
            <h2 className="text-gray-400 font-semibold uppercase text-sm">Nossos</h2>
            <h3 className="text-2xl font-extrabold uppercase">Treinos e Aulas</h3>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <TreinoCard img="/treino1.png" title="Fit Dance" />
              <TreinoCard img="/treino2.png" title="Musculação" />
              <div className="col-span-2 flex justify-center mt-4 px-8">
                <TreinoCard img="/treino3.png" title="Artes Marciais" className="w-full" />
              </div>
            </div>
          </section>
          
          <section className="mt-12 text-center">
            <h4 className="text-xl font-bold mb-5">Quer um treino personalizado?</h4>
            <a href='/planos' className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-full transition-colors">
              Confira nossos planos
            </a>
          </section>
        </div>
        
      </div>
    </div>
  );
}

export default Treinos
