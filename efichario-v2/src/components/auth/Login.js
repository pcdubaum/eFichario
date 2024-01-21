import {  } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react'
import { Navigate, Router, useNavigate } from 'react-router-dom';

import {
  useStatStyles,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Heading,
  InputGroup,
  InputRightElement,
  Button,
  Checkbox,
  Alert,
  AlertIcon,
  Flex,
  AlertTitle,
  AlertDescription
} from '@chakra-ui/react'

import { UsuarioContext } from '../../context/UsuarioContext';

const Login = () => {

  const {nome, token} = useContext(UsuarioContext);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(true);
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordConfirmError, setPasswordConfirmError] = useState(true);
  const [noventadias, setNoventadias] = useState(false);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(-1);
  const [carregamento, setCarregamento] = useState(false);

  const navigate = useNavigate();

  console.log(nome);
  console.log(token);

  const handleSubmit = (e) =>{

  }

  const emailValidate = () =>{

  }

  const passwordValidate = () =>{

  }

  const passwordConfirmValidate = (e) => {

  }

  useEffect(() => {

    const checar = () => {

      if (token.length !== undefined) {
        navigate('/usuario/inicio');
        setCarregamento(true);
      }
    }
    // Verifique se 'carregamento' é falso antes de chamar 'fetc'
    if (!carregamento) {
      checar();
    }
  }, []); // Este efeito não depende de nenhuma variável e será executado apenas uma vez

  return (
    <Flex h='100vh' alignItems='center' justifyContent='center'>

      <Flex w='392px' h='605px' direction='column' boxShadow='dark-lg' p='6' rounded='md'  >

        {/* Inicio do formulário */}
        <form onSubmit={handleSubmit} p='auto' m='auto' mt='0px' >

          {/* Titulo */}
          <Heading as='h1' size='lg' noOfLines={1} mb='5px' textAlign='center'>
            Cadastre-se
          </Heading>

          <FormControl isInvalid={emailError === false} isRequired mb='5px'>
            <FormLabel>Email</FormLabel>
            <Input type='email' value={email} onChange={e => emailValidate(e)} />

            {emailError === false && (
              <FormErrorMessage>Email não válido.</FormErrorMessage>
            )}

            {emailError === true && (
              <FormHelperText color='green.300' noOfLines={1}>Email válido</FormHelperText>
            )}

          </FormControl>

          <FormControl isInvalid={passwordError === false} isRequired mb='5px'>
            <FormLabel>Senha</FormLabel>
            <InputGroup size='md'>
              <Input pr='4.5rem' type={show ? 'text' : 'password'} value={password} placeholder='Enter password' minLength="8" maxLength="20" onChange={e => passwordValidate(e)} />

              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='xs' onClick={e => setShow(!show)}>
                  {show ? 'Esconder' : 'Mostrar'}
                </Button>
              </InputRightElement>
            </InputGroup>
            {passwordError === false && (
              <FormErrorMessage>Senha não válida. Mínimos 8 caracteres.</FormErrorMessage>
            )}

            {passwordError === true && (
              <FormHelperText noOfLines={1} color='green.300'>Senha válida</FormHelperText>
            )}
          </FormControl>

          <FormControl isInvalid={passwordConfirmError} isRequired mb='25px'>
            <FormLabel>Confirme a Senha</FormLabel>
            <InputGroup size='md'>
              <Input pr='4.5rem' type={show ? 'text' : 'password'} value={passwordConfirm} placeholder='Enter password' minLength="8" maxLength="20" onChange={e => passwordConfirmValidate(e)} />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='xs' onClick={e => setShow(!show)}>
                  {show ? 'Esconder' : 'Mostrar'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl>
            <Checkbox size='md' colorScheme='gray' noOfLines={1} defaultChecked>
              Continuar conectado por 30 dias?
            </Checkbox>
            <Checkbox size='md' colorScheme='gray' defaultChecked>
              Concordo com tudo
            </Checkbox>
          </FormControl>

          <Button w='100%' mt='4' bgGradient="linear(to-b, #61677A, #4d5260)" color='white' type='submit' >
            Cadastrar
          </Button>

          <Button w='100%' mt='4' colorScheme='orange' onClick={() => navigate('/login')}>
            Já tenho uma conta
          </Button>

          {error === 0 &&
            <Alert status='success'>
              <AlertIcon />
              Usuário registrado com sucesso.
            </Alert>
          }
          {error === 1 &&
            <Alert status='error' mt='4' w='100%' >
              <AlertIcon />
              Email já registrado.
            </Alert>
          }
        </form>
      </Flex>
    </Flex>
  )
}


export default Login