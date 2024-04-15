import styles from "./ContactForm.module.css";
import Button from "../button/Button";
import { MdMessage } from "react-icons/md";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function contactForm() {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
          <div className={styles.top_btn}>

          <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize=" 24px" />} />
        <Button text="VIA CALL" icon={<BsFillTelephonePlusFill />} />

          </div>

          <Button
          isOutline = {true} text = "VIA EMAIL FORM" fontSize=" 24px"
          icon = {<MdEmail /> }
          />


        <form >

          <div className={styles.form_control}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
          </div>

          <div className={styles.form_control}>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" />
          </div>

          <div className={styles.form_control}>
          <label htmlFor="text">Text</label>
          <textarea name="text" />
          </div>

        </form>


      </div>

      <div className={styles.contact_image}></div>
    </section>
  );
}

export default contactForm;
