import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import Footer from './Footer';
import Navbar from './Navbar';
import Header  from './Header';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Box  w='100%' m='auto' backgroundColor="#F2EFE5">
       <Box>
       <header>
   
        <Navbar />
        </header>
       </Box>
        <main>{children}
        </main>
        <footer>
      <Footer />
        </footer>
      </Box>
    </>
  );
}