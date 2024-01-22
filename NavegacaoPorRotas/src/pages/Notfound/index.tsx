import { Link } from "react-router-dom"
export function Notfound() {

    return (
        <div>
            <h1>Opa! Essa página não existe</h1>
            <p>
                <Link to="/">
                    Clique aqui para voltar para Home
                </Link>
            </p>
        </div>
    )
}