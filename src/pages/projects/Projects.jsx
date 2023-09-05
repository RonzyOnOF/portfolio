import styles from './Projects.module.css';
import rent from '../../../public/thumbnails/rentThumbnail.png';
import aniroll from '../../../public/images/anirollThumb.png';
import githubIcon from '../../../public/icons/gitbutton.png';
import demoIcon from '../../../public/icons/demoButton.png'
import { Project } from '../../components/project/Project';
import { Icon } from '../../components/button/Icon';
import gym from '../../../public/thumbnails/gymThumb.png';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

export const Projects = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView])


    return (
        <>
            <motion.div className={styles.projectsContainer} id='projects' ref={ref}
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0},
                }}
                initial='hidden'
                animate={controls}
                transition={{duration: 0.5, delay: 0.40}}                
            >
                <h3>Projects</h3>
                <p id={styles.subHeader}>Click on thumbnail for live demo!</p>
                <div className={styles.projects}>
                    <div className={styles.projectShowcaseContainer}>
                        <a href='https://aniroll.netlify.app/' target='_blank'><img id={styles.project} src={aniroll} /></a>
                        <div className={styles.projectAbout}>
                            <h4>Aniroll (currently developing)</h4>
                            <br />
                            <p>Your one stop for anything anime related. Pick from dozens of animes where you can binge watch and enjoy or buy some sweet anime products!</p>
                            <div className={styles.icons}>
                                <Icon text='React'/>
                                <Icon text='Redux'/>
                                <Icon text='Css'/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.projectShowcaseContainer}>
                        <a href='https://atlasgym.netlify.app/' target='_blank'><img id={styles.project} src={gym} /></a>
                        <div className={styles.projectAbout}>
                            <h4>Atlas Gym</h4>
                            <br />
                            <p>Atlas Gym is the perfect gym if you're serious about your physique. Train with some elite lifters, as well as overlooked by professionals to help you obtain your dream physique.</p>
                            <div className={styles.icons}>
                                <Icon text='React'/>
                                <Icon text='Css'/>
                                <a id={styles.anchor} href='https://github.com/RonzyOnOF/atlasgym' target='_blank'>Code</a>
                            </div>
                        </div>
                    </div>
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
                                <a id={styles.anchor} href='https://github.com/RonzyOnOF/Rent-A-Rally' target='_blank'>Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}