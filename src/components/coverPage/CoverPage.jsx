import { Typewriter } from 'react-simple-typewriter'
import styles from './CoverPage.module.css';
import me from '../../../public/images/portfolioMe.png';

export const CoverPage = () => {
    return (
        <>
            <div className={styles.coverText}>
                <div className={styles.text}>
                    <h3>Hello, I'm</h3>
                    <p id={styles.name}>Jonathan Santos</p>
                    <p id={styles.typewriter}>A<Typewriter 
                        words={[' Web Content Editor', ' Web Developer']}
                        loop={0 | false}
                        deleteSpeed={100}
                        />
                    </p>
                </div>
                <img src={me} alt='picture of me' />
            </div>
        </>
    )
}