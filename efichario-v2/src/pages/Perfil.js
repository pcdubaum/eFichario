import { Flex, FormControl, Stack, Heading, Input, Select, Divider } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Perfil = () => {
  return (
    <Flex width='100%' height='100vh' direction='column' padding='0px' margin='auto' overflowY='hidden'>
    <Navbar />

    <Flex>
      <Flex height='100%' width='250px'>
        <Sidebar />
      </Flex>

      <Flex  alignItems='top' justifyContent='space-between' direction='row' margin='auto' marginTop='25px'>

        <Flex minWidth='390px' width='1080px'  borderRadius='5px' border='1px solid' borderColor='gray.600' padding='25px' >
          <FormControl>
            <Stack>
            <Heading as='h1' size='lg' noOfLines={1}>Nome</Heading> 
            <Input />
            </Stack>
            <Divider margin='25px'/>
            <Stack>
            <Heading as='h1' size='lg' noOfLines={1}>Email</Heading> 
            <Input />
            </Stack>

            <Select placeholder='Select option'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
          </FormControl>
        </Flex>

      </Flex>

    </Flex>
   
    </Flex>
  )
}

export default Perfil