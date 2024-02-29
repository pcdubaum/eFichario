import React, { useState } from 'react'
import { Flex, Heading, Text, keyframes } from '@chakra-ui/react'

const Capsula = (texto) => {

const [conteudo, setConteuso] = useState(texto);

  return (
    <Flex w='100%' direction='column'>
      <Flex direction='column' p='5' rounded='md' border='1px' borderRadius='10px 10px 0px 0px' borderColor='brand.200' bgGradient="linear(to-b, blue.700, blue.900)">
        {console.log(conteudo.texto)}
        {((texto.atencao === undefined) && (texto.cuidado === undefined)) &&

          //<Titulo texto={texto.titulo} />}
          //{texto.atencao === "sim" && <Titulo atencao="sim" texto={texto.titulo} atencaomsg={texto.atencaomsg} />}
          //{texto.cuidado === "sim" && <Titulo cuidado="sim" texto={texto.titulo} cuidadomsg={texto.cuidadomsg} />}

          <Heading as='h4' size='md'>{conteudo.texto.titulo}</Heading>}

      </Flex>
      <Flex direction='column' p='6' rounded='md' border='1px' borderRadius='0px 0px 10px 10px' borderColor='brand.200'>
        { 
        
        conteudo.texto.conteudo.map((e, key) => 
          <p key={key}>{e}</p>
        )  
        }

        { console.log(conteudo)/*{texto.texto !== undefined && <h2>{texto.texto}</h2>}
        {texto.exemplo !== undefined && <Exemplo texto={texto.exemplo} />}
        {texto.atencaomsg !== undefined && <h2 id={styles.atencao}>{texto.atencaomsg}</h2>}
        {texto.cuidadomsg !== undefined&& <Cuidado texto = {texto.cuidadomsg} />}*/}

      </Flex>
    </Flex>
  )
}

export default Capsula