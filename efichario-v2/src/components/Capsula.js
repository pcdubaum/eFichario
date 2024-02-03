import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'

const Capsula = (texto) => {
  return (
    <Flex w='100%' h='100%' direction='column'>
       <Flex minW='392px' w='1200px' h='60px' direction='column' p='6' rounded='md' border='1px' borderRadius= '10px 10px 0px 0px' borderColor='gray.200' alignItems='center' justifyContent='center'>
      
      {((texto.atencao === undefined) && (texto.cuidado === undefined)) && 
      
      //<Titulo texto={texto.titulo} />}
      //{texto.atencao === "sim" && <Titulo atencao="sim" texto={texto.titulo} atencaomsg={texto.atencaomsg} />}
      //{texto.cuidado === "sim" && <Titulo cuidado="sim" texto={texto.titulo} cuidadomsg={texto.cuidadomsg} />}

      <Heading>{texto.titulo}</Heading>}  

        </Flex>
        <Flex>
  
       <Heading>{texto.texto}</Heading>

        {/*{texto.texto !== undefined && <h2>{texto.texto}</h2>}
        {texto.exemplo !== undefined && <Exemplo texto={texto.exemplo} />}
        {texto.atencaomsg !== undefined && <h2 id={styles.atencao}>{texto.atencaomsg}</h2>}
        {texto.cuidadomsg !== undefined&& <Cuidado texto = {texto.cuidadomsg} />}*/}

</Flex>
      </Flex>
  )
}

export default Capsula