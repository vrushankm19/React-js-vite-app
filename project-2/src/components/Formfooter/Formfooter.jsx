import styles from './Formfooter.module.scss'
import Button from '../Button/Button'
import { BiMessageDetail } from 'react-icons/bi';
import {IoCallSharp} from 'react-icons/io5';
import {MdCloudDone} from 'react-icons/md';


const Formfooter = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data');
  };
  return (
    <>
        <section className={styles.formfooter}>
            <div className={`container ${styles.formfooter_con}`}>
              <div className={`${styles.formfooter_data}`}>
                <div className={`${styles.formfooter_form}`}>
                    <div className={`${styles.formfooter_flex}`}>
                        <Button isOutline={true} name="Read More" icon={<BiMessageDetail />} />
                        <Button isOutline={false} name="Know More" icon={<IoCallSharp />} />
                    </div>
                    <Button isOutline={false} name="VIA EMAIL FORM" icon={<BiMessageDetail />} />
                    <div className={styles.formfooter_form_box}>
                      <form className={styles.formfooter_form_flex} onClick = {() => handleSubmit()}>
                        <input className={styles.formfooter_form_fild} type="text"  name="name" placeholder="Name" />
                        <input className={styles.formfooter_form_fild} type="email"  name="email" placeholder="Email" />
                        <input className={styles.formfooter_form_fild} type="text" name="phone" placeholder="Phone" />
                        <input className={styles.formfooter_form_fild} type="text"  name="message" placeholder="Message" />
                        {/* <button onClick={() => handleSubmit()}>buttton</button> */}
                        <Button onClick={() => handleSubmit()} type="submit" isOutline={false} name="VIA EMAIL FORM" icon={<MdCloudDone />} />
                        {/* <input type="submit" value="Submit" /> */}
                      </form>
                    </div>
                </div>
                <div className={styles.formfooter_img_con}>
                    <img className={styles.formfooter_img} src="/public/images/banner.svg" alt="" />
                </div>
              </div>
            </div>
        </section>
    </>
  )
}

export default Formfooter;