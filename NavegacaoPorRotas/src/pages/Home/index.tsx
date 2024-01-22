import { Link } from "react-router-dom"

export function Home(){
    return(
        <div>
            <h1>Página: Home</h1>
            <span>Essa é minha primeira página com navegação</span>
            <hr />

            <Link to="/sobre">
                Sobre
            </Link>
        </div>
    )
}