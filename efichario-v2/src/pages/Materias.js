import { Flex } from '@chakra-ui/react'
import React from 'react'
import LerMateria from '../components/LerMateria'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Materias = () => {
    return (
        <Flex width='100%' height='100%' direction='column' bg='brand.100'>
            <Navbar />

            <Flex>
                <Flex height='100%' width='250px'>
                    <Sidebar />
                </Flex>
                <Flex width='100%'>
                    <LerMateria />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Materias