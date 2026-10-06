import {Link, NavLink} from 'react-router-dom';
import styles from '../styles/header.module.css';

function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.inner}>
                <Link to="/" className={styles.logo}>
                    ShopSort
                </Link>
                
                <nav className={styles.nav}>
                    <NavLink to="/" end className={({ isActive }) => 
                        isActive ? `${styles.link} ${styles.active}` : styles.link}>
                            Home
                    </NavLink>

                     <NavLink to="/login" className={({ isActive }) => 
                        isActive ? `${styles.link} ${styles.active}` : styles.link}>
                            Login
                    </NavLink>

                     <NavLink to="/signup" className={({ isActive }) => 
                        isActive ? `${styles.link} ${styles.active}` : styles.link}>
                            Sign Up
                    </NavLink>
                </nav> 
            </div>
        </header>
    )
}

export default Header;