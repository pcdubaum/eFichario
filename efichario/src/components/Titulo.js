import React from 'react'
import styles from "./Titulo.module.css"

const Titulo = (texto) => {
  return (
    <div >
      {texto.atencao === undefined && <div className={styles.titulo}>
        <h1>{texto.texto}</h1>
      {console.log(0)}</div>
      }

      {texto.atencao === "sim" && <div className={styles.atencao}>
        <h1>{texto.texto}</h1>
        {console.log(1)}</div>}
    </div>
  )
}

export default Titulo