import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/loginPage/LoginPage";
import CadastroPage from "../pages/cadastroPage/CadastroPage";
import HomePage from "../pages/homePage/HomePage";
import PerfilUser from "../pages/perfilUsuario/PerfilUser";
import AddConteudo from "../pages/addConteudo/AddConteudo";
import DetalhesJogos from "../pages/detalhesJogos/detalhesJogos";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/cadastro",
        element: <CadastroPage />
    },
    {
        path: `/login`,
        element: <LoginPage />,
    },
    {
        path: "/perfil",
        element: <PerfilUser />
    },
    {
        path: "/addConteudo",
        element: <AddConteudo/>
    },
    {
        path: "/detalhesJogo",
        element: <DetalhesJogos/>
    }
])

export default router