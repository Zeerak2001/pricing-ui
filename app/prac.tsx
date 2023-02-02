import React from 'react'
import { ChakraProvider, Heading, Text  } from '@chakra-ui/react'


export default function prac() {
  return (
    <ChakraProvider>
    <Heading as="h4">This is Chakra UI h4</Heading>
    <Heading as="h1" color="red">This is Chakra UI h1</Heading>
    <Text fontWeight={"bold"}> This is paragraph by Chakra</Text>
    </ChakraProvider>
  )
}
