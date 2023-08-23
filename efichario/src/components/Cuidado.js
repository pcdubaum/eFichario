import React from 'react'
import styles from "./Cuidado.module.css"

const Cuidado = (texto) => {
  return (
    <div className={styles.cuidado}>
    <h1 className={styles.cuidado}>{texto.texto}</h1>
  </div>
  )
}

export default Cuidado