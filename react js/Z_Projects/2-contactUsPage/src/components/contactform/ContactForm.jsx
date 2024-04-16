import styles from "./ContactForm.module.css";
import Button from "../button/Button";
import { MdMessage } from "react-icons/md";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

function contactForm() {
  
  const [name , setName] = useState("Name")
  const [email , setEmail] = useState("Email")
  const [text , setText] = useState("Text")


const onSubmit = (event) => {
  event.preventDefault() ;


      setName(event.target[0].value)
      setEmail(event.target[1].value)
      setText(event.target[2].value)

  console.log(event)
}


  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
          <div className={styles.top_btn}>

          <Button 
        text="VIA SUPPORT CHAT" icon={<MdMessage fontSize=" 24px" />} />
        <Button text="VIA CALL" icon={<BsFillTelephonePlusFill />} />

          </div>

          <Button
          isOutline = {true} text = "VIA EMAIL FORM" fontSize=" 24px"
          icon = {<MdEmail /> }
          />


        <form onSubmit={onSubmit} >

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
          <textarea name="text" rows={3} />
          </div>

      <div 
      style= { {display : "flex"  , justifyContent : "end" } }
      >

          <Button text = "Submit"/>
      </div>
      <div>
        {
          name + " " + email + " " + text + " " 
        }
      </div>

        </form>


      </div>

      <div className={styles.contact_image}>
        <img  className = "right_image" src="/images/supportImage.avif" alt="" />
      </div>
    </section>
  );
}

export default contactForm;
