import Link from 'next/link';
// import Image from 'next/image';
import { Flex, Box, Text, Button, Image, Avatar } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import DefaultImage from "../assets/images/home.jpg";
const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID  } }) => (
    <Link href={`/property/${externalID}`} passHref >
    <Flex flexWrap='wrap' w='420px'  paddingTop='0px'  justifyContent='flex-center' alignItems="center" cursor='pointer'   borderTopLeftRadius='10'
         borderTopRightRadius='10'marginTop="10" marginLeft="10" >
      <Box p="3">
        <Image 
        src={coverPhoto ? coverPhoto.url : DefaultImage} 
        width={390} 
        height={280} 
        objectFit="cover"
         
         />
      </Box>
      
      <Box w='full'>
        <Flex paddingTop='2' alignItems='center' justifyContent='space-between' >
          <Flex alignItems='center' >
            <Box paddingRight='3' color='#645832'>{isVerified && <GoVerified />}</Box>
            <Text fontWeight='bold' fontSize='lg'>R {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
          </Flex>
          <Box>
            <Avatar size='sm' src={agency?.logo?.url}></Avatar>
          </Box>
        </Flex>
        <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='#645832'>
          {rooms}
          <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        </Flex>
        <Text fontSize='lg'>
          {title.length > 30 ? title.substring(0, 30) + '...' : title}
        </Text>
      </Box>
    </Flex>
  </Link>
        );

export default Property