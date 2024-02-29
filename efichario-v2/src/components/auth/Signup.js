import React from 'react';
import { useState } from 'react';

import axios from 'axios';
import {
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
  Flex
} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react';
import { forwardRef } from 'react';

const Signup = forwardRef((props, _ref) => {

  // Dados de Sign Up
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  // Campos de verificação
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirmError, setPasswordConfirmError] = useState(false);
  const [error, setError] = useState(false);

  // Variaveis de apresentação
  const [showPassword, setShowPassword] = useState(false);

  // Hooks
  const toast = useToast()

  const bcrypt = require('bcryptjs');
  // Handle Erros
  const handleError = () => {

    if (error === 11000)
      return 'Email já cadastrado!'

    if (error === 404)
      return 'Não encontrado.'
  }

  const handleSubmit2 = async () => {

    let response;
    const url = 'http://127.0.0.1:3001/api/v2/usuarios/signup';

    const encPass = await bcrypt.hash(password, 10);

    const userData = {
      email,
      password: encPass,
      passwordConfirm
    }

    const examplePromise = new Promise((resolve, reject) => {
      resolve(axios.post(url, userData)) 
    })

    examplePromise.then((result) => {
      console.log('Acerto na promessa ' + result)
    })
   .catch((err) => 
   {
      console.log('Erro na promessa ' + err)
   })

    // Will display the loading toast until the promise is either resolved
    // or rejected.
    toast.promise(examplePromise, {
      success: { title: 'Conta criada!', description: 'Já pode usar o eFichario' },
      error: { title: 'Ops... algo deu errado!', description: 'handleError()' },
      loading: { title: 'Criando conta', description: 'Por favor espere.' },
    })
  };

  // Criar Novo Usuário
  /*const HandleNovoUsuiario = () => {

    if (password !== passwordConfirm) {
      toast({
        title: 'Erro foi encontrado',
        description: "As senhas não são iguais.",
        status: 'error',
        duration: 4000,
        isClosable: true,
      })

      return;
    }

    const minhaPromise = 
      axios.post('http://127.0.0.1:3001/api/v2/usuario/signup', {
      //(axios.post('http://127.0.0.1:3001/api/v2/usuario/signup', {
        email,
        password,
        passwordConfirm
      });

    // Will display the loading toast until the promise is either resolved
    // or rejected.
    toast.promise(minhaPromise, {
      success: { title: 'Conta criada!', description: 'Já pode usar o eFichario' },
      error: { title: 'Ops... algo deu errado!', description: handleError(minhaPromise) },
      loading: { title: 'Criando conta', description: 'Por favor espere.' },
    })
  };*/

  /// Validar Senha
  const passwordValidate = (e) => {

    const tamanho = e.target.value.length;
    setPassword(e.target.value);

    if (tamanho > 7)
      setPasswordError(true);
    else
      setPasswordError(false);
  }

  /// Checar se as senhas são iguais
  const passwordConfirmValidate = (e) => {

    setPasswordConfirm(e.target.value);

    if (password === passwordConfirm)
      setPasswordConfirmError(true);
    else
      setPasswordConfirmError(false);

  }

  /// Validar Email
  const emailValidate = (e) => {

    var validate = require("react-email-validator");
    var res = require("react-email-validator");

    res = validate.validate(e.target.value);

    console.log(res);
    setEmail(e.target.value);
    setEmailError(res);
  }

  /// Submit do formulário
  const handleSubmit = async (e) => {

    e.preventDefault();

  }

  return (
    <Flex h='100vh' alignItems='center' justifyContent='center' bgColor='gray200'>

      <Flex w='392px' h='605px' direction='column' boxShadow='dark-lg' p='6' rounded='md' bgColor='white'>

        {/* Inicio do formulário */}
        <form onSubmit={handleSubmit} p='auto' m='auto' mt='0px' >


          {/* Titulo */}
          <Heading as='h1' size='lg' noOfLines={1} mb='5px' textAlign='center'>
            Cadastre-se
          </Heading>

    

          <FormControl isInvalid={emailError === false} isRequired mb='5px'>
            <FormLabel color='gray.900'>Email</FormLabel>
            <Input type='email' value={email} borderColor='gray.300' color='gray.900' onChange={e => emailValidate(e)} />

            {emailError === false && (
              <FormErrorMessage>Email não válido.</FormErrorMessage>
            )}

            {emailError === true && (
              <FormHelperText color='green.300' noOfLines={1}>Email válido</FormHelperText>
            )}

          </FormControl>

          <FormControl isInvalid={passwordError === false} isRequired mb='5px'>
            <FormLabel color='gray.900'>Senha</FormLabel>
            <InputGroup size='md'>
              <Input pr='4.5rem' type={showPassword ? 'text' : 'password'} value={password} placeholder='Enter password' minLength="8" maxLength="20" borderColor='gray.300' onChange={e => passwordValidate(e)} />

              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='xs' onClick={e => setShowPassword(!showPassword) }>
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

          <FormControl isInvalid={passwordConfirmError === false} isRequired mb='25px'>
            <FormLabel color='gray.900'>Confirme a Senha</FormLabel>
            <InputGroup size='md'>
              <Input pr='4.5rem' type={showPassword ? 'text' : 'password'} value={passwordConfirm} placeholder='Enter password' minLength="8" maxLength="20" borderColor='gray.300' onChange={e => passwordConfirmValidate(e)} />
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

          <Button w='100%' mt='4' bgColor='blue.800' color='white' type='submit' onClick={() => handleSubmit2()}>
            Cadastrar
          </Button>

          <p w='100%' alignItems='center'>ou</p>

          <Button variant='orange' w='100%' mt='4'>
            Já tenho uma conta
          </Button>
        </form>
      </Flex>
    </Flex>

  )
});

export default Signup