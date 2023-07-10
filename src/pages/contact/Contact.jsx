import styles from './Contact.module.css';
import { Form } from '../../components/form/Form';

export const Contact = () => {

    return (
        <>
            <div className={styles.contactSection} id='contact'>
                <h3 id={styles.header}>Don't be shy, shoot me an email</h3>
                <Form />
            </div>
        </>
    )
}