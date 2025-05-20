import {Flex , Heading,Text,Box} from '@chakra-ui/react'
import { SiTheboringcompany } from "react-icons/si";
import { FaCarRear } from "react-icons/fa6";
import { GiFlexibleStar } from "react-icons/gi";
import { BsBank } from "react-icons/bs";

const Features=()=>{
    return <Flex w={'100%'} px={'300'} justifyContent={'space-between'} alignItems={'center'} pt={'50px'} >
        
               <FeatureItem head={'Why Choose Us?'} text={'Certified pre-owned cars with warranties'} text2={'Unbeatable deals & financing options.'}  >
<Box color="yellow.500" fontSize={'60px'}>
  <SiTheboringcompany />
</Box>               </FeatureItem>
               <FeatureItem head={'Top Car Features'} text={'Turbo engines & smooth handling.'} text2={'Blind-spot monitoring & emergency braking.'}  >
                         <Box color="yellow.500" fontSize={'60px'}>
  <FaCarRear />
</Box>
               </FeatureItem>
               <FeatureItem head={'Flexible Financing'} text={'Custom loan plans to fit your budget.'} text2={'Bad credit? No problem!'}  >
<Box color="yellow.500" fontSize={'60px'}>
  <GiFlexibleStar />
</Box>
               </FeatureItem>
                <FeatureItem head={'After-Sale Care'} text={'First 3 services included.'} text2={'We have got you covered.'}  >
<Box color="yellow.500" fontSize={'60px'}>
  <BsBank />
</Box>
               </FeatureItem>
    </Flex>
}

export default Features;


const FeatureItem=({children,head,text,text2})=>{
     return <Flex flexDirection={'column'} alignItems={'center'} justify={'center'} gap={'12PX'}>
        {children}
        <Text fontWeight={'bold'}>{head}</Text>
        <Text fontWeight={'semibold'}>{text}</Text>
                <Text color={'gray.600'} fontWeight={'semibold'}>{text2}</Text>


     </Flex>
}