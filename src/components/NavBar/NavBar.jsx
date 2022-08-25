import CartWidget from '../CartWidget';
import ItemListContainer from "../ItemListContainer";
import './NavBar.css';

const NavBar = () => {
    return (

        <section id="header">

            <div>
                <a href='https://google.com'><img src="logo.png" alt="logo"></img></a>
            </div>

            <div>
            <nav>
                <ul id="navbar">      
                    <li>
                        <a href="https://google.com.">Tienda</a>
                    </li>
                    <li>
                        <a href="https://google.com.">Nosotros</a>
                    </li>
                    <li>
                        <a href="https://google.com.">Contacto</a>
                    </li>
                    <li><CartWidget/></li>
                    <li><ItemListContainer/></li>
                </ul>
            </nav>
            </div>
            
        </section>
    )
}

export default NavBar;