import { Box, Button, Flex, Heading, Text, HStack, Icon } from '@chakra-ui/react'
import React from 'react'
import tickmark from './icons/tickmark';

export default function Pricing() {
  return <Box overflow={"hidden"} boxShadow={"dark-lg"} borderRadius={"15px"} 
  bg={"white"} maxW={"994px"} mt={"-100px"} mx={"auto"}
  ml={{base:"20px", md:"20px", lg:"auto"}}
  mr={{base:"20px", md:"20px", lg:"auto"}}>
    
    <Flex direction={{base: "column", md: "column", lg: "row"}}>
    <Box bg={"#c8b8ed"}  p={"60px"} textAlign={"center"}>
        <Text fontWeight={"bold"} fontSize={"24px"}>
        Premium PRO
        </Text>
        <Heading fontSize={"60px"}>
        $329
        </Heading>
        <Text>
        billed just once
        </Text>
        <Button mt={"20px"}w={{base:"200px" ,md:"300px",lg:"300px"}} bg={"#6B46C1"} color={"white"}>Get Started</Button>
    </Box>

    <Box  p={"50px"}>
        <Text>
        Access these features when 
        you get this pricing package for your business.
        </Text>
        <HStack mt={"20px"}>
            <Icon as={tickmark}></Icon>
            <Text>
            International calling and messaging API
            </Text>
        </HStack>
        <HStack mt={"20px"}>
            <Icon as={tickmark}></Icon>
            <Text>
            Additional phone numbers
            </Text>
        </HStack>
        <HStack mt={"20px"}>
            <Icon as={tickmark}></Icon>
            <Text>
            Automated messages via Zapier
            </Text>
        </HStack>
        <HStack mt={"20px"}>
            <Icon as={tickmark}></Icon>
            <Text>
            24/7 support and consulting
            </Text>
        </HStack>
    </Box>
    </Flex>
    </Box>; 
} 
