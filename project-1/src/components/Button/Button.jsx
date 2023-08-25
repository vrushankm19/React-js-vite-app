import styles from './Button.module.scss'
import { BiMessageDetail } from 'react-icons/bi';

const Button = (props) => {
  console.log(props.isOutline);
  console.log(props.name);
  return (  
    <a href="" className={props.isOutline ? styles.btn_primary : styles.btn_primary_line}>
    <BiMessageDetail />
    {props.name}</a>
  )
}

export default Button;  