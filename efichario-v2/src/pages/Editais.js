import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import {
  Button, Flex, Table,
  Thead,
  Tbody,
  Tfoot,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading
} from '@chakra-ui/react'
import { CheckCircleIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'

const Editais = () => {
  return (
    <Flex width='100%' height='100%' direction='column' padding='0px' margin='auto' overflowY='hidden'>
      <Navbar />

      <Flex w='90%' m='auto' align='center' justify='center' marginTop='25' direction='column'>

        <Heading>Eixo Temátco 4 – Desenvolvimento de Software - Tabela de Comparação</Heading>

        <Tabs minWw='790px' w='90%' alignItems='center' justifyContent='center' m='auto' mt='25px' variant='enclosed'>
          <TabList>
            <Tab>1 Programação e estruturas de dados.</Tab>
            <Tab>2 Programação Web.</Tab>
            <Tab>3 Desenvolvimento para plataformas móveis.</Tab>
            <Tab>4 Engenharia de software.</Tab>
            <Tab>5 Banco de dados.</Tab>
            <Tab>6 Arquitetura e tecnologias de sistemas de informação.</Tab>
          </TabList>

          <TabPanels >
            <TabPanel>


              <TableContainer>
                <Table variant='striped'>
                  <Thead>
                    <Tr>
                      <Th>Materia</Th>
                      <Th>CNU</Th>
                      <Th>BACEN</Th>
                      <Th>CAIXA</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td width='90%'>1.1 Linguagens de programação Python e Java.</Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                    </Tr>
                    <Tr>
                      <Td>1.2 Orientação a objetos.</Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><WarningIcon boxSize={8} color='red.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                    </Tr>
                    <Tr>
                      <Td>1.3 Algoritmos de busca e ordenação.</Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><WarningIcon boxSize={8} color='red.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                    </Tr>
                    <Tr>
                      <Td>1.4 Estruturas lineares: lista encadeada, pilha, fila.</Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><WarningIcon boxSize={8} color='red.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                    </Tr>
                    <Tr>
                      <Td> 1.5 Árvores.</Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><WarningIcon boxSize={8} color='red.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>

            <TabPanel>

              <TableContainer>
                <Table variant='striped'>
                  <Thead>
                    <Tr>
                      <Th>Materia</Th>
                      <Th>CNU</Th>
                      <Th>BACEN</Th>
                      <Th>CAIXA</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td width='90%'>2.1 Conceitos fundamentais de programação para a Web.</Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><WarningIcon boxSize={8} color='yellow.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                    </Tr>
                    <Tr>
                      <Td> 2.2 Navegadores..</Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><WarningIcon boxSize={8} color='red.500' /></Td>
                      <Td><WarningIcon boxSize={8} color='red.500' /></Td>
                    </Tr>
                    <Tr>
                      <Td>2.3 Frameworks de desenvolvimento para a Web.</Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><WarningIcon boxSize={8} color='yellow.500' /></Td>
                      <Td><WarningIcon boxSize={8} color='yellow.500' /></Td>
                    </Tr>
                    <Tr>
                      <Td> 2.4 Servidores Web.</Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><WarningIcon boxSize={8} color='yellow.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>

            </TabPanel>

            <TabPanel>

              <TableContainer>
                <Table variant='striped'>
                  <Thead>
                    <Tr>
                      <Th>Materia</Th>
                      <Th>CNU</Th>
                      <Th>BACEN</Th>
                      <Th>CAIXA</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td width='90%'>3.1 Plataformas de programação.</Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><WarningIcon boxSize={8} color='red.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                    </Tr>
                    <Tr>
                      <Td> 3.2. Emuladores e padrões de programação para smartphones e tablets. </Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><WarningIcon boxSize={8} color='red.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                    </Tr>
                    <Tr>
                      <Td>3.3. Principais componentes de interface com o usuário. </Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><WarningIcon boxSize={8} color='red.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                    </Tr>
                    <Tr>
                      <Td>3.4 Tecnologias de persistência de dados em dispositivos móveis.</Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><WarningIcon boxSize={8} color='red.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>

            </TabPanel>

            <TabPanel>
              <TableContainer>
                <Table variant='striped'>
                  <Thead>
                    <Tr>
                      <Th>Materia</Th>
                      <Th>CNU</Th>
                      <Th>BACEN</Th>
                      <Th>CAIXA</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td width='90%'>4.1 Processos ágeis.</Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><WarningIcon boxSize={8} color='red.500' /></Td>
                      <Td><WarningIcon boxSize={8} color='red.500' /></Td>
                    </Tr>
                    <Tr>
                      <Td>4.2 Engenharia de requisitos.</Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><WarningIcon boxSize={8} color='red.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='yellow.500' /></Td>
                    </Tr>
                    <Tr>
                      <Td>4.3 Ideação e especificação ágil.</Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><WarningIcon boxSize={8} color='red.500' /></Td>
                      <Td><WarningIcon boxSize={8} color='yellow.500' /></Td>
                    </Tr>
                    <Tr>
                      <Td>4.4 Arquitetura MVC e princípios de projeto.</Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><WarningIcon boxSize={8} color='red.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                    </Tr>
                    <Tr>
                      <Td>4.5 Testes unitários.</Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                    </Tr>
                    <Tr>
                      <Td>4.6 Revisões de software modernas.</Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><WarningIcon boxSize={8} color='yellow.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                    </Tr>

                    <Tr>
                      <Td>*4.7 DevOps e DevSecOps </Td>
                      <Td><CheckCircleIcon boxSize={8} color='yellow.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                    </Tr>

                    <Tr>
                      <Td>4.8 Testes de aceitação.</Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>

            </TabPanel>

            <TabPanel>

              <TableContainer>
                <Table variant='striped'>
                  <Thead>
                    <Tr>
                      <Th>Materia</Th>
                      <Th>CNU</Th>
                      <Th>BACEN</Th>
                      <Th>CAIXA</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td width='90%'>5.1 Projeto de banco de dados: projeto conceitual, lógico e físico.</Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                    </Tr>
                    <Tr>
                      <Td>5.2 A abordagem Entidade-Relacionamento (E-R).</Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                    </Tr>
                    <Tr>
                      <Td>5.3 Modelo relacional: conceitos, restrições de integridade, mapeamento de modelos E-R para esquemas relacionais</Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                    </Tr>
                    <Tr>
                      <Td>5.4 Dependências funcionais e normalização.</Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><WarningIcon boxSize={8} color='yellow.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                    </Tr>
                    <Tr>
                      <Td>5.5 Linguagem SQL: DDL, DML,</Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                    </Tr>
                    <Tr>
                      <Td>5.6 SGBD</Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                    </Tr>

                    <Tr>
                      <Td>5.7 Bancos de dados NoSQL</Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                    </Tr>

                    <Tr>
                      <Td>5.7 Bancos de dados NoSQL</Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>

            </TabPanel>

            <TabPanel>

              <TableContainer>
                <Table variant='striped'>
                  <Thead>
                    <Tr>
                      <Th>Materia</Th>
                      <Th>CNU</Th>
                      <Th>BACEN</Th>
                      <Th>CAIXA</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td width='90%'> 6.1 Conceitos básicos.</Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><WarningIcon boxSize={8} color='red.500' /></Td>
                      <Td><WarningIcon boxSize={8} color='red.500' /></Td>
                    </Tr>
                    <Tr>
                      <Td>6.2 Workflow e gerenciamento eletrônico de documentos. </Td>
                      <Td><CheckCircleIcon boxSize={8} color='green.500' /></Td>
                      <Td><WarningIcon boxSize={8} color='red.500' /></Td>
                      <Td><CheckCircleIcon boxSize={8} color='yellow.500' /></Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>

            </TabPanel>

          </TabPanels>
        </Tabs>

        <ChakraLink marginRight='25' as={ReactRouterLink} to='/editais/cnu/bloco2'><Button variant='secondaryGhost'>CONCURSO NACIONAL UNIFICADO - BLOCO 2</Button></ChakraLink>
        <ChakraLink as={ReactRouterLink} to='/editais/cnu/bloco2'><Button variant='secondaryGhost'>CONCURSO BANCO CENTRAL</Button></ChakraLink>

      </Flex>

    </Flex>
  )
}

export default Editais