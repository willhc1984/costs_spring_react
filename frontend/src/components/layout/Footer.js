import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li><FaFacebook /></li>
            </ul>
            <ul className={styles.social_list}>
                <li><FaInstagram /></li>
            </ul>
            <ul className={styles.social_list}>
                <li><FaLinkedin /></li>
            </ul>
            <p className={styles.copy_right}><span>Costs</span>&copy; 2021</p>
        </footer>

    )
}

export default Footer;