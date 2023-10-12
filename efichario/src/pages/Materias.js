import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import styles from "./Home.module.css"
import Titulo from './Titulo'

const Materias = () => {

  const [dados, setDados] = useState([]);
  const [carregamento, setCarregamento] = useState(false);

  // Define um efeito que será executado apenas uma vez na montagem do componente
  useEffect(() => {
    // Define uma função assíncrona 'fetchLei' para buscar dados da API
    const fetchLei = async () => {
      try {
        // Faz uma solicitação GET para a URL da API
        const response = await axios.get('http://192.168.0.107:3001/api/v2/leis');
        console.log(response); // Exibe a resposta no console para depuração

        // Verifica se a resposta da API tem um status de 200 (OK)
        if (response.status === 200) {
          // Se for bem-sucedida, extrai os dados da resposta
          const lei = response.data;
          // Define 'carregamento' como verdadeiro após o carregamento bem-sucedido
          setCarregamento(true);
          // Define os dados obtidos no estado 'lei' para uso posterior
          setDados(lei.lei);

          console.log(lei);
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
    <article className={styles.article}>

      <div className={styles.conjunto}>
        <div className={styles.materia}>

          <Titulo texto='Câmara dos Deputados' />

          {carregamento && dados.map((val, i) =>
            <div className={styles.corpo}>
              <NavLink to={{pathname :"/lerlei"}} state={{from: val._id}}> {val.nome}</NavLink>
            </div>
          )}
        </div>

      </div>

    </article>
  )
}

export default Materias