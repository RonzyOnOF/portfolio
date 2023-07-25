import styles from './Navbar.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => {
    
    const [isClicked, setIsClicked] = useState();

    const toggleClick = () => {
        setIsClicked(!isClicked);
    }

    
    
    return(
        <>
            <nav className={styles.navBar}>
                <h1 id={styles.name}>JSDev</h1>
                <ul className={isClicked ?`${styles.list} ${styles.active}` : styles.list}>
                    <a href='#'><li>Home</li></a>
                    <a href='#about'><li>About</li></a>
                    <a href='#projects'><li>Projects</li></a>
                    <a href='#contact'><li>Contact</li></a>
                </ul>
                <a className={isClicked ? `${styles.hamburger} ${styles.active}` : styles.hamburger} onClick={toggleClick}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </a>
            </nav>
        </>
    )
}