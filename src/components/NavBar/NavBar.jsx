import CartWidget from '../CartWidget';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
    return (

        <section id="header">
            
            <div>
                <Link to='/'><img id='logo-img' src="logo-sleepy.png" alt=''/></Link>   
            </div>

            <div>
            <nav>
                <ul id="navbar">
                    <Link className='link-li' to='/category/sommiers'>Sommiers</Link>
                    <Link className='link-li' to='/category/colchones'>Colchones</Link>
                    <Link className='link-li' to='/category/bases'>Bases</Link>
                    <Link className='link-li' to='/category/respaldos'>Respaldos</Link>                 
                </ul>
                
            </nav>
            </div>

            <Link to='/cart'>
                <CartWidget/>
            </Link>
           
            
        </section>
    )
}

export default NavBar;