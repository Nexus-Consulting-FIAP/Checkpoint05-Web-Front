import React from 'react'
import Header from '../components/Header'
import TreinoCard from '../components/TreinoCard';

const Treinos = () => {
  return (
 <div className="bg-zinc-900 text-white font-sans p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        
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
            <h2 className="text-3xl font-bold">Quer um treino personalizado?</h2>
            <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-12 py-3 rounded-full transition-colors">
              Confira nossos planos
            </button>
          </section>

          <section className="mt-8">
            <h3 className="text-2xl font-bold">Dicas de Treinos</h3>
            <div className="mt-4 bg-cyan-800 p-6 rounded-lg flex gap-6">
              <div className="flex flex-col space-y-3 w-1/3">
                <button className="text-left bg-white text-cyan-800 font-semibold px-4 py-2 rounded-full">Treino de Força</button>
                <button className="text-left border border-white px-4 py-2 rounded-full hover:bg-white/10">Treino de Hipertrofia</button>
                <button className="text-left border border-white px-4 py-2 rounded-full hover:bg-white/10">Treino de Resistência</button>
                <button className="text-left border border-white px-4 py-2 rounded-full hover:bg-white/10">Treino de Impulso</button>
              </div>
              <div className="flex-1 text-center">
                <h4 className="font-semibold text-xl underline">Levantamento Terra</h4>
                <img src="/treino4.png" alt="Levantamento Terra" className="rounded-lg mt-2 mx-auto" />
                <p className="font-bold text-xl mt-2">3x10</p>
                <div className="flex justify-center items-center gap-2 mt-4">
                  <span className="block w-2.5 h-2.5 bg-white rounded-full"></span>
                  <span className="block w-2.5 h-2.5 bg-white/40 rounded-full"></span>
                  <span className="block w-2.5 h-2.5 bg-white/40 rounded-full"></span>
                  <span className="block w-2.5 h-2.5 bg-white/40 rounded-full"></span>
                  <span className="block w-2.5 h-2.5 bg-white/40 rounded-full"></span>
                  <span className="block w-2.5 h-2.5 bg-white/40 rounded-full"></span>
                  <span className="block w-2.5 h-2.5 bg-white/40 rounded-full"></span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ===================== */}
        {/* VISUALIZAÇÃO MOBILE  */}
        {/* ===================== */}
        <div className="md:hidden bg-zinc-800 p-4 rounded-lg">
          <section>
            <h2 className="text-gray-400 font-semibold uppercase text-sm">Nossos</h2>
            <h3 className="text-2xl font-extrabold uppercase">Treinos e Aulas</h3>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <TreinoCard img="/treino1.png" title="Fit Dance" />
              <TreinoCard img="/treino2.png" title="Musculação" />
              <div className="col-span-2 flex justify-center px-8">
                 <TreinoCard img="/treino3.png" title="Artes Marciais" className="w-full" />
              </div>
            </div>
          </section>
          
          <section className="mt-12 text-center">
            <h4 className="text-xl font-bold">Quer um treino personalizado?</h4>
            <button className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-full transition-colors">
              Confira nossos planos
            </button>
          </section>

          <div className="mt-6 bg-cyan-800 h-24 rounded-lg">
             {/* Espaço para "Dicas de Treinos" no mobile */}
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Treinos
