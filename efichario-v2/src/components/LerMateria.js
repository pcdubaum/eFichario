import { Button, Flex, Heading, Divider, Center, InputGroup, InputRightElement, Select } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import arrayShuffle from 'shuffle-array';
import Capsula from './Capsula';
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

const LerMateria = () => {

    const json = null;// = require('../dev_data/iso27000.json');
    const [capitulos, setCapitulos] = useState(json);
    const [carregamento, setCarregamento] = useState(false);
    const [materias, setMaterias] = useState([]);
    const [materiasFiltradas, setMateriasFiltradas] = useState([]);
    const [resumo, setResumo] = useState(false);

    // Define um efeito que será executado apenas uma vez na montagem do componente
    useEffect(() => {
        // Define uma função assíncrona 'fetchLei' para buscar dados da API
        const fetchLei = async () => {
            try {
                // Faz uma solicitação GET para a URL da API
                const response = await axios.get('http://127.0.0.1:3001/api/v2/materias/');
                setMaterias(response.data.materia);
                console.log(response.data.materia);

                // Verifica se a resposta da API tem um status de 200 (OK)
                if (response.status === 200) {
                    // Se for bem-sucedida, extrai os dados da resposta
                    const lei = response.data;

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
            fetchLei();
        }
    }, []); // Este efeito não depende de nenhuma variável e será executado apenas uma vez

    const gerarResumo = () => {

        const materias = arrayShuffle(capitulos.materia);
        setMateriasFiltradas(materias);
        setResumo(true);
        console.log(materias);
    }

    const gerarConteudo = () => {

        setCarregamento(true);
    };

    return (
        <Flex alignItems='center' direction='column' justifyContent='top' height='100%' width='100%' margin='25px'>

            {/*(carregamento === true || resumo === false) && materias.map((e, key) => (
                <Flex key={key} direction='column' width='100%'>
                    <Capsula texto={e} />
                    <Center height='50px'></Center>
                </Flex>
            ))*/}

            {(carregamento === true || resumo === false) && materias.map((e, key) => (
                <Flex key={key} alignItems='start' direction='row' justifyContent='space-around' width='100%' marginBottom='5px'>
                    
                        <Button justifyContent='left' w='60%' variant='secondaryGhost'><ChakraLink as={ReactRouterLink} to={`/materias/${e._id}`}>{e.nome} | {e.materia.length} Partes </ChakraLink></Button>

                            <Select w='20%' placeholder='Mais Opções'>
                                <option value='option1'>Desordenar</option>
                                <option value='option2'>Mostrar 10% da Matéria</option>
                                <option value='option3'>Mostrar 50% da Matéria</option>
                            </Select>


                </Flex>
            ))}

            {(carregamento === true || resumo === true) && materiasFiltradas.map((e, key) => (
                <Flex key={key} direction='column' width='100%'>
                    <Capsula texto={e} />
                    <Center height='50px'></Center>
                </Flex>
            ))}

            <Button onClick={() => gerarConteudo()}>Gerar Conteúdo</Button>
            <Button onClick={() => gerarResumo()}>Gerar Resumo</Button>
        </Flex>
    )
}

export default LerMateria