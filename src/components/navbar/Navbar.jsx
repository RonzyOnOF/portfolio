import styles from './Navbar.module.css';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => {
    
    const [isClicked, setIsClicked] = useState();
    const [width, setWidth] = useState();

    const toggleClick = () => {
        setIsClicked(!isClicked);
    }

    const getWidth = () => {
        return window.innerWidth;
    }

    useEffect(() => {
        function handleResize() {
            setWidth(getWidth());
          }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    if(isClicked && width >= 880) {
        setIsClicked(false);
    }
    
    
    return(
        <>
            <nav className={styles.navBar}>
                <h1 id={styles.name}>JSDev</h1>
                <ul className={isClicked ? styles.listActive : styles.list}>
                    <a><li>Home</li></a>
                    <a><li>About</li></a>
                    <a><li>Projects</li></a>
                    <a><li>Contact</li></a>
                </ul>
                <a className={styles.toggleButton} onClick={toggleClick}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </a>
            </nav>
        </>
    )
}