import React from 'react'
import styles from "./Exemplo.module.css"

const Exemplo = (texto) => {
  return (
    <div className={styles.exemplo}>Exemplos: <i>{texto.texto}</i></div>
  )
}

export default Exemplo