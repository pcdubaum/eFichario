import React, { Children } from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Flex, useColorMode } from '@chakra-ui/react';
import styles from "./Home.module.css"
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Stack
} from '@chakra-ui/react'

import Signup from '../components/auth/Signup'
import Capa from './Capa';

const Home = () => {

  return (

    <Flex height='100vh' display='flex' flex-direction='row' alignItems='center' justifyContent='center' m='auto'>

      <Flex w='392px' h='605px' padding='10px' text-align='left' boxShadow='dark-lg' p='6' rounded='md'>

        <Capa />

      </Flex>

        <Signup />

    </Flex>
  )
}

export default Home