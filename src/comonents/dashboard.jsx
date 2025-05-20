import React, { useState } from 'react'
import { Flex, Box, Text, HStack, Button, Container, Heading, VStack } from '@chakra-ui/react'
import { transform } from 'framer-motion'
import { Image } from "@chakra-ui/react";
import NewCar from './NewCar';
import NewConsultation from './NewConsultatio';
import Sel from './Sel';
import Features from './Featurs';

const Dashboard = () => {

  const [newCarV, setNewCarV] = useState(false)
  const [newConsultationV, setNewConsultationV] = useState(false)
  const [newSelV, setNewSelV] = useState(false)


  const ButtonsStyle = {
    ':hover': {
      bg: 'yellow.300',
      transform: 'scale(1.1)',
    },

  }

  const ImageStyle = {
    width: '550px',
    height: '400px',

  }
  return (
    <Container w={'100%'} maxWidth={'100vw'}  flexDirection={'row'} justifyContent={'center'} alignItems={'start'} gap={'400px'}>
      <Flex w={'100%'} gap={'180px'} px={'200px'}   mt={'20px'} justify={'space-between'} alignItems={'start'} width={'90%'} mx={'auto'}>
        <Flex pt={'60px'} flexDirection="column" justifyContent="start" alignItems="center" w={'100%'} gap={'40px'}>
          <Heading>Find your Best Car</Heading>
          <Flex   flexDirection={'column'} gap={'10px'} alignItems={'centstarter'} >
            <Text fontSize="2xl" fontWeight="bold" >
              Premium Electric Vehicles Redefined
            </Text>
            <Text fontSize="lg" fontWeight="semibold" >
              Innovating sustainable mobility solutions
            </Text>
            <Text fontSize="md" color="gray.600" >
              Since 2025, driving the future of transportation
            </Text>
          </Flex>


          <Flex justify={'center'} alignItems={'start'} gap={'15px'}>
            <Button onClick={() => { setNewCarV(true) }} sx={ButtonsStyle} bg={'yellow.500'}>New car</Button>
            <Button onClick={() => { setNewConsultationV(true) }} sx={ButtonsStyle} bg={'yellow.500'}>new consultation</Button>
            <Button onClick={() => { setNewSelV(true) }} sx={ButtonsStyle} bg={'yellow.500'}>new sels</Button>

          </Flex>
        </Flex>
        <Image sx={ImageStyle} src={'/car.png'} alt="Placeholder image" />
      </Flex>
      <NewCar newCarV={newCarV} setNewCarV={setNewCarV} />
      <NewConsultation newConsultationV={newConsultationV} setNewConsultationV={setNewConsultationV} />
      <Sel newSelV={newSelV} setNewSelV={setNewSelV} />
   <Features />
    </Container>

  )
}

export default Dashboard