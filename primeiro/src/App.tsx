import { useState } from "react"

export default function App() {

  interface infoAlunoProps {
    nome: string;
    idade: string;
  }

  const [input, setInput] = useState("");
  const [idade, setIdade] = useState("");

  const [count, setCount] = useState(0)

  const [infoAluno, setInfoAluno] = useState<infoAlunoProps>();

  /**Praticando */
  interface userProps {
    nome: string;
    cargo: string;
  }
  const [user, setUser] = useState<userProps>({
    nome: "Visitante",
    cargo: ""
  });

  function handleLogin() {
    setUser({
      nome: "Claudio Junior",
      cargo: "Analista de Qualidade"
    })
  }

  function handleLogout() {
    setUser({
      nome: "Visitante",
      cargo: ""
    })
  }
  /**Fm Praticandp */

  function mostrarAluno() {
    setInfoAluno({
      nome: input,
      idade: idade
    })
  }

  function adicionar() {
    setCount(valorAtual => valorAtual + 1)
  }

  function diminuir() {
    if (count == 0) {
      return;
    }
    setCount(valorAtual => valorAtual - 1)
  }

  return (
    <div>
      <h1>Conhecendo UseState</h1>
      <input type="text" placeholder="Digite o nome" value={input} onChange={(e) => setInput(e.target.value)} />
      <br /><br />
      <input type="text" placeholder="Digite a idade" value={idade} onChange={(e) => setIdade(e.target.value)} />
      <br /><br />
      <button onClick={mostrarAluno}>Mostrar Aluno</button>
      <hr />
      <h1>Bem vindo: {infoAluno?.nome}</h1>
      <h3>Idade: {infoAluno?.idade}</h3>

      <hr />
      <br />
      <h1>Contador com UseState</h1>
      <button onClick={adicionar}>+</button> {count} <button onClick={diminuir}>-</button>

      <hr /><hr />
      <h1>Praticando useState </h1>

      <button onClick={handleLogout}>Sair</button>
      <h4>Olá, {user.nome}</h4>
      <strong>{user.cargo}</strong>
      <br /><br />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  )
}

