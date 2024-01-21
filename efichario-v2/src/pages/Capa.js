import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Capa = () => {

    return (
        <Flex display='flex' flexDirection='column' m='auto' height='100%'>

            <Heading as='h1' size='lg' noOfLines={1} textAlign='center' mb='16px'>
                Bem-vindo ao eFichario.
            </Heading>

            <Heading as='h4' size='md' noOfLines={1} mb='5px' textAlign='left' color='red.500'>
                Aviso! 
            </Heading>

            <Text fontSize='xl' textAlign='justify'>
                Bem-vindo, novamente, o eFichario está em fase de teste e isso significa que nem tudo pode funcionar como o esperado.
            </Text>

            <Text fontSize='xl' textAlign='justify'>
                Estamos criando um ambiente compartilhado para automatizar todo o processo de estudo, revisão e memorização. 
                Usando IA para facilitar o estudo, focando no que é mais cobrado em provas.
                Sinta-se a vontade para se registrar, dar uma olhada e, quem sabe, contribuir, há muito trabalho a ser feito.
            </Text>

        </Flex>
    )
}

export default Capa