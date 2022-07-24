import Link from 'next/link';
// import Image from 'next/image';
import { Flex, Box, Text, Button, Image, Spacer} from '@chakra-ui/react';
import Property from "../components/Property"; 
import {baseUrl, fetchApi} from '../utils/fetchApi'
import Header from "../components/Header"
import Values from '../components/Values';


export const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (
   <Flex flexWrap='wrap' justifyContent='space-around' alignItems='center'  mt='40' pl="4" w="100%" flexDirection="row" h="100vh" backgroundColor="#645832" >
    {/* <Image src={imageUrl} width={500} height={300} /> */}
    <Image
 borderRadius="5"
  objectFit='cover'

w={["100%", "50%", "48%"]}
  src={imageUrl}
  alt="Segun Adebayo"
/>
<Spacer />
    <Box w={["100%", "50%", "50%"]}
     marginLeft={[0, 4, 6, 8]} display="flex" justifyContent="center" alignItems="start" flexDirection="column" paddingLeft={8} >
      <Text color='gray.400' fontSize='sm' fontWeight='medium'>{purpose}</Text>
      <Text fontSize={{ base: '35px', md: '0px', lg: '56px' }} fontWeight='bold' color="#F2EFE5">{title1}<br />{title2}</Text>
      <Text fontSize='lg' paddingTop='3' paddingBottom='3' color='gray.100'>{desc1}<br />{desc2}</Text>
      <Button fontSize='xl'>
        <Link href={linkName}><a>{buttonText}</a></Link>
      </Button>
    </Box>
  </Flex>

);

const Home = ({ propertiesForSale, propertiesForRent }) => (
  <Box >
    <Header />
    <Values />
    <Banner
      purpose='RENT A HOME'
      title1='Rental Homes for'
      title2='Everyone'
      desc1=' Explore from Apartments, builder floors, villas'
      desc2='and more'
      buttonText='Explore Renting'
      linkName='/search?purpose=for-rent'
      imageUrl='https://images.unsplash.com/photo-1608235343318-342ad5227ce9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80'
    />
  <Text fontSize={{ base: '30px', md: '40px', lg: '56px' }}   m='20' color="#383A33">Property to rent</Text>
  <Spacer />
    <Flex flexWrap='wrap' justifyContent="center" alignItems="center">
      {propertiesForRent.map((property) => <Property key={property.id} property={property} />)}
    </Flex>
    <Banner
      purpose='BUY A HOME'
      title1=' Find, Buy & Own Your'
      title2='Dream Home'
      desc1=' Explore from Apartments, land, builder floors,'
      desc2=' villas and more'
      buttonText='Explore Buying'
      linkName='/search?purpose=for-sale'
      imageUrl='https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
    />
     <Text fontSize={{ base: '30px', md: '40px', lg: '56px' }}   m='20' color="#383A33">Property to buy</Text>
  <Spacer />
    <Flex flexWrap='wrap' justifyContent="center" alignItems="center">

      {propertiesForSale.map((property) => <Property key={property.id} property={property}/>)}
    </Flex>
  </Box>
);

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

export default Home;