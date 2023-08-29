import React from 'react'
import Titulo from './Titulo'
import Cuidado from './Cuidado'
import styles from "../components/Capsula.module.css"

const Artigo = (texto) => {
  return (
    <div >
    {((texto.atencao === undefined) && (texto.cuidado === undefined)) && <Titulo texto={texto.titulo} />}
    {texto.atencao === "sim" && <Titulo atencao="sim" texto={texto.titulo} atencaomsg={texto.atencaomsg} />}
    {texto.cuidado === "sim" && <Titulo cuidado="sim" texto={texto.titulo} cuidadomsg={texto.cuidadomsg} />}
    <div className={styles.conjunto}>
    {texto.paragrafos.map((i, key) => (
        <p key={key}>{i}</p>
    ))}

    {texto.incisos !== undefined && texto.incisos.map((i, key) => (
        <h2 key={key}>{i}</h2>
    ))}

{texto.demaisParagrafos !== undefined && texto.demaisParagrafos.map((i, key) => (
        <h2 key={key}>{i}</h2>
    ))}

    {texto.atencaomsg !== undefined && <h2 id={styles.atencao}>{texto.atencaomsg}</h2>}
    {texto.cuidadomsg !== undefined&& <Cuidado texto = {texto.cuidadomsg} />}
    </div>
    </div>
  )
}

export default Artigo