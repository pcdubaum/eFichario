import React from 'react'
import styles from "./Atencao.modules.css"

const Atencao = (texto) => {
  return (
    <div className={styles.atencao}><p> {texto.texto}</p></div>
  )
}

export default Atencao