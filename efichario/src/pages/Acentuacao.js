import React from 'react'
import styles from "../components/Home.module.css"
import Titulo from '../components/Titulo'
import Capsula from '../components/Capsula'

const Acentuacao = () => {
        return (
                <article>
                        <Titulo texto="Língua Portuguesa - Regras de Acentuação" />
                        <div className={styles.conjunto}>
                                <div className={styles.leitura}>
                                        <h1>Regras Gerais</h1>

                                        <Capsula titulo="Toda proparoxítona é acentuada."
                                                texto="São palavras que têm a antepenúltima sílaba da palavra como sílaba tônica."
                                                exemplo="Lâmpada, Árvore, Ginástica, Fanático, Júpiter, Olimpíada (O-lim-pí-a-da), Zodíaco (Zo-dí-a-co)" />


                                        <Capsula titulo="Acentuam-se as paroxítonas não terminadas em A, E, O e EM (seguidas ou não de S)."
                                                texto="São palavras que têm a penúltima sílaba da palavra como sílaba tônica. Maioritariamente não são acentuadas e representam a maioria das palavras da língua portuguesa."
                                                exemplo="Caráter, Táxis, Hífen, Amável, Ânus, Tórax, Tríceps, Álbum." />

                                        <Capsula titulo="Acentuam-se as paroxítonas terminadas em ditongo oral(aberto)."
                                                texto = "São acentuadas por terminar em ditongo crescente (-ea, -eo, -ia, -ie, -io, -ua, -ue, -uo)"
                                                exemplo="Ágeis, Imundície, Lírio, Túneis, Tênue, Jóquei, Nódoa, Cerimônia, História."
                                                atencao="sim"
                                                atencaomsg= "Não é matéria pacifica, mas está nos manuais de comunicação da Câmara dos Deputados e do Senado Federal" 
                                                cuidadomsg = "Veja a regra das proparoxítunas aparente mais a baixo." />


                                        <Capsula titulo="Acentuam-se os ditongos aberto EU, EI e OI, quando aparecem em posição oxítona."
                                                exemplo="Chapéu, Pastéis e Corrói." />

                                        <Capsula titulo="Acentuam-se as vogais I e U, quando ocupam a posição de segunda vogal em um hiato."
                                                exemplo="Prejuízos, Saúde."
                                                atencao="sim"
                                                atencaomsg="Nunca se esqueça que essa regra vale para as vogais I e U quando ocupam a SEGUNDA vogal em um HIATO, nunca a primeira." />

                                        <Capsula titulo="Acentuam-se as oxítonas terminadas em A, E, O e EM (seguidas ou não de S)."
                                                exemplo="Pará, Patês, Gigolô, Armazéns." />

                                        <Capsula titulo="Acentuam-se os monossílabos tônicos terminados em A, E e O."
                                                exemplo="Lá, Ré, Dó." />

                                        <Capsula titulo="Proparoxítona aparente."
                                                texto="São palavras que têm a antepenúltima sílaba da palavra como sílaba tônica."
                                                exemplo="Polícia - Po-lí-ci-a ou Po-lí-cia; Alínea = A-lí-ne-a ou A-lí-nea; Acúleo - A-cú-le-o ou A-cú-leo" 
                                                cuidado = "sim"
                                                cuidadomsg = "Uma proparoxítona aparente é uma palavra acentuada que, por terminar em ditongo crescente (-ea, -eo, -ia, -ie, -io, -ua, -ue, -uo), tanto pode ser classificada de paroxítona como de proparoxítona."/>


                                </div>
                        </div>
                </article>
        )
}

export default Acentuacao