import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"

const Navbar = () => {

    return (
        <nav className={styles.nav} id={styles.navbar}>

            <div className={styles.bottomContent} id={styles.navbar}>

                <div className={styles.leftContent} id={styles.navbar}>
                    <h2 className={styles.h2} id={styles.navbar} >Paulo Cezar da Silva Junior (Criador)</h2>
                    <h2 className={styles.h2} id={styles.navbar} >eFichario</h2>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;