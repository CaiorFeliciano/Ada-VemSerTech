import { useState } from 'react';
import './Menu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

type MenuType = {
    logout: () => void
    tituloBtn: string
}

function Menu(props: MenuType) {
    const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar se o menu está aberto ou fechado

    // Função para alternar entre abrir e fechar o menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <div className="menu-trigger" onClick={toggleMenu}><FontAwesomeIcon className='IconeUser' icon={faUser}/></div>
            <div id="myMenu" className={`menu ${menuOpen ? 'active' : ''}`}>
                <Link to={"/perfil"}>Editar perfil</Link>
                <Link to={"/addConteudo"}>Pagina Admin</Link>
                <a className='LogoutUser__btn' onClick={props.logout}>{props.tituloBtn}</a>
            </div>
        </div>
    );
}

export default Menu;