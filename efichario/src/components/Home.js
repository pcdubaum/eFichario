import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./Home.module.css"
import Titulo  from './Titulo'

const Home = () => {
  return (
    <article className={styles.article}>
      <Titulo texto = "Regras de Escolha um Conteúdo"/>

      <div className={styles.conjunto}>
        <div className={styles.materia}>

          <Titulo texto = "Matemática" />

          <div className={styles.corpo}>
            <NavLink to="/crase"><h2>Desvio Padrao e Variância.</h2></NavLink>
          </div>
          
        </div>
        <div className={styles.materia}>

          <Titulo texto = "Língua Portuguesa"/>

          <div className={styles.corpo}>
            <NavLink to="/acentuacao"><h2>Acentuação.</h2></NavLink>
            <NavLink to="/crase"><h2>Crase.</h2></NavLink>
          </div>

        </div>
      </div>

    </article>
  )
}

export default Home