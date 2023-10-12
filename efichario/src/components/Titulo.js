import React from 'react'
import styles from "./Titulo.module.css"

const Titulo = (texto) => {
  return (
    <div className={styles.titulo}>
      {((texto.atencao === undefined) && (texto.cuidado === undefined)) && <div className={styles.titulo}>
        <h1 id={styles.titulo}>{texto.texto}</h1>
      </div>
      }

      {texto.atencao === "sim" && <div className={styles.atencao}>
        <h1>{texto.texto}</h1>
        </div>}

        {texto.cuidado === "sim" && <div className={styles.cuidado}>
        <h1>{texto.texto}</h1>
        </div>}
    </div>
    
  )
}

export default Titulo