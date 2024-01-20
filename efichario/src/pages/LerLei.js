import React, { useEffect, useState } from 'react'
import styles from "../components/Home.module.css"
import Titulo from '../components/Titulo'
import Capsula from '../components/Capsula'
import Artigo from '../components/Artigo'
import arrayShuffle from 'array-shuffle';
import axios from 'axios'
import { useLocation, useParams } from "react-router-dom"

const LerLei = (props) => {

    const [lei, setLei] = useState([]);
    const [artigos, setArtigos] = useState([]);
    const [carregamento, setCarregamento] = useState(false);
    const {id} = useParams();

    let location = useLocation();
    console.log(useParams);

    // Define um efeito que será executado apenas uma vez na montagem do componente
    useEffect(() => {
        // Define uma função assíncrona 'fetchLei' para buscar dados da API
        const fetchLei = async () => {
            try {
                // Faz uma solicitação GET para a URL da API
                const response = await axios.get('http://192.168.0.107:3001/api/v2/leis/' + id);
                //console.log(response); // Exibe a resposta no console para depuração

                // Verifica se a resposta da API tem um status de 200 (OK)
                if (response.status === 200) {
                    // Se for bem-sucedida, extrai os dados da resposta
                    const lei = response.data;

                    // Define os dados obtidos no estado 'lei' para uso posterior
                    setLei(lei.lei);
                    setArtigos(lei.lei.dados);

                    // Define 'carregamento' como verdadeiro após o carregamento bem-sucedido
                    setCarregamento(true);

                    //console.log(lei.lei.dados);
                } else {
                    // Se a resposta tiver um status diferente de 200, exibe um erro no console
                    console.error('Erro ao obter a lei. Status:', response.status);
                }
            } catch (error) {
                // Captura erros de solicitação ou outros erros e exibe uma mensagem de erro no console
                console.error('Ocorreu um erro ao fazer a solicitação para a API:', error.message);
            }
        };

        // Verifique se 'carregamento' é falso antes de chamar 'fetchLei'
        if (!carregamento) {
            fetchLei();
        }
    }, []); // Este efeito não depende de nenhuma variável e será executado apenas uma vez

    return (
        <article>


                    <div className={styles.leitura}>
                        {artigos !== undefined && artigos.map((e, key) => (
                            <Capsula key={key} titulo={e.titulo} paragrafos={e.paragrafos} />
                        ))}
                    </div>


        </article>
    )
}


export default LerLei