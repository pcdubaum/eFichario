import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { Button, Flex, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { UsuarioContext } from '../context/UsuarioContext';


const Inicio = () => {

        const { toggleColorMode} = useColorMode();
        const backgroundColor = useColorModeValue('brand.100', 'brand.900');

        const { nome } = useContext(UsuarioContext);

  return (

        <Flex w='100vw' h='100hv' direction='column' bg='brand.100'>
        <Navbar />

        <h1>{nome}</h1>


        <Button onClick={toggleColorMode}>Mudar</Button>
        </Flex>


  )
}

export default Inicio