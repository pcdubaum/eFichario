import { Flex, FormControl, Stack, Heading, Input, Select, Divider, Button, Toast } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useToast } from '@chakra-ui/react';

const Perfil = () => {

  const [carregamento, setCarregamento] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  let response;

    // Hooks
    const toast = useToast();

  const deleteUser = async (e) => {

      const examplePromise = new Promise((resolve, reject) => {
        resolve(axios.delete('http://192.168.132.128:3001/api/v2/usuarios/' + e)) 
      })

        examplePromise.then((result) => {
          console.log('Acerto na promessa ' + result);
        })
       .catch((err) => 
       {
          console.log('Erro na promessa ' + err);
       })
    
        // Will display the loading toast until the promise is either resolved
        // or rejected.
        toast.promise(examplePromise, {
          success: { title: 'Remover Conta!', description: 'Conta removida.' },
          error: { title: 'Remover Conta!', description: 'Erro.' },
          loading: { title: 'Remover Conta!', description: 'Por favor espere.' },
        })

      

    //const response = await axios.delete('http://192.168.132.128:3001/api/v2/usuarios/' + e);  

    

  };

  // Define um efeito que será executado apenas uma vez na montagem do componente
  useEffect(() => {

    const fetchUsers = async () => {
      try {

        // Faz uma solicitação GET para a URL da API
        response = await axios.get('http://192.168.132.128:3001/api/v2/usuarios');
        console.log(response); // Exibe a resposta no console para depuração

        // Verifica se a resposta da API tem um status de 200 (OK)
        if (response.status === 200) {
          // Se for bem-sucedida, extrai os dados da resposta
          const users = response.data.data;
          //console.log(users);

          // Define os dados obtidos no estado 'lei' para uso posterior
          setUsuarios(response.data.usuarios);
          //setArtigos(lei.lei.dados);

          // Define 'carregamento' como verdadeiro após o carregamento bem-sucedido
          setCarregamento(true);

          console.log(response.data.usuarios);
        } else {
          // Se a resposta tiver um status diferente de 200, exibe um erro no console
          console.error('Erro ao obter a lei. Status:', response.data);
        }
      } catch (error) {
        // Captura erros de solicitação ou outros erros e exibe uma mensagem de erro no console
        console.error('Ocorreu um erro ao fazer a solicitação para a API:', error.message);
      }
    };

    // Verifique se 'carregamento' é falso antes de chamar 'fetchLei'
    if (!carregamento) {
      fetchUsers();

    }
  }, []); // Este efeito não depende de nenhuma variável e será executado apenas uma vez

  return (
    <Flex width='100%' height='100%' direction='column' padding='0px' margin='auto' overflowY='hidden'>
      <Navbar />

      <Flex>
        <Flex height='100%' width='250px'>
          <Sidebar />
        </Flex>

        <Flex alignItems='top' justifyContent='space-between' direction='column' margin='auto' marginTop='25px'>


          {carregamento && usuarios.map((e, key) => (
            <Flex minWidth='390px' width='1080px' borderRadius='5px' border='1px solid' borderColor='gray.600' padding='25px' direction='column' key={key}>
              <FormControl>
                <Stack>
                  <Heading as='h1' size='lg' noOfLines={1}>Nome: {e.nome} ID: {e._id}</Heading>
                </Stack>
                <Divider margin='5px' />
                <Stack>
                  <Heading as='h1' size='lg' noOfLines={1}>Email</Heading>
                  <Input />
                </Stack>
                <Divider margin='5px' />
                <Stack>
                  <Heading as='h1' size='lg' noOfLines={1}>Email</Heading>
                  <Select placeholder='Select option'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                  </Select>
                </Stack>
                <Divider margin='5px' />
                <Button variant='errorGhost' onClick={() => deleteUser(e._id)}>Deletar</Button>
              </FormControl>
            </Flex>
          ))}




        </Flex>

      </Flex>

    </Flex>
  )
}

export default Perfil