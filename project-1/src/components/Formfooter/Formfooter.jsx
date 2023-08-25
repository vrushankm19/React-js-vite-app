import styles from './Formfooter.module.scss'
import Button from '../Button/Button'
import { BiMessageDetail } from 'react-icons/bi';

const Formfooter = () => {
  return (
    <>
        <section className={styles.formfooter}>
            <div className={`container ${styles.formfooter_con}`}>
                <Button isOutline={true} name="Read More" />
                <Button isOutline={false} name="Know More" />
            </div>
        </section>
    </>
  )
}

export default Formfooter;