import styles from './Projects.module.css';
import rent from '../../../public/thumbnails/rentThumbnail.png';
import { Project } from '../../components/project/Project';
import { Icon } from '../../components/button/Icon';


export const Projects = () => {
    return (
        <>
            <div className={styles.projectsContainer} id='projects'>
                <h3>Projects</h3>
                <div className={styles.projects}>
                    <div className={styles.projectShowcaseContainer}>
                        <a href='https://rentarally.netlify.app/' target='_blank'><img id={styles.project} src={rent} /></a>
                        <div className={styles.projectAbout}>
                            <h4>Rent-A-Rally</h4>
                            <br />
                            <p>Going on a trip? Need a car? We got you at Rent-A-Rally with a wide selection of choices and prices for your needs.</p>
                            <div className={styles.icons}>
                                <Icon text='React'/>
                                <Icon text='Redux'/>
                                <Icon text='Css'/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.projectShowcaseContainer}>
                        <a href='https://rentarally.netlify.app/' target='_blank'><img id={styles.project} src={rent} /></a>
                        <div className={styles.projectAbout}>
                            <h4>Rent-A-Rally</h4>
                            <br />
                            <p>Sfasodifjasodfimasoifmsoidfmd</p>
                            <div className={styles.icons}>
                                <Icon text='React'/>
                                <Icon text='Redux'/>
                                <Icon text='Css'/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.projectShowcaseContainer}>
                        <a href='https://rentarally.netlify.app/' target='_blank'><img id={styles.project} src={rent} /></a>
                        <div className={styles.projectAbout}>
                            <h4>Rent-A-Rally</h4>
                            <br />
                            <p>Sfasodifjasodfimasoifmsoidfmd</p>
                            <div className={styles.icons}>
                                <Icon text='React'/>
                                <Icon text='Redux'/>
                                <Icon text='Css'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}