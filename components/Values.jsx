import React from 'react';

import { Box, Grid, GridItem, Flex, Text, Badge, Button, Show, Hide, SimpleGrid} from '@chakra-ui/react';
import {Image} from '@chakra-ui/react'
import { MdOutlineVerifiedUser } from 'react-icons/md';
import { VscVerified } from "react-icons/vsc";
import { BsClock } from "react-icons/bs";
import { BsCreditCard } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';



const Values = ( isVerified ,price ) => (


  <Grid templateColumns='repeat(3, 1fr)' 
gridTemplateColumns={{sm:"repeat(1, 1fr)", md:"repeat(3, 1fr)",lg:"repeat(3, 1fr)" }}
//   columns={{sm: 2, md: 3}}

  h="100vh"


  >
 <GridItem w='100%' h="100%" bg='"#383A33"' display="flex" flexDirection="column" justifyContent="center" alignItems="center" mt="5">

<Flex flexDirection="column" justifyContent="center" alignItems="center"  w="100%" gap={5}>
  <Box as='button' borderRadius='md' bg="#645832" color='white' h="220" w={[300, 400, 500]}  display="flex" justifyContent="center" alignItems="center" flexDirection="column">
    <VscVerified 

   size={45}
    />
  <Text fontSize={22}>Trusted Agency</Text>
  <Text>All listings are verified to make easy for you</Text>
</Box>
<Box as='button' borderRadius='md' bg="#645832" color='white' h="220" w={[300, 400, 500]} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
<BsClock
   size={45}
    />
  <Text fontSize={22}>24 hr support</Text>
  <Text>Our customer support is ready to serve you anytime</Text>
</Box>
  </Flex>
</GridItem>
<Hide below='md'>
<GridItem  w='100%' h="100%" bg='"#383A33"' display="flex" flexDirection="column" justifyContent="center" alignItems="center">
  <Box maxW='lg' borderRadius='lg' overflow='hidden'>
    <Image

    src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
    alt="Segun Adebayo"
    />
    <Flex flexDirection="column" gap={4}>
    <Flex alignItems='center' mt={5}>
            <Box paddingRight='3' color='#645832'>{isVerified && <GoVerified />}</Box>
            <Text fontWeight='bold' fontSize='lg'>R {millify(8000000)}</Text>
          </Flex>
          <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='#645832'>
          6
          <FaBed /> | 4 <FaBath /> | {millify(16000)} sqft <BsGridFill />
        </Flex>
        <Text fontSize='lg'>
          {"THIS OFFER FOR IMMEDIATE BOOKING!!! AMAZING FULLY FURNISHED 1BHK in DUBAILAND".substring(0, 40) + '...'}
        </Text>
    </Flex>
 </Box>
  </GridItem>
</Hide>

  <GridItem w='100%' h="100%" bg='"#383A33"' display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap={5} mt="5">


  <Flex flexDirection="column" justifyContent="center" alignItems="center" w="100%" gap={5}>
    <Box as='button' borderRadius='md' bg="#645832" color='white' h="220"w={[300, 400, 500]} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
    <GoLocation
   size={45}
    />
  <Text fontSize={22}>Borderless</Text>
  <Text>We list properties from anywhere in the country</Text>
</Box>
<Box as='button' borderRadius='md' bg="#645832" color='white' h="220" w={[300, 400, 500]} display="flex" justifyContent="center" alignItems="center" flexDirection="column">

    <BsCreditCard
   size={45}
    />
  <Text fontSize={22}>Easy Payment</Text>
  <Text> We offer a seamless and trusted payment method</Text>
</Box>
    </Flex>
  </GridItem>
  
</Grid>
);

export default Values;