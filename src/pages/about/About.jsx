import styles from './About.module.css';
import pose from '../../../public/images/arnoldPose2.png';
import { Icons } from '../../components/icons/Icons';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

export const About = () => {
    
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
            <div className={styles.aboutContainer} id='about'>
                <h3>About Me</h3>
                <motion.div className={styles.textContainer}
                    variants={{
                        hidden: {opacity: 0, y: 75},
                        visible: {opacity: 1, y: 0},
                    }}
                    initial='hidden'
                    animate={controls}
                    transition={{duration: 0.5, delay: 0.35}}
                >
                    <img ref={ref} id={styles.mePicture} alt='me doing arnold pose' src={pose} />  
                    <div className={styles.aboutSkills}>
                        <div className={styles.aboutText}>
                            <p>I'm a developer based in Texas and have a passion for creating and maintaining websites. I make ideas into functional and responsive sites. When I'm not coding, I enjoy lifting weights, learning, and looking at cars I can't afford in the facebook marketplace😭.</p>
                            <br />
                            <p>Skills:</p>
                        </div>
                        <Icons />
                    </div>
                </motion.div>
            </div>
        </>
    )
}