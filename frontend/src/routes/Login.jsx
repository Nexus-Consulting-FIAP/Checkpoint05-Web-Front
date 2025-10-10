import React from 'react'
import Header from '../components/Header'

const Login = () => {
  return (
    <div>
      <Header/>


      <h1>Login</h1>
     
     
      <input type="email" placeholder='Digite seu email' />
      <input type="password" placeholder='insira uma senha' />
     <a href="">Entrar</a>
      <a href="">esqueci minha senha</a>
    </div>
  )
}

export default Login
