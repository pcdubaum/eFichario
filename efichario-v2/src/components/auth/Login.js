import { } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
  Toast,
  AlertDescription
} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react';

const Login = () => {

  // Dados de Sign Up
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  // Campos de verificação
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirmError, setPasswordConfirmError] = useState(false);
  const [error, setError] = useState();

  // Variaveis de apresentação
  const [showPassword, setShowPassword] = useState(false);

  // Hooks
  const toast = useToast()
  const navigate = useNavigate();

  /// Submit do formulário
  const handleSubmit = async (e) => {

    e.preventDefault();

  }

   /// Validar Senha
   const passwordValidate = (e) => {

    const tamanho = e.target.value.length;
    setPassword(e.target.value);

    if (tamanho > 7)
      setPasswordError(true);
    else
      setPasswordError(false);
  }

  const emailValidate = (e) => {
    var validate = require("react-email-validator");
    var res = require("react-email-validator");

    res = validate.validate(e.target.value);

    console.log(res);
    setEmail(e.target.value);
    setEmailError(res);
  }

  

  /// Checar se as senhas são iguais
  const passwordConfirmValidate = (e) => {

    setPasswordConfirm(e.target.value);

    if (password === passwordConfirm)
      setPasswordConfirmError(true);
    else
      setPasswordConfirmError(false);

  }

  // Handle Erros
  const handleError = () => {

    if (error === 11000)
      return 'Email já cadastrado!'

    if (error === 404)
      return 'Não encontrado.'
  }

  // Criar Novo Usuário
  const Logar = () => {

    if (password !== passwordConfirm) {
      toast({
        title: 'Erro encontrado',
        description: "As senhas não são iguais.",
        status: 'error',
        duration: 4000,
        isClosable: true,
      })

      return;
    }

    const minhaPromise = new Promise((resolve, reject) => {
      resolve(axios.post('http://127.0.0.1:3001/api/v2/usuario/login', {
        //resolve(axios.post('http://127.0.0.1:3001/api/v2/usuario/signup', {
        email,
        password

      }));
    });

    minhaPromise
      .then(
        //setTimeout(() => {
          navigate('/usuario/inicio')
        //}, 2000)
      )
      .catch(
        err => setError(err.response.data.error.message)
      )

    // Will display the loading toast until the promise is either resolved
    // or rejected.
    toast.promise(minhaPromise, {
      success: { title: 'Sucesso!', description: 'Já pode usar o eFichario' },
      error: { title: 'Ops... algo deu errado!', description: handleError() },
      loading: { title: 'Verificando...', description: 'Por favor espere.' },
    })
  };


  return (
    <Flex h='100vh' alignItems='center' justifyContent='center'>

      <Flex w='392px' h='605px' direction='column' boxShadow='dark-lg' p='6' rounded='md'  >

        {/* Inicio do formulário */}
        <form onSubmit={handleSubmit} p='auto' m='auto' mt='0px' >

          {/* Titulo */}
          <Heading as='h1' size='lg' noOfLines={1} mb='5px' textAlign='center'>
            Cadastre-se
          </Heading>

          <FormControl isInvalid={emailError === true} isRequired mb='5px'>
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
              <Input pr='4.5rem' type={showPassword ? 'text' : 'password'} value={password} placeholder='Enter password' minLength="8" maxLength="20" onChange={e => passwordValidate(e)}/>

              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='xs' onClick={e => setShowPassword(!showPassword)}>
                  {showPassword ? 'Esconder' : 'Mostrar'}
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
              <Input pr='4.5rem' type={showPassword ? 'text' : 'password'} value={passwordConfirm} placeholder='Enter password' minLength="8" maxLength="20" onChange={e => passwordConfirmValidate(e)} />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='xs' onClick={e => setShowPassword(!showPassword)}>
                  {showPassword ? 'Esconder' : 'Mostrar'}
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

          <Button w='100%' mt='4' bgGradient="linear(to-b, #61677A, #4d5260)" color='white' type='submit' onClick={() => Logar()}>
            Cadastrar
          </Button>

          <Button w='100%' mt='4' colorScheme='orange' onClick={() => navigate('/')}>
            Já tenho uma conta
          </Button>
        </form>
      </Flex>
    </Flex>
  )
}


export default Login