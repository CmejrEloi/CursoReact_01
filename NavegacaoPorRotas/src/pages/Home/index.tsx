import { Link } from "react-router-dom"

export function Home(){
    return(
        <div>
            <h1>Página: Home</h1>
            <span>Essa é minha primeira página com navegação</span>
            <hr />

            <Link to="/sobre" className="link-nav">
                Sobre
            </Link>

            <Link to="/contato" className="link-nav">
                Contato
            </Link>

            <Link to="/sobre" className="link-nav">
                Sobre
            </Link>
        </div>
    )
}