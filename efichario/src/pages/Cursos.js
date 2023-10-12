import React from 'react'
import {useState, useEffect} from 'react'
import styles from './CriarLei.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Cursos = () => {

    const [carregamento, setCarregamento] = useState(false);
    const [aulas, setAulas] = useState([]);

     // Define um efeito que será executado apenas uma vez na montagem do componente
     useEffect(() => {
        // Define uma função assíncrona 'fetch' para buscar dados da API
        const fetch = async () => {
            try {
                // Faz uma solicitação GET para a URL da API
                const response = await axios.get('http://192.168.0.107:3001/api/v2/leis/?' + "materias=camara_dos_deputados&fields=_id,nome,artigos,autor,criadoEm");
                //console.log(response); // Exibe a resposta no console para depuração

                // Verifica se a resposta da API tem um status de 200 (OK)
                if (response.status === 200) {
                    // Se for bem-sucedida, extrai os dados da resposta
                    const dados = response.data;

                    // Define os dados obtidos no estado 'lei' para uso posterior
                    setAulas(dados);

                    // Define 'carregamento' como verdadeiro após o carregamento bem-sucedido
                    setCarregamento(true);


                    console.log(dados);
                } else {
                    // Se a resposta tiver um status diferente de 200, exibe um erro no console
                    console.error('Erro ao obter as aulas. Status:', response.status);
                }

                

            } catch (error) {
                // Captura erros de solicitação ou outros erros e exibe uma mensagem de erro no console
                console.error('Ocorreu um erro ao fazer a solicitação para a API:', error.message);
            }
        };

        // Verifique se 'carregamento' é falso antes de chamar 'fetc'
        if (!carregamento) {
            fetch();
        }
    }, []); // Este efeito não depende de nenhuma variável e será executado apenas uma vez


  return (
      <div className={styles.mostruario}> 
          {carregamento &&
          <div className={styles.cursos}>
          <div className={styles.titulo}><h1>Camara</h1></div>

          <div className={styles.conjunto}>
              {aulas.lei.map((i, key) => (
                <div> 
                    <div> <h2 id={styles.mostruario}>{i.nome}</h2> </div>
                    <div> <Link to={`/lerlei/${i._id}`}><h2 id={styles.mostruario}>(leitura)</h2></Link> </div>
                    <br></br>
                </div>
                ))}
          </div>
      </div>}
      <Link to={`/criarlei/`}><h2 id={styles.mostruario}>Criar Nova Lei</h2></Link>
      </div>
  )
}

export default Cursos