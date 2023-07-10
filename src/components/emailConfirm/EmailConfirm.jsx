import styles from './EmailConfirm.module.css';
import check from '../../../public/icons/accept.png';
import { motion } from 'framer-motion';

export const EmailConfirm = () => {
    return (
        <>
            <motion.div className={styles.emailConfirm}
                initial={{opacity: 0, translateY: 50}}
                animate={{opacity: 1, translateY: 0}}
                transition={{duration: 0.3}}
            >
                <p>Email Succesfully sent</p>
                <img id={styles.check} src={check} />
            </motion.div>
        </>
    )
}