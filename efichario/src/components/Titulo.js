import React from 'react'
import styles from "./Titulo.module.css"

const Titulo = (texto) => {
  return (
    <div className={styles.titulo}>
        <h1>{texto.texto}</h1>
      </div>
  )
}

export default Titulo