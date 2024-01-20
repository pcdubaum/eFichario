import React from 'react';
import {useState} from 'react';
import styles from './Indice.module.css';
import Titulo from '../../components/Titulo';
import UsuarioNavBar from './../UsuarioNavBar'
import Capsula from '../../components/Capsula';

const CNU = () => {

    const[paragrafos, setParagrafos] = useState([]);



  return (
   <div>
       <UsuarioNavBar />
   
    <article>
     
        <div className={styles.window} id={styles.conteiner}>

        <div className={styles.grade}> 
         <Titulo texto="Direito Administrativo"/>
         <div className={styles.conjunto}>
            <h1>Direito Administrativo</h1>
            <h1>Direito Constitucional</h1>
            <h1>Raciocínio Lógico</h1>
            <h1>Políticas Públicas</h1>
            <h1>Direitos Humanos</h1>
            <h1>Administração Pública</h1>
            <h1>Realidade Brasileira</h1>
         </div>
         </div>
         
         <div className={styles.grade}>
         <Titulo texto="Direito Constitucional"/>
         <div className={styles.conjunto}>
            <h1>Direito Administrativo</h1>
            <h1>Direito Constitucional</h1>
            <h1>Raciocínio Lógico</h1>
            <h1>Políticas Públicas</h1>
            <h1>Direitos Humanos</h1>
            <h1>Administração Pública</h1>
            <h1>Realidade Brasileira</h1>
         </div>
         </div>

         <div className={styles.grade}>
         <Titulo texto="Raciocínio Lógico"/>
         <div className={styles.conjunto}>
            <h1>Lógica de Argumentação</h1>
            <h1>Anásile Combinatória</h1>
            <h1>Probabilidade</h1>
            <h1>Diagramas Lógicos</h1>
            <h1>Números inteiros</h1>
            <h1>Números Reais e Racionais</h1>
         </div>
         </div>

         <div className={styles.grade}>
         <Titulo texto="Políticas Públicas"/>
         <div className={styles.conjunto}>
            <h1>Direito Administrativo</h1>
            <h1>Direito Constitucional</h1>
            <h1>Raciocínio Lógico</h1>
            <h1>Políticas Públicas</h1>
            <h1>Direitos Humanos</h1>
            <h1>Administração Pública</h1>
            <h1>Realidade Brasileira</h1>
         </div>
         </div>

         
         </div>
    </article>
    </div>
  )
}

export default CNU