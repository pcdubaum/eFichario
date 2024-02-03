import React from 'react'
import {
    Flex,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Text,
    Divider,
    Center,
    Heading
} from '@chakra-ui/react'
import Navbar from '../components/Navbar'

const CnuCargosBloco2 = () => {
    return (
        <Flex w='100vw' h='100vh' direction='column'>
            <Navbar />
            
            <Heading as='h2' size='xl' textAlign='center'>(B2-08) - Ministério da Gestão e da Inovação em Serviços Públicos – MGI</Heading>
            <TableContainer>
                <Table variant='striped' colorScheme='blue'>

                    <Thead>
                        <Tr>
                            <Th maxWidth='64px'>Cód</Th>
                            <Th>Cargo</Th>
                            <Th isNumeric>Salario</Th>
                            <Th maxWidth='145px'>Especialidade</Th>
                            <Th maxWidth='145px'>Eixo Temático 1</Th>
                            <Th maxWidth='145px'>Eixo Temático 2</Th>
                            <Th maxWidth='145px'>Eixo Temático 3</Th>
                            <Th maxWidth='145px'>Eixo Temático 4</Th>
                            <Th maxWidth='145px'>Eixo Temático 5</Th>
                            <Th>Vagas</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>B2-08-A</Td>
                            <Td>Analista em Tecnologia da Informação (ATI)</Td>
                            <Td isNumeric> 11.150,80</Td>
                            <Td>Tecnologia da Informação </Td>
                            <Td >1</Td>
                            <Td >1</Td>
                            <Td >3</Td>
                            <Td >3</Td>
                            <Td >2</Td>
                            <Td>225</Td>
                        </Tr>
                        <Tr>
                            <Td>B2-08-B</Td>
                            <Td>Analista Técnico de Políticas Sociais - ATPS</Td>
                            <Td isNumeric> 8.336,82</Td>
                            <Td>Tecnologia da Informação </Td>
                            <Td >2</Td>
                            <Td >3</Td>
                            <Td >1</Td>
                            <Td >1</Td>
                            <Td >3</Td>
                            <Td>15</Td>
                        </Tr>

                        <Tr>
                            <Td>B2-08-C</Td>
                            <Td>Especialista em Políticas Públicas e Gestão Governamental (EPPGG)</Td>
                            <Td isNumeric>20.924,80</Td>
                            <Td >Graduação em qualquer área de conhecimento</Td>
                            <Td >4</Td>
                            <Td >3</Td>
                            <Td >1</Td>
                            <Td >1</Td>
                            <Td >1</Td>
                            <Td>11</Td>
                        </Tr>

                        <Tr>
                            <Td>B2-08-D </Td>
                            <Td>Estatístico</Td>
                            <Td isNumeric> 6.804,55</Td>
                            <Td >Estatística</Td>
                            <Td >2</Td>
                            <Td >1</Td>
                            <Td >1</Td>
                            <Td >1</Td>
                            <Td >5</Td>
                            <Td>9</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
            <Center height='50px'>
                <Divider orientation='horizontal' />
            </Center>
            <Heading as='h2' size='xl' textAlign='center'>(B2-10) - SUPERINTENDÊNCIA NACIONAL DE PREVIDÊNCIA COMPLEMENTAR - PREVIC</Heading>
            <TableContainer>
                <Table variant='striped' colorScheme='blue'>

                    <Thead>
                        <Tr>
                            <Th maxWidth='64px'>Cód</Th>
                            <Th>Cargo</Th>
                            <Th isNumeric>Salario</Th>
                            <Th maxWidth='145px'>Especialidade</Th>
                            <Th maxWidth='145px'>Eixo Temático 1</Th>
                            <Th maxWidth='145px'>Eixo Temático 2</Th>
                            <Th maxWidth='145px'>Eixo Temático 3</Th>
                            <Th maxWidth='145px'>Eixo Temático 4</Th>
                            <Th maxWidth='145px'>Eixo Temático 5</Th>
                            <Th>Vagas</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>B2-01-A</Td>
                            <Td>Analista administrativo</Td>
                            <Td isNumeric>12.953,29</Td>
                            <Td>Analista Administrativo</Td>
                            <Td >1</Td>
                            <Td >1</Td>
                            <Td >3</Td>
                            <Td >3</Td>
                            <Td >2</Td>
                            <Td>4</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>

        </Flex>
    )
}

export default CnuCargosBloco2