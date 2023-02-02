import { Box, Flex, HStack, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import star_1 from './icons/star_1';
import star_2 from './icons/star_2';
import star_3 from './icons/star_3';

export default function Features() {
  return <Box maxW={"850px"} mx={"auto"}>

    <Flex p={"50px"} direction={{base: "column", md: "column", lg: "row"}}>
    <HStack pl={{base:"auto", md:"auto", lg:"60px"}} pt="20px">
        <Icon as={star_1}></Icon>
        <Text  fontSize={"18px"}fontWeight={"bold"}>30 days money back Guarantee</Text>
    </HStack>
    <HStack pl={{base:"auto", md:"auto", lg:"60px"}} pt={"20px"}>
        <Icon as={star_2}></Icon>
        <Text fontSize={"18px"} fontWeight={"bold"}>No setup fees 100% hassle-free</Text>
    </HStack>
    <HStack pl={{base:"auto", md:"auto", lg:"60px"}} pt={"20px"}>
        <Icon as={star_3}></Icon>
        <Text fontSize={"18px"} fontWeight={"bold"}>No monthly subscription 
            Pay once and for all</Text>
    </HStack>
    </Flex>
    </Box>;

}
