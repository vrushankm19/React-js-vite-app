import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className="container {styles.nav-con}">
        <div className="{styles.nav-main}">
          <div className={styles.nav_flex}>
            <div className={styles.nav_flex_item}>
                <img className={styles.nav_img} src="/public/images/logo.png" alt="" />
            </div>
            <div className={styles.nav_flex_item}>
              <ul className={styles.nav_flex_item_ul}>
                  <li className={styles.nav_flex_item_ul_li}>Home</li>
                  <li className={styles.nav_flex_item_ul_li}>About Us</li>
                  <li className={styles.nav_flex_item_ul_li}>Contact Us</li>
              </ul>
            </div>
          </div>
          </div>
      </div>
    </nav>
  )
}

export default Navigation;