import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"

const Navbar = () => {

    return (
        <nav className={styles.nav}> 
            <div className={styles.topContent}>
                <div className={styles.leftContent}>
                <h1 id={styles.logo}>Pêce</h1>
                    <input></input>
                    <NavLink to="/"><h2>Voltar para escolha de conteúdo.</h2></NavLink>
                </div>
                <div className={styles.rightContent}>
                    <h1>Registrar / Entrar</h1>
                </div>
            </div>
           
            <div className={styles.bottomContent}>
            <div className={styles.leftContent}>
                    <h2>Paulo Cezar da Silva Junior (Criador)</h2>
                </div>
                <div className={styles.rightContent}>
                    <button>Aulas (14)</button>
                    <button>Comentários (12)</button>
                    <button>Likes(1.288)</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;