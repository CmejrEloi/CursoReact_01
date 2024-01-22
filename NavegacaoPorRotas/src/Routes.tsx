import { createBrowserRouter } from 'react-router-dom'

import { Home } from './pages/Home'
import { Sobre } from './pages/Sobre'
import { Produtos } from './pages/Produtos'
import { Contato } from './pages/Contato'
import { Notfound } from './pages/Notfound'


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/sobre",
        element: <Sobre />
    },
    {
        path: "/produtos/:id",
        element: <Produtos />
    },
    {
        path: "/contato",
        element: <Contato />
    },
    {
        path: "*",
        element: <Notfound />
    }
])

export { router }