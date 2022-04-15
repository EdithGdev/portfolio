import styles from '../styles/ContactCode.module.css';

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;Book A Meeting:{' '}
        <a href="https://calendly.com/edithg" target="_blank" rel="noopener">
          calendly.com/EdithG
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;E-mail:{' '}
        <a
          href="mailto:edithgee@yahoo.com"
          target="_blank"
          rel="noopener"
        >
          edithgee@yahoo.com
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;GitHub:{' '}
        <a href="https://github.com/EdithGdev" target="_blank" rel="noopener">
          EdithGdev
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;LinkedIn:{' '}
        <a
          href="www.linkedin.com/in/EdithGdev"
          target="_blank"
          rel="noopener"
        >
          EdithGdev
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;Instagram:{' '}
        <a
          href="https://www.instagram.com/edithgdev/"
          target="_blank"
          rel="noopener"
        >
          EdithGdev
        </a>
        ;
      </p>
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
