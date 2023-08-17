import { useState } from "react";
import Button from "../../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage, MdCall, MdMail } from "react-icons/md";

const ContactForm = () => {

const[name,setName]=useState("Muzzammil");
const[email,setEmail]=useState("muzi1166@gmail.com");
const[text,setText]=useState("This is my 2nd project.");

  const onSubmit = (event) => {
    event.preventDefault();
    setName( event.target[0].value);
    setEmail( event.target[1].value);
    setText( event.target[2].value);
    
    console.log({
      name,email,text
    })
  };

  return (
    <section className={styles.container}>
      <div className={styles.contactForm}>
        <div className={styles.topBtn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<MdCall fontSize="24px" />} />
        </div>
        <Button
          isOutLine={true}
          text="VIA  E-mail Form"
          icon={<MdMail fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.formControl}>
            <label htmlFor="name"> Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="Email">Email</label>
            <input type="Email" name="Email" />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows={8} />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUBMIT BUTTON" />
          </div>
          <div>
            {
                name+" " +email+" "+text
            }
          </div>
        </form>
      </div>
      <div className={styles.contactImg}>
        <img src="./images/R.jpg" alt="contant image" />
      </div>
    </section>
  );
};

export default ContactForm;
