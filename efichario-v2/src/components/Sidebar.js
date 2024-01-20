import { Box, Flex, Heading, Stack, Button, useColorMode, ColorModeProvider } from '@chakra-ui/react'
import React from 'react'
import { UsuarioContext } from '../context/UsuarioContext';
import { useContext } from 'react';

const Sidebar = () => {

    const { toggleColorMode} = useColorMode();
    const { nome } = useContext(UsuarioContext);

  return (
    <Flex flexDirection='column' height='100vh' width='100%' overflowY="auto" overscrollBehaviorY='contain' padding='25px' textAlign='center' borderRight= 'dashed white' borderRadius='5px'>
      
      <Button  onClick={toggleColorMode} variant='secondaryGhost' height='110px'>Mudar Tema</Button>

        <Stack> 
        
        <Heading>oooiiii</Heading>
        <Heading>oooiiii</Heading>
        <Heading>oooiiii</Heading>
        <Heading>oooiiii</Heading>
        <Heading>oooiiii</Heading>
        <Heading>oooiiii</Heading>
        <Heading>oooiiii</Heading>
        <Heading>oooiiii</Heading>
        <Heading>oooiiii</Heading>
        <Heading>oooiiii</Heading>
        <Heading>oooiiii</Heading>
        <Heading>oooiiii</Heading>
        <Heading>oooiiii</Heading>
        <Heading>oooiiii</Heading>
        <Heading>oooiiii</Heading>
        <Heading>oooiiii</Heading>
        <Heading>oooiiii</Heading>
        <Heading>oooiiii</Heading>
        <Heading>oooiiii</Heading>
        <Heading>oooiiii</Heading>
        <Heading>oooiiii</Heading>
        <Heading>oooiiii</Heading>
        <Heading>oooiiii</Heading>
        <Heading>oooiiii</Heading>
        <Heading>oooiiii</Heading>
        <Heading>oooiiii</Heading>
        <Heading>oooiiii</Heading>
        <Heading>oooiiii</Heading>
        <Heading>oooiiii</Heading>
        <Heading>oooiiii</Heading>
         <Heading>oooiiii</Heading>
        <Heading>oooiiii</Heading>
        <Heading>oooiiii</Heading>
        <Heading>oooiiii</Heading>
        <Heading>oooiiii</Heading>
        <Heading>oooiiii</Heading>
        </Stack>
    </Flex>
  )
}

export default Sidebar