import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Form.module.css';
import { EmailConfirm } from '../../components/emailConfirm/EmailConfirm';

export const Form = () => {
  const form = useRef();

  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_SERVICE_KEY, import.meta.env.VITE_TEMPLATE_KEY, form.current, import.meta.env.VITE_ID_KEY)
      .then((result) => {
          setIsEmailSent(true)
          setTimeout(() => {
            setIsEmailSent(false);
          }, 3000)
      }, (error) => {
          console.log(error.text);
      });
    
  };

  

  return (

    <>
    {isEmailSent && <EmailConfirm />}
    <form className={styles.formContainer} ref={form} onSubmit={sendEmail}>
        <div className={styles.inputs}>
            <input type="text" name="user_name" placeholder='name'/>
            <input type="email" name="user_email" placeholder='email'/>
        </div>
        <div className={styles.textArea}>
            <textarea name="message" rows="5" placeholder="Message" />
        </div>
        <input type="submit" value="Send" id={styles.button} />
    </form>
    </>
  );
};