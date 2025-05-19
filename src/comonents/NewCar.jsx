import {ButtonGroup, Flex,Text} from '@chakra-ui/react'

import { Input , Button,Heading,Select} from "@chakra-ui/react";
import { calcLength } from 'framer-motion';
import { useEffect,useState } from 'react';


const NewCar=({newCarV,setNewCarV})=>{

    const [formData, setFormData] = useState({
            carNumber: null,
            carType:null,
            date:new Date(),
          })

     const handleChange=(e)=>{

        const {name,value}=e.target;
         setFormData((prev)=>({...prev,[name]:value}))
     }     
    
          useEffect(()=>{
                 console.log(formData);
          },[formData])

    const ButtonStyle={
        bg:'yellow.500',
        color:'gray.800',
        ':hover':{
              bg:'yellow.400',
               transform: 'scale(1.06)',
          },
    }
    return <Flex bg={'white'} position={'absolute'} left={'50%'} top={'50%'} translateX={'-50%'} translatey={'-50%'}  flexDirection={'column'} w={'20%'}  gap={'50px'} p={'30px'} rounded={'lg'} border="1px solid gray" transitionProperty={'transform'} transitionDuration={'500ms'}  transform={`translateX(-50%) translateY(${newCarV ? '-50%' : '-1000px'})`}  >
        <Heading fontSize={'18px'} mx={'auto'}>Add  New Car</Heading>
<Text cursor={'pointer'}  _hover={{color:'red.800'}}  position={'absolute'} fontSize={'20px'} top={'20px'} left={'20px'} onClick={()=>{setNewCarV(false)}}>X</Text>
        <Flex flexDirection={'column'} gap={'20px'} >
             <Flex id='carNumber' alignItems={'center'} gap={'15px'} justify={'space-between'} w={'100%'}>
                <Text>Matricul</Text>
                <Input name={'carNumber'}  onChange={handleChange} value={formData.carNumber} type='number' w={'50%'} placeholder="Enter text here" />
             </Flex>
             <Flex alignItems={'center'} gap={'15px'} justify={'space-between'} w={'100%'}>
                             <Text>Car matricule</Text>
                             <Select onChange={handleChange} name='carType' id='carType' w={'50%'} placeholder="">
                                 <option value="category1"></option>
                                 <option value="luxury">luxury</option>
                                 <option value="economical">economical </option>
                                 <option value="electric">electric</option>
                             </Select>
                         </Flex>
              <Flex alignItems={'center'} gap={'15px'} justify={'space-between'} w={'100%'}>
                <Text>Date</Text>
                <Input onChange={handleChange} name='date' id='date' type='date' w={'50%'} placeholder="Enter text here" />
             </Flex>
        </Flex>
        <Button sx={ButtonStyle}>Submit</Button>

    </Flex>



}

export default NewCar;