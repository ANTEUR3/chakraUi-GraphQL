import React from 'react'
import {Heading,Text,Flex, HStack,Button} from '@chakra-ui/react'
import { Container,Box } from '@chakra-ui/react'
const Layout = () => {
  return (
    <div>
        <Flex justify={'space-between'} px={'30px'} py={'10px'} alignItems={'center'}>
            <Text fontSize={'25px'}>Logo</Text>
            <HStack spacing={'20px'}>
                <Text fontSize={'20px'}>Home</Text>
                <Text fontSize={'20px'}>About</Text>
                <Text fontSize={'20px'}>Contact</Text>
                
            </HStack>
            <Button color={'purple.400'}>Login</Button>
        </Flex>
        <Container>
            <Box p={'30px'} bg={'yellow.500'} w={'500px'}   rounded={'xl'}>
               <Text fontSize={'20px'}> Hi I'm Younes and i try to learn Chakra Ui</Text>
            </Box>

        </Container>

    </div>
  )
}

export default Layout