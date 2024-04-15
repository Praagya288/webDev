import styles from "./contactHeader.module.css"
function ContactHeader() {
  return (
    <div className={`${styles.contact_section} container`}>
        <h1>Contact Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis odio beatae suscipit praesentium assumenda mollitia molestias nulla consequuntur earum eveniet.</p>
    </div>
  )
}

export default ContactHeader