import { Link, useParams } from "react-router-dom"
export function Produtos(){
    const { id } = useParams();

    return(
        <div>
            <h1>Página: Produtos {id}</h1>
            <hr />

            <Link to="/">
                Home
            </Link>
        </div>
    )
}