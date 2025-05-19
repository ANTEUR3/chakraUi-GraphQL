import React, { useState } from 'react'
import {Flex,Box,Text, HStack,Button,Container} from '@chakra-ui/react'
import { transform } from 'framer-motion'
import { Image } from "@chakra-ui/react";
import NewCar from './NewCar';
import NewConsultation from './NewConsultatio';
import Sel from './Sel';

const Dashboard = () => {

  const [newCarV,setNewCarV]=useState(false)
    const [newConsultationV,setNewConsultationV]=useState(false)
        const [newSelV,setNewSelV]=useState(false)


  const ButtonsStyle={
    ':hover':{
      bg:'yellow.300',
       transform: 'scale(1.1)',
  },
      
    }

    const ImageStyle={
       width:'550px',
       height:'400px',
      
    }
  return (
    <Container w={'100%'} maxWidth={'100vw'}>
 <Flex px={'80px'} py={'00px'} bg={'gray.50'} mt={'60px'} justify={'space-between'} alignItems={'start'}  width={'90%'} mx={'auto'}>
         <Flex pt={'60px'} flexDirection="column" justifyContent="flex-start" alignItems="flex-start" w={'50%'} gap={'10px'}>
              <Text fontSize={'25px'}>  Effortlessly manage your vehicle fleet with this intuitive dashboard. Track maintenance, monitor mileage,</Text>
              <Text fontSize={'25px'}> schedule services, and oversee vehicle status all in one centralized, user-friendly interface</Text>
                <Text fontSize={'25px'}> Boost efficiency and simplify car management today.
</Text>

              <Flex justify={'start'} alignItems={'start'} mt={'30px'} gap={'15px'}>
                <Button onClick={()=>{setNewCarV(true)}} sx={ButtonsStyle} bg={'yellow.500'}>New car</Button>
                <Button  onClick={()=>{setNewConsultationV(true)}} sx={ButtonsStyle} bg={'yellow.500'}>new consultation</Button>
                <Button onClick={()=>{setNewSelV(true)}}  sx={ButtonsStyle} bg={'yellow.500'}>new sels</Button>

              </Flex>
          </Flex>
          <Image sx={ImageStyle} src="https://www.pngarts.com/files/11/Black-Audi-SUV-PNG-High-Quality-Image.png" alt="Placeholder image" />
</Flex>
<NewCar newCarV={newCarV} setNewCarV={setNewCarV} />
<NewConsultation newConsultationV={newConsultationV} setNewConsultationV={setNewConsultationV} />
<Sel newSelV={newSelV} setNewSelV={setNewSelV} />

    </Container>
   
  )
}

export default Dashboard