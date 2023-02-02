import { Box, Heading, Text } from '@chakra-ui/react';
import base from '@emotion/styled/types/base';
import React from 'react';

export default function Header() {
  return <Box  textAlign={{base: "left", md:"left", lg:"center"}} pl={"30px"} bg={"#6B46C1"}
  color={"white"} pt={"90px"}
  height={"397px"}>
    <Heading fontSize={{base:"30px",md:"36px",lg:"48px"}} mt={"-30px"}>Simple pricing for your business</Heading>
    <Text fontSize={{base:"18px",md:"20px",lg:"24px"}} pt={"20px"}>Plans that are carefully crafted to suit your business.</Text>
    </Box>;
  
}
