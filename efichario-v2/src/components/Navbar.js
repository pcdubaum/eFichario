import { CloseIcon } from '@chakra-ui/icons'
import { Flex, Heading, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, useColorModeValue, HStack } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { UsuarioContext } from '../context/UsuarioContext'

const Navbar = () => {

    const backgroundColor = useColorModeValue("green.50", "green.900");
    const { nome } = useContext(UsuarioContext);
    
    return (
        <Flex  w='100%' h='110px' direction='column' >
            <Flex w='100%' h='55px' bgGradient="linear(to-b, #718096, #4A5568)" color='white' paddingLeft='25px' paddingRight='25px'>

                <Flex w='100%' direction='row' align='center' justify='space-between' m='auto'>

                    <Heading as='h1' ml='0px' size='md' textAlign='left' color='white'>
                       {localStorage.getItem('nome')}
                    </Heading>
                    <Flex direction='row' textAlign='right' mr='0px'>
                        <HStack>
                        <Button variant='secondaryGhost'>Perfil</Button>
                        <Button variant='errorGhost'>
                        <Heading as='h1' size='md' mr='10px' textAlign='right' color='white'>
                            Sair
                        </Heading>

                        <CloseIcon/>
                        </Button>
                        </HStack>
                    </Flex>

                </Flex>
            </Flex>
            <Flex h='55px' w='100%' background='#2D3748' align='center' justify='left' p='5px' color='white'>

            <HStack spacing='24px'>

<Button variant='secondaryGhost'>Cursos</Button>
<Button variant='secondaryGhost'>Matérias</Button>
<Button variant='secondaryGhost'>Editais</Button>
<Button variant='secondaryGhost'>Comunidade</Button>
</HStack>
            </Flex>
        </Flex>
    )
}

export default Navbar