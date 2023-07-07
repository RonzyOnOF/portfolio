import styles from './About.module.css';
import pose from '../../../public/images/arnoldPose2.png';
import { Icons } from '../../components/icons/Icons';

export const About = () => {
    return (
        <>
            <div className={styles.aboutContainer} id='about'>
                <h3>About Me</h3>
                <div className={styles.textContainer}>
                    <img id={styles.mePicture} src={pose} />  
                    <div className={styles.aboutSkills}>
                        <div className={styles.aboutText}>
                            <p>I'm a developer based in Texas and have a passion for creating and maintaining websites. I make ideas into functional and responsive sites. When I'm not coding, I enjoy lifting weights, learning, and looking at cars I can't afford😭.</p>
                            <br />
                            <p>Skills:</p>
                        </div>
                        <Icons />
                    </div>
                </div>
            </div>
        </>
    )
}