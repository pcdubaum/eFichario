import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Flex, Button, Heading } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink} from '@chakra-ui/react'
import Capsula from './Capsula';
import Exemplo from './Exemplo';

const LerMateriaId = () => {

  const { id } = useParams();
  const [capitulos, setCapitulos] = useState();
  const [carregamento, setCarregamento] = useState(false);
  const [materias, setMaterias] = useState([]);
  const [materiasFiltradas, setMateriasFiltradas] = useState([]);
  const [resumo, setResumo] = useState(false);

  console.log(id);
  // Define um efeito que será executado apenas uma vez na montagem do componente
  useEffect(() => {
    // Define uma função assíncrona 'fetchLei' para buscar dados da API
    const fetchMateria = async () => {
      try {
        // Faz uma solicitação GET para a URL da API
        const response = await axios.get('http://127.0.0.1:3001/api/v2/materias/' + id);
        setMaterias(response.data.materia);
        console.log(response.data.materia);

        // Verifica se a resposta da API tem um status de 200 (OK)
        if (response.status === 200) {
          // Se for bem-sucedida, extrai os dados da resposta
          //const lei = response.data;

          // Define 'carregamento' como verdadeiro após o carregamento bem-sucedido
          setCarregamento(true);
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
      fetchMateria();
    }
  }, []); // Este efeito não depende de nenhuma variável e será executado apenas uma vez

  return (
    <Flex alignItems='center' direction='column' justifyContent='top' height='100%' width='100%' margin='25px'>

      <Heading as='h2' size='xl'>{materias.nome}</Heading>

      {carregamento === true && materias.materia.map((e, key) => (
        <Flex key={key} direction='column' width='100%' marginBottom='25px'>

        {e.tipo === "cap1" &&  <Capsula texto={e} />}
        {e.tipo === "exc" &&  <Exemplo texto={e} />}

        </Flex>
      ))}

    </Flex>
  )
}

export default LerMateriaId