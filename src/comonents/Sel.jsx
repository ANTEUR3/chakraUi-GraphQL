
import {ButtonGroup, Flex,Text,Select} from '@chakra-ui/react'

import { Input , Button,Heading} from "@chakra-ui/react";


const Sel=({newSelV,setNewSelV})=>{

    const ButtonStyle={
            bg:'yellow.500',
            color:'gray.800',
            ':hover':{
                  bg:'yellow.400',
                   transform: 'scale(1.06)',
              },
        }
        return <Flex bg={'white'} position={'absolute'} left={'50%'} top={'50%'} translateX={'-50%'} translatey={'-50%'}  flexDirection={'column'} w={'30%'}  gap={'50px'} p={'30px'} rounded={'lg'} border="1px solid gray" transitionProperty={'transform'} transitionDuration={'500ms'}  transform={`translateX(-50%) translateY(${newSelV ? '-50%' : '-1000px'})`}  >
            <Heading fontSize={'18px'} mx={'auto'}>Add  Sel Process</Heading>
            <Text cursor={'pointer'}  _hover={{color:'red.800'}}  position={'absolute'} fontSize={'20px'} top={'20px'} left={'20px'} onClick={()=>{setNewSelV(false)}}>X</Text>
            <Flex flexDirection={'column'} gap={'20px'} >
                 <Flex alignItems={'center'} gap={'15px'} justify={'space-between'} w={'100%'}>
                                 <Text>Car matricule</Text>
                                 <Select name='carNumber' id='carNumber' w={'50%'} placeholder="">
                                     <option value="category1">1102566</option>
                                     <option value="category2">9531205 </option>
                                     <option value="category3">228013 </option>
                                 </Select>
                 </Flex>
                 <Flex alignItems={'center'} gap={'15px'} justify={'space-between'} w={'100%'}>
                    <Text>Price</Text>
                    <Input w={'50%'} placeholder="Enter the price here" />
                 </Flex>
                  <Flex alignItems={'center'} gap={'15px'} justify={'space-between'} w={'100%'}>
                    <Text>Date</Text>
                    <Input type='date' w={'50%'} placeholder="Enter text here" />
                 </Flex>
            </Flex>
            <Button sx={ButtonStyle}>Submit</Button>
        </Flex>



}

export default Sel;