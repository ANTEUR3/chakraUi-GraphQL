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
        <Flex justify={'space-between'} px={'350px'} py={'10px'} pt={'10px'} alignItems={'center'}>
            <Heading fontSize={'25px'}>Omran-Cars</Heading>
            <HStack spacing={'20px'} >
                <Text sx={FeaturesStyle} fontSize={'20px'}>Home</Text>
                <Text sx={FeaturesStyle} fontSize={'20px'}>About</Text>
                <Text sx={FeaturesStyle} fontSize={'20px'}>Contact</Text>
                   <Text sx={FeaturesStyle} fontSize={'20px'}>Features</Text>
                
            </HStack>
            <Button color={'white'} bg={'yellow.500'} borderRadius={'lg'} px={'15px'}>Brows</Button>
            
        </Flex>
        <Outlet/>
        

    </div>
  )
}

export default Layout