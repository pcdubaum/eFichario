import React from 'react'
import styles from './UsuarioNavBar.module.css'

const UsuarioNavBar = () => {
  return (
    <nav className={styles.nav} id={styles.usuaruionavbar}>

    <div className={styles.bottomContent} id={styles.usuaruionavbar}>

        <div className={styles.leftContent} id={styles.usuaruionavbar}>
            <button type="button" id={styles.usuaruionavbar} >CURSOS</button>
            <button type="button" id={styles.usuaruionavbar} >MATÉRIAS</button>
            <button type="button" id={styles.usuaruionavbar} >COMUNIDADE</button>
            <button type="button" id={styles.usuaruionavbar} >PERFIL</button>
           
        </div>
        <div className={styles.leftContent} id={styles.usuaruionavbar2}>
          <button type="button" id={styles.usuaruionavbar} >ADMINISTRAR</button>
        </div>
       

    </div>

</nav>
  )
}

export default UsuarioNavBar