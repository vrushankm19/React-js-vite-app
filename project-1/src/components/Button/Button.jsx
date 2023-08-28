import styles from './Button.module.scss'

const Button = (props) => {
  console.log(props.isOutline);
  console.log(props.name);
  return (  
    <button className={props.isOutline ? styles.btn_primary : styles.btn_primary_line}>
    {props.icon}
    {props.name}</button>
  )
}

export default Button;  