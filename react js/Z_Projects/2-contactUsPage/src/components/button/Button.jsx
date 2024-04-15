
import styles from "./Button.module.css"
function Button(props) {
  const{isOutline , text , icon} =  props 
  return (
    <button className={isOutline? styles.outline_btn : styles.primary_btn}>
        
        {props.text}
        {props.icon}
    </button>
  )
}

export default Button ; 