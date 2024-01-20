import React from 'react'
import {useState, useEffect} from 'react'
import styles from './Cursos.module.css'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import UsuarioNavBar from './UsuarioNavBar'

const Cursos = () => {

    const [carregamento, setCarregamento] = useState(false);
    const [aulas, setAulas] = useState([]);

     // Define um efeito que será executado apenas uma vez na montagem do componente
     useEffect(() => {
        // Define uma função assíncrona 'fetch' para buscar dados da API
        const fetch = async () => {
            try {
                // Faz uma solicitação GET para a URL da API
                const response = await axios.get('https://env-3833985.jelastic.saveincloud.net/api/v2/leis/?' + "fields=_id,nome,artigos,autor,criadoEm");
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
      <div>
          <UsuarioNavBar />
          <div className={styles.window}>
            <h1>Cursos Disponíveis</h1>
            <div className={styles.window} id={styles.conteiner}>
                 <div>  <NavLink to="/consursos/cnu">
                    <button type="button" className={styles.button} id={styles.cursos}></button>
                    <h2>Concuros Nacional Unificado</h2>
                    </NavLink>
                </div>
                <div>
                    <button type="button" className={styles.button} id={styles.cursos}></button>
                    <h2>Policia Civil - Agente de Custódia</h2>
                </div>

                <div>
                    <button type="button" className={styles.button} id={styles.cursos}></button>
                    <h2>Concurso Unificado TSE</h2>
                </div>

                <div>
                    <button type="button" className={styles.button} id={styles.cursos}></button>
                    <h2>Polícia Federal</h2>
                </div>

                 </div>
            <div className={styles.window} id={styles.direita}><NavLink to={`/criarlei/`}><h2 id={styles.mostruario}>Criar Nova Lei</h2></NavLink></div>
         </div>
          
      </div>
  )
}

export default Cursos