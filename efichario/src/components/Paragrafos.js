import React, { useState } from 'react'
import styles from '../pages/CriarLei.module.css'
import { useStateseEffect } from 'react';
const Paragrafos = ({lista, numero}) => {

    const [conteudo, setConteudo] = useState('');


    const handleChange = (e, i) => {
      e.preventDefault();
      setConteudo(e.target.value)
      const { name, value } = e.target
      const onChangeVal = [...lista]
      onChangeVal[i][name] = value
      lista = onChangeVal

      }

  return (
    <div>
    {lista !== undefined && Object.values(lista).map((val, i) => 
    val.numero === numero &&
        <div key={i}  className={styles.linha}>
              <p className={styles.titulo}>Paragrafo: {val.numero}</p> <input name="content" value={val.content}  onChange={(e) => handleChange(e, i)} />  
            </div>
        )
    }
    </div>
    
  )
}

export default Paragrafos