"use client";

import Header from './Header';
import Pricing from './Pricing';
import { ChakraProvider, Heading, Text  } from '@chakra-ui/react'
import Features from './Features';


export default function Home() {
  return (
   <ChakraProvider>
    <Header></Header>
    <Pricing></Pricing>
    <Features></Features>
   </ChakraProvider>
  ) 
}
