import styles from './Home.module.css';
import { Navbar } from '../../components/navbar/Navbar';
import { CoverPage } from '../../components/coverPage/CoverPage';
import { About } from '../about/About';
import { Projects } from '../projects/Projects';
import { Contact } from '../contact/Contact';

export const Home = () => {
    return (
        <>
            <div className={styles.homeContainer}>
                <Navbar />
                <CoverPage />
            </div>
            <About />
            <Projects />
            <Contact />
        </> 
    )
}