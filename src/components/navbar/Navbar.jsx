import styles from './Navbar.module.css';
import logo from '../../../public/images/jsDev2.png';

export const Navbar = () => {
    return(
        <>
            <nav className={styles.navBar}>
                <h1 id={styles.name}>JSDev</h1>
                <ul className={styles.list}>
                    <a><li>Home</li></a>
                    <a><li>About</li></a>
                    <a><li>Contact</li></a>
                </ul>
            </nav>
        </>
    )
}