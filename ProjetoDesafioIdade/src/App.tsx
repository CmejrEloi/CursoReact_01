import { FormEvent, useState } from 'react'
import './App.css'

function App() {
  const anoAtual = 2024;
  let idadeFinal = 0;

  const [anoNascimento, setAnoNascimento] = useState<number>(0)
  const [nome, setNome] = useState<string>("")
  const [idade, setIdade] = useState(0)

  function calculaIdade(e: FormEvent){
    e.preventDefault();
    idadeFinal = anoAtual - anoNascimento;
    setIdade(idadeFinal)
    //setNome("")
    setAnoNascimento(0)
  }

  return (
    <div>
      <div className='main'>
        <h2 className='title'>Descubra sua Idade</h2>

        <section className='box-form'>
          <span>Informe seu nome:</span>
          <input 
            type='text' 
            placeholder='Informa seu nome'
            value={nome} 
            onChange={(e) => setNome(e.target.value)}
          />

          <span>informe o ano de nascimento:</span>
          <input 
            type='number' 
            placeholder='informe o ano de nascimento' 
            value={anoNascimento} 
            onChange={(e) => setAnoNascimento(e.target.value)}
          />

          <button onClick={calculaIdade}>Descobrir idade</button>
        </section>

        {nome !== '' && (
          <div className='result'>Ola {nome}, sua idade é: = {idade}</div>
        )}
        
      </div>
    </div>
  )
}

export default App
