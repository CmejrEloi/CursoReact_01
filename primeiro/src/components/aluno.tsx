import imgAluno from '../assets/3413565.png'
import './aluno.css'

interface AlunoProps {
    nome: string;
    idade: number;
}

export default function Aluno({ nome, idade }: AlunoProps) {
    return (

        <div className='alunoContainer'>
            <img src={imgAluno} alt="" className='imgAluno' />
            <h1>Aluno: {nome}</h1>
            <h3>Aluno: {idade}</h3>
        </div>

    )
}