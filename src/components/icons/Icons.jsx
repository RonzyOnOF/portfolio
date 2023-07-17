import styles from './Icons.module.css';
import html from '../../../public/icons/htmlIcon.png';
import css from '../../../public/icons/cssIcon.png';
import js from '../../../public/icons/jsIcon.png';
import react from '../../../public/icons/reactIcon.png';
import redux from '../../../public/icons/reduxIcon.png';
import git from '../../../public/icons/gitIcon.png';
import photoshop from '../../../public/icons/photoshopIcon.png';
import shopify from '../../../public/icons/shopifyIcon.png';
import wordpress from '../../../public/icons/wordpress.png';

export const Icons = () => {
    return (
        <>

            <div className={styles.iconsContainer}>
                <img src={html} />
                <img src={css} />
                <img src={js} />
                <img src={react} />
                <img src={redux} />
                <img src={git} />
                <img src={photoshop} />
                <img src={shopify} />
                <img src={wordpress} />
            </div>
        </>
    )
}