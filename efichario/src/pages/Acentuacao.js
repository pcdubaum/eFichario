import React from 'react'
import styles from "../components/Home.module.css"
import Titulo from '../components/Titulo'

const Acentuacao = () => {
    return (
        <article>
            <Titulo texto="Língua Portuguesa - Regras de Acentuação" />
            <div className={styles.conjunto}>
                <div className={styles.leitura}>
                    <h1>Regras Gerais</h1>
                    <h2>Toda proparoxítona é acentuada.</h2>
                    <h2>Acentuam-se as oxítonas terminadas em A, E, O e EM (seguidas ou não de S).</h2>
                    <h2>Acentuam-se as paroxítonas não terminadas em A, E, O e EM (seguidas ou não de S).</h2>
                    <h2>Acentuam-se os monossílabos tônicos terminados em A, E e O.</h2>
                    <h2>Acentuam-se os ditongos aberto EU, EI e OI, quando aparecem em posição oxítona.</h2>
                    <h2>Acentuam-se as vogais I e U, quando ocupam a posição de segunda vogal em um hiato.</h2>
                </div>
            </div>
        </article>
    )
}

export default Acentuacao