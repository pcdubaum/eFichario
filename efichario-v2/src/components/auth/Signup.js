import React, { useContext } from 'react';
import { useState } from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs';
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
  Alert,
  AlertIcon,
  Flex,
  AlertTitle,
  AlertDescription
} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { Router, useNavigate } from 'react-router-dom';
import { useTimer } from 'react-timer-hook';
import { UsuarioContext } from '../../context/UsuarioContext';

const Signup = forwardRef((props, _ref) => {

  const {nome, setNome, token, setToken} = useContext(UsuarioContext);
  

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(true);
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordConfirmError, setPasswordConfirmError] = useState(true);
  const [noventadias, setNoventadias] = useState(false);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(-1);
  const toast = useToast()
  const navigate = useNavigate();

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

    const hashedPassword = bcrypt.hashSync(password) // hash created previously created upon sign up

    setError(-1);

    let resposta;

    try {
      resposta = await axios.post('http://127.0.0.1:3001/api/v2/usuarios/signup', {
        email,
        password,
        passwordConfirm

      });

      toast({
        title: 'Conta Criada.',
        description: "Você já pode se conectar ao eFichario.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })

      localStorage.setItem('nome', resposta.data.data.user.nome);
  
      setToken(resposta.data.token);

      const start = Date.now();

      setTimeout(() => {
        const millis = Date.now() - start;
      
        navigate('/login');;
        // Expected output: "seconds elapsed = 2"
      }, 2000);


      //restart(time)
      //navigate('/login');
    }
    catch (err) {

      setError(1);

      console.log(err.response);
      if (err.response.data.message)
        if (err.response.data.message.lenght > 5)
          if (err.response.data.message.substring(0, 6) === 'E11000')
            setError(1);

      console.log(err.response);
    }
  }

  return (
    <Flex h='100vh' alignItems='center' justifyContent='center'>

      <Flex w='392px' h='605px' direction='column' boxShadow='dark-lg' p='6' rounded='md' >

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

          <p>ou</p>

          <Button w='100%' mt='4' colorScheme='orange' onClick={() => navigate('/login')}>
            Já tenho uma conta
          </Button>
        </form>
      </Flex>
    </Flex>

  )
});

export default Signup