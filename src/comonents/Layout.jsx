import React from 'react'
import {Heading,Text,Flex, HStack,Button} from '@chakra-ui/react'
import { Container,Box } from '@chakra-ui/react'
import { color } from 'framer-motion'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  const FeaturesStyle={
    ':hover':{
         color:'yellow.500',
         cursor:'pointer'
    }
  }
  return (
    <div>
        <Flex justify={'space-between'} px={'50px'} py={'10px'} alignItems={'center'}>
            <Text fontSize={'25px'}>Omran-Cars</Text>
            <HStack spacing={'20px'} >
                <Text sx={FeaturesStyle} fontSize={'20px'}>Home</Text>
                <Text sx={FeaturesStyle} fontSize={'20px'}>About</Text>
                <Text sx={FeaturesStyle} fontSize={'20px'}>Contact</Text>
                
            </HStack>
            
        </Flex>
        <Outlet/>
        

    </div>
  )
}

export default Layout