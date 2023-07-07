import styles from './Projects.module.css';
import rent from '../../../public/thumbnails/rentThumbnail.png';

export const Projects = () => {
    return (
        <>
            <div className={styles.projectsContainer} id='projects'>
                <h3>Projects</h3>
                <div className={styles.projectShowcaseContainer}>
                    <img id={styles.project} src={rent} />
                    <h4>Rent-A-Rally</h4>
                    <p>Sfasodifjasodfimasoifmsoidfmd</p>
                </div>
            </div>
        </>
    )
}