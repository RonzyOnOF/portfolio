import styles from './Icon.module.css';

export const Icon = ({ text }) => {

    return (
        <>
            <div className={styles.icon}>
                <p>{text}</p>
            </div>
        </>
    )
}