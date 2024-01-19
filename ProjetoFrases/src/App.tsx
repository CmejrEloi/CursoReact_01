import { useState } from 'react'
import './App.css'

import logoImg from './assets/logo.png'

function App() {

  const [frase, setFrase] = useState("")
  const [categoria, setCategoria] = useState(0)

  const allFrases = [
    {
      id : 1,
      nome : "Motivação",
      frases: [
        'Vencedor não é aquele que sempre vence, mas sim aquele que nunca para de lutar',
        'Já que você tem que pensar de qualquer forma, pense grande',
        'A coisa mais interessante de uma tempestade é você perceber que pode ser mais forte do que ela'
      ]
    },

    {
      id : 2,
      nome : "Bom dia",
      frases: [
        'Frase de Bom dia 01',
        'Frase de Bom dia 02',
        'Frase de Bom dia 03',
        'Frase de Bom dia 04',
        'Frase de Bom dia 05'
      ]
    }
  ]

  function handleSwitchCategory(index: number){
    setCategoria(index)
  }

  function gerarFrase(){
    let numeroAletorio = Math.floor(Math.random() * allFrases[categoria].frases.length)
    setFrase(`" ${allFrases[categoria].frases[numeroAletorio]} "`)
  }

  return (
    <div className='container'>
      <img src={logoImg} alt="Logo Frases" className='logo' />

      <h2 className='title'>Categorias</h2>

      <section className='category-area'>
        {allFrases.map( (item, index) => (
          <button
            key={item.id}
            className='category-button'
            style={{
              borderWidth: item.nome === allFrases[categoria].nome ? 2 : 0,
              borderColor: "#1fa4db"
            }}
            onClick={() => handleSwitchCategory(index)}
          >
            {item.nome}
          </button>
        ))}
      </section>

      <button className='button-frase' onClick={gerarFrase}>Gerar frase</button>

      {frase !== '' && <p className='texto-frase'>{frase}</p>}

    </div>
  )
}

export default App