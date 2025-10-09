import React from 'react'
import Header from '../components/Header'

function Cadastro() {
  return (
    <div>
      <Header />

      <h1>Cadastro</h1>
      <img src="" alt="imagem de uma mulher treinando" />

      <input type="text" placeholder='Digite seu nome' />
      <input type="email" placeholder='Digite seu email' />
      <input type="password" placeholder='insira uma senha' />
      <input type="submit" value='Cadastrar'/>
    </div>
  )
}

export default Cadastro