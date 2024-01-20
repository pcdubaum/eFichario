import React from 'react'
import Exemplo from './Exemplo'
import Titulo from './Titulo'
import styles from "./Capsula.module.css"
import Cuidado from './Cuidado'

const Capsula = (texto) => {
  return (
    <div >
      {((texto.atencao === undefined) && (texto.cuidado === undefined)) && <Titulo texto={texto.titulo} />}
      {texto.atencao === "sim" && <Titulo atencao="sim" texto={texto.titulo} atencaomsg={texto.atencaomsg} />}
      {texto.cuidado === "sim" && <Titulo cuidado="sim" texto={texto.titulo} cuidadomsg={texto.cuidadomsg} />}

      <div className={styles.conjunto} id={styles.paragrafos}>

  
        {texto.paragrafos !== undefined && texto.paragrafos.map((e, key) => (
          (e.map((val, key2) => (
            <div key={key2}>{console.log(val.paragrafo)}
            <h2>{val.paragrafo}</h2></div>
          )))
        ))}
        {texto.texto !== undefined && <h2>{texto.texto}</h2>}
        {texto.exemplo !== undefined && <Exemplo texto={texto.exemplo} />}
        {texto.atencaomsg !== undefined && <h2 id={styles.atencao}>{texto.atencaomsg}</h2>}
        {texto.cuidadomsg !== undefined&& <Cuidado texto = {texto.cuidadomsg} />}
      </div>
    </div>
  )
}

export default Capsula