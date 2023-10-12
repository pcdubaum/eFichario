import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import styles from "./Home.module.css"
import Titulo from './Titulo'

const Home = () => {


  return (
    <article className={styles.article}>

      <div className={styles.central}>
        <h1>Bem Vindo ao eFichario!</h1>
        <h2>Concurseiros ajudando concurseiros!</h2>
        <h2>Automatizar o processo de revisão. Entre, deixe uma dica ou só aproveite o conteúdo que já foi criado.</h2>
        <h2>Considere se registrar.</h2>
        <NavLink to="/cursos"><h2>Iniciar</h2></NavLink>
      </div>


    </article>
  )
}

export default Home