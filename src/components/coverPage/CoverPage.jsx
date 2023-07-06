import { Typewriter } from 'react-simple-typewriter'
import styles from './CoverPage.module.css';
import me from '../../../public/images/portme.png';

export const CoverPage = () => {
    return (
        <>
            <div className={styles.coverText}>
                <div className={styles.text}>
                    <h2>Home Page</h2>
                    <p>Hello, I'm</p>
                    <p>Jonathan Santos</p>
                    <p>A<Typewriter 
                        words={[' Web Content Editor', ' Web Developer']}
                        loop={0 | false}
                        deleteSpeed={100}
                        />
                    </p>
                </div>
                <img src={me} />
            </div>
        </>
    )
}