import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer, Text , Container,  Button} from '@chakra-ui/react';
import {
  Heading,
  Image,
  Stack,
  useBreakpointValue,
} 
from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
import { useRouter } from 'next/router';
// import SearchFilters from './SearchFilters';

import Property from './Property';
export const ButtonGroup = ({ buttonText, linkName }) => (
  <Flex>


     <Button fontSize='xl'>
       <Link href={linkName}><a>{buttonText}</a></Link>
     </Button>
  
 </Flex>

);

 const Header = ({ propertiesForSale, propertiesForRent }) =>(

//  <Container  h='100vh' maxWidth="100vw"  overflowX="hidden" position="relative" padding={8}
// >

//    <Flex h="100%">
//    <Box w="85%"  display="flex" justifyContent="center" alignItems="center" flexDirection="column" padding={9}
//    flexGrow="1">
//    <Text fontSize={{ base: '2xl', md: '7xl', lg: '5xl' }}>Discover most suitable property</Text>

//    <Text fontSize='2xl' paddingTop="5">Find a variety of properties that suit you easily and forget all dificullties in finding a perfect residence for you</Text>
//   <Flex w="100%" justifyContent="space-between" mt={8}>
//   <ButtonGroup
//   variant='outline'
//       buttonText='Explore Buying'
//       linkName='/search?purpose=for-sale'
//     />
//      <ButtonGroup
//       buttonText='Explore Renting'
//       linkName='/search?purpose=for-rent'
//     />
//   </Flex>
//    </Box>
 
//   <Box backgroundImage="url('https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80')"
//   backgroundPosition="center"
//   backgroundSize="cover"
//   backgroundRepeat="no-repeat"
//   w="100%"
//   flexGrow="3"
//   borderRadius="5"

// >
  
//   </Box>
// </Flex>
// </Container> 
<Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
  <Flex  p={12} flex={1} align={'center'} justify={'center'}>
    <Stack spacing={8} w={'full'} maxW={'lg'} >
    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '30%', md: '50%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              Suitable Property 
            </Text>
            <br />{' '}
            <Text color={'#645832'} as={'span'}>
             For Renting and Buying
            </Text>{' '}
          </Heading>
          
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'} marginTop="20">
          Find a variety of properties that suit you easily and forget all dificullties in finding a perfect residence for you
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <ButtonGroup
  variant='outline'
       buttonText='Explore Buying'
      linkName='/search?purpose=for-sale'   />
              Create Project
          
              <ButtonGroup
      buttonText='Explore Renting'
       linkName='/search?purpose=for-rent'
   />


          </Stack>
    </Stack>
  </Flex>
  <Flex flex={1.25}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'
          }
        />
      </Flex>
</Stack>

 )

 export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
 export default Header;