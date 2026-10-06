import styles from '../styles/footer.module.css'

function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.section}>
                    <h3>ShopSort</h3>
                    <p>Your ultimate shopping companion.</p>
                </div>

                <div className={styles.section}>
                    <h3>Contact</h3>
                    <p>info@shopsort.app</p>
                    <p>Pietermaritzburg, South Africa</p>
                </div>
            </div>

            <p className={styles.copyright}>© 2026 ShopSort</p>
        </footer>
    )
}

export default Footer;