import style from './ContactHeader.module.scss'

const ContactHeader = () => {
  return (
    <>
        <section className={style.header}>
            <div className={`container ${style.header_con}`}>
                <h1 className={style.header_h1}>CONTACT US</h1>
                <p className={style.header_p}>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
            </div>
        </section>
    </>
  )
}

export default ContactHeader