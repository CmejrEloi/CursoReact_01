import { useState, FormEvent } from 'react'
import logoImg from '../src/assets/logo.png'
import './App.css'

interface infoProps {
  title: string;
  rGasolina: string | number;
  rAlcool: string | number;
}

function App() {
  const [gasolina, setGasolina] = useState(0);
  const [alcool, setAlcool] = useState(0);
  const [info, setInfo] = useState<infoProps>();

  function calcular(event: FormEvent) {
    event.preventDefault()

    let calculo = (alcool / gasolina);
    if (calculo <= 0.7) {
      setInfo({
        title: "Compensa usar Alcool",
        rGasolina: formatarMoeda(gasolina),
        rAlcool: formatarMoeda(alcool)
      })
    } else {
      setInfo({
        title: "Compensa usar Gasolina",
        rGasolina: formatarMoeda(gasolina),
        rAlcool: formatarMoeda(alcool)
      })
    }
  }

  function formatarMoeda(valor: number){
    let valorFormatado = valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL"
    })

    return valorFormatado;
  }

  return (
    <div>
      <main className='container'>
        <img src={logoImg} alt="Logo Calculadora" className='logo' />
        <h1 className='title'>Qual a melhor opção?</h1>
        <form className='form' onSubmit={calcular}>
          <label>Alcool (Preço por litro)</label>
          <input
            type="number"
            className='input'
            value={alcool}
            onChange={(e) => setAlcool(Number(e.target.value))}
            placeholder='4,90'
            min="1"
            step="0.01"
            required
          />

          <label>Gasolina (Preço por litro)</label>
          <input
            type="number"
            className='input'
            value={gasolina}
            onChange={(e) => setGasolina(Number(e.target.value))}
            placeholder='4,90'
            min="1"
            step="0.01"
            required
          />

          <input type="submit" value="Calcular" className='buttom' />
        </form>

        {info && Object.keys(info).length > 0 && (
          <section className='result'>
            <h2 className='result-title'>{info.title}</h2>
            <span>Alcool {info.rAlcool}</span>
            <span>Gasolina {info.rGasolina}</span>
          </section>
        )}

      </main>
    </div>
  )
}

export default App
