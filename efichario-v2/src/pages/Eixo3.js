import React, { useEffect, useState } from 'react'
import { Flex, Heading, Text } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Capsula from '../components/Capsula'

const Eixo3 = () => {

    const [conteudo, setConteudo] = useState([]);
    const [carregamento, setCarregamento] = useState(false);

    useEffect(() => {
        // Define uma função assíncrona 'fetchLei' para buscar dados da API
        const adicionarConteudo = async () => {

            setConteudo([...conteudo, { titulo: "Titulo teste", mensagem: "Conteudo teste" }]);
        }
        // Verifique se 'carregamento' é falso antes de chamar 'fetchLei'
        if (!carregamento) {
            adicionarConteudo();
        }
    }, [carregamento]); // Este efeito não depende de nenhuma variável e será executado apenas uma vez

  

    return (
        <Flex width='100%' height='100vh' direction='column' padding='0px' margin='auto' overflowY='hidden'>
            <Navbar />

            <Flex>
                <Flex height='100%' width='250px'>
                    <Sidebar />
                </Flex>

                <Flex alignItems='top' justifyContent='space-between' direction='row' margin='auto' marginTop='25px'>

                {conteudo.map((e, key) => (
                    <Capsula titulo={e.titulo} texto={e.mensagem}  />
                        ))}

                </Flex>

                { /* ss */}

            </Flex>

        </Flex>
    )
}

export default Eixo3