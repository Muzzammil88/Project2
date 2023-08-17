import styles from "./ContactHeader.module.css";
const ContactHeader = () => {
  return (
    <div className={styles.contact}>
      <h1>CONTACT US</h1>
      <p>
        Thank you for your interest in our company. We are always happy to hear
        from you and answer any questions you may have. You can contact us by
        phone, email.You can also fill out the following
        contact form and we will get back to you as soon as possible. We look
        forward to hearing from you soon.
      </p>
    </div>
  );
};

export default ContactHeader;
