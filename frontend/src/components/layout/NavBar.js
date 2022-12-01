import { Link } from 'react-router-dom';
import styles from './NavBar.module.css'
import logo from '../../img/costs_logo.png';
import Container from './Container';

function NavBar(){

    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to="/"><img src={logo} alt='logotipo' /></Link>
                <ul className={styles.list}>
                    <li className={styles.itens}><Link to="/">Home</Link></li>
                    <li className={styles.itens}><Link to="/projects">Projetos</Link></li>
                    <li className={styles.itens}><Link to="/contact">Contato</Link></li>
                    <li className={styles.itens}><Link to="/company">Empresa</Link></li>
                </ul>
            </Container>            
        </nav>
    )

}

export default NavBar;