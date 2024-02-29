import React, { useState } from 'react'
import { Flex, Heading, Text, Code } from '@chakra-ui/react'
const Exemplo = (texto) => {

    const [conteudo, setConteuso] = useState(texto);

    const bgColor = conteudo.texto.cor;

  return (
    <Flex direction='column' p='5' rounded='md' border='1px' borderColor='brand.200' bgColor={bgColor}>
        <Heading as='h4' size='md'>{conteudo.texto.titulo}</Heading>
        {conteudo.texto.conteudo.map((e, key) => (
            <Code key={key}>{e}</Code>
        ))}
    </Flex>
  )
}

export default Exemplo