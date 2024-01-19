import { useState } from 'react'

import './App.css'

function App() {

  const [signed, setSigned] = useState(false);

  function handleLogin() {
    setSigned(true)
  }

  function handleLogout() {
    setSigned(false)
  }

  return (
    <div>
      <h1>Teste</h1>
      <button onClick={handleLogin}>Logar</button>


      {signed && (
        <div>
          <h1>Bem vindo usuário AAA </h1>
          <button onClick={handleLogout}>Deslogar</button>
        </div>
      )}

      {/* {signed ? (
        <h1>Bem vindo usuário AAA </h1>
      ) : (
        <h1>Nenhum usuário logado</h1>
      )} */}

    </div>
  )
}

export default App
