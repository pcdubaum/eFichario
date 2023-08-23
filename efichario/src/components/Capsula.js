import React from 'react'
import Exemplo from './Exemplo'
import Titulo from './Titulo'
import styles from "../components/Capsula.module.css"

const Capsula = (texto) => {
  return (
    <div >
      {texto.atencao === undefined && <Titulo texto = {texto.titulo} />}
      {texto.atencao === "sim" && <Titulo  atencao = "sim" texto = {texto.titulo} atencaomsg = {texto.atencaomsg} />}
          <div className={styles.conjunto}>
        <Exemplo texto = {texto.exemplo} />
        {texto.atencao === "sim" && <h2>{texto.atencaomsg}</h2>}
        </div>
    </div>
  )
}

export default Capsula