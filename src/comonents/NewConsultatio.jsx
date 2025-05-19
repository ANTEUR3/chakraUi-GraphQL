import {ButtonGroup, Flex,Text} from '@chakra-ui/react'

import { Input , Button,Heading,Select} from "@chakra-ui/react";
import { useState,useEffect } from 'react';



const NewConsultation=({newConsultationV,setNewConsultationV})=>{

   const [faultsData,setFaultsDta]=useState([])

     const [formData, setFormData] = useState({
               carNumber: null,
               fault:'',
               date:new Date(),
             })
   
        const handleChange=(e)=>{
   
           const {name,value}=e.target;
            setFormData((prev)=>({...prev,[name]:value}))
        }     
       
             useEffect(()=>{
                    console.log(formData);
             },[formData])


   


  const [fault,setFault]=useState('')
   const addFault=()=>{
          setFaultsDta(prev=>[...prev,formData.fault])
          formData.fault=''


             const faults = document.getElementById('flauts') 
              const faultDiv=document.createElement('div')
        
        faultDiv.style.display='flex'
faultDiv.style.justifyContent = 'end'; 
faultDiv.style.alignItems = 'center'
        faultDiv.style.gap='30px'
        faultDiv.style.width='100%'


      const fault=document.createElement('h2')
      fault.id=`fault${faultsData.length}`
      fault.innerHTML = `h${formData.fault}`;

console.log(fault)
    


       







        
        
        




const cancel = document.createElement('button');

// Set text (try both methods)
cancel.textContent = 'Cancel';
// cancel.innerText = 'Cancel'; // Alternative method

// Add some styling to make it more visible for testing
cancel.style.padding = '3px';
cancel.style.backgroundColor = 'red';
cancel.style.color = 'white';
cancel.style.borderRadius = '10px';

// Apply base styles

  



       

        

        faultDiv.appendChild(fault)
                faultDiv.appendChild(cancel)


        faults.appendChild(faultDiv)
        
        

        cancel.addEventListener('click',()=>{
            faults.removeChild(faultDiv)
            setFaultsDta(prev=>prev.filter(f=>f!==fault.value))


        })

      }
       
      

   

     const ButtonStyle={
        bg:'yellow.500',
        color:'gray.800',
        ':hover':{
              bg:'yellow.400',
               transform: 'scale(1.06)',
          },
    }

    const ButtonStyle2={
        bg:'yellow.500',
        color:'gray.800',
        ':hover':{
              bg:'yellow.400',
               transform: 'scale(1.06)',
          },
    }
 return <Flex as={'form'} bg={'white'} position={'absolute'} left={'50%'} top={'50%'} translateX={'-50%'} translatey={'-50%'}  flexDirection={'column'} w={'40%'}  gap={'50px'} p={'30px'} rounded={'lg'} border="1px solid gray" transitionProperty={'transform'} transitionDuration={'500ms'}  transform={`translateX(-50%) translateY(${newConsultationV ? '-50%' : '-1000px'})`}  >
        <Heading fontSize={'18px'} mx={'auto'}>Add  New consultation</Heading>
<Text cursor={'pointer'}  _hover={{color:'red.800'}}  position={'absolute'} fontSize={'20px'} top={'20px'} left={'20px'} onClick={()=>{setNewConsultationV(false)}}>X</Text>
        <Flex flexDirection={'column'} gap={'20px'} >
             <Flex alignItems={'center'} gap={'15px'} justify={'space-between'} w={'100%'}>
                <Text>Car matricule</Text>
                <Select name='carNumber' id='carNumber' w={'50%'} placeholder="Select car">
                    <option value="category1">1102566</option>
                    <option value="category2">9531205 </option>
                    <option value="category3">228013 </option>
                </Select>
            </Flex>
             <Flex  alignItems={'center'} gap={'15px'} justify={'space-between'} w={'100%'}>
                <Text>Faults</Text>
                <Flex alignItems={'center'} gap={'15px'} justify={'space-between'}  w={'50%'}>
                  <Input value={formData.fault} name='fault' id='fault' onChange={handleChange}  placeholder="Enter text here" />
                          <Button  display={fault !== '' ? 'block' : 'none'}  sx={{display: formData.fault !== '' ? 'flex' : 'none', justifyContent: 'center', alignItems: 'center'   }}  bg={'red.500'} color={'white'}><Text>Cancel</Text></Button>
                          <Button sx={{display: formData.fault !== '' ? 'flex' : 'none', justifyContent: 'center', alignItems: 'center'   }}    display={fault !== '' ? 'block' : 'none'}  bg={'green.500'} color={'white'} onClick={addFault}>Add</Button>
                </Flex>
             </Flex>
             <Flex id='flauts' flexDirection={'column'} gap={'20px'}>

             </Flex>
              <Flex alignItems={'center'} gap={'15px'} justify={'space-between'} w={'100%'}>
                <Text>Date</Text>
                <Input type='date' w={'50%'} placeholder="Enter text here" />
             </Flex>
        </Flex>
        <Button sx={ButtonStyle}>Submit</Button>

    </Flex>
}

export default NewConsultation;