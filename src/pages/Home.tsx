import {Link} from 'react-router-dom';
import shoppingListImage from '../assets/shoppingList.jpg';
import styles from '../styles/home.module.css';

function Home(){
    return(
    <section className={styles.home}>
        <div className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Ditch the paper, <span className={styles.highlight}>Streamlined chores.</span>
                </h1>

                <p className={styles.description}>
                    Say goodbye to forgotten items and chaotic text threads. Safely track your 
                    groceries, automatically organize by department, and share beautiful, interactive 
                    lists with your family.
                </p>

                <div className={styles.buttons}>
                    <Link to="/sigup" className={styles.primaryButton}>
                        Get started free
                    </Link>

                    <Link to="/login" className={styles.secondaryButton}>
                        Already owning an occount
                    </Link>

                    <div className={styles.imageWrapper}>
                        <img
                            src={shoppingListImage}
                            alt='A shopping list on a phone'
                            className={styles.image} 
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
   );
}

export default Home;