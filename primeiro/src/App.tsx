import Header from "./components/header";
import Aluno from "./components/aluno";
import Footer from "./components/footer";

/**CSS */
import './App.css'

export default function App() {
  return (
    <div>
      <Header />

      <div className='alunos_box'>
        <Aluno nome="Cláudio Junior" idade={42} />
        <Aluno nome="Cristina Coelho" idade={63} />
      </div>

      <Footer />
    </div>
  )
}

