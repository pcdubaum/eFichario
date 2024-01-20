import React, { useState, useEffect } from 'react'
import styles from '../pages/CriarLei.module.css'
import Paragrafos from './Paragrafos';

const ArtigosHandler = ({artigos}) => {

  array.forEach(element => {
    
  });
  

  return (
    <div>

    </div>
)}

export default ArtigosHandler

/*const [carregamento, setCarregamento] = useState(false);

  useEffect(() => {

    const iniciarValores = () => {

      console.log("Carregado!");
      
      setCarregamento(true);

    }

    if (!carregamento) {
      iniciarValores();
    }
  }, [carregamento]);


  const handleChange = (e, i) => {

    const { name, value } = e.target;

    lista[i][name] = value;
    setCarregamento(false);

    console.log(lista);

    }


return (
  <div>

  {lista !== undefined && lista.map((val, i) => 
  
      <div key={i}  className={styles.linha}>
           <p className={styles.titulo}>Artigo: {val.numero} - Titulo: {val.titulo}</p> <input name="conteudo" value={val.conteudo} defaultValue={val.conteudo}  onChange={(e) => handleChange(e, i)} />  
          </div>

      
      )


  }
  </div>
  
)*/