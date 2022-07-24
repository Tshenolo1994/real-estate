import React from 'react';
import { Box } from '@chakra-ui/layout';


const Footer = () => (

  <Box textAlign='center' p='5' color='gray.600' borderTop='1px' borderColor='gray.100'>
    © {(new Date().getFullYear())} Prime Living .
    
  </Box>
);

export default Footer;