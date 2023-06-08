"use client";

import React from "react";
import {
  Container,
  Text,
  Box,
  VStack,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box p='6rem 0'>
      <Container maxW="container.xl">
        <VStack align="center" spacing="24px" textAlign="center">
          <Text fontWeight={700} fontSize={{base: '48px', md: '56px', lg: '72px'}}>
            Building Web3 Solutions with Excellence and Integrity
          </Text>
          <Text fontSize={{base: '16px', lg:'20px'}} fontWeight={600} maxW="780px" color='neutral.200'>
            We are a team of blockchain developers and designers who are
            passionate about building decentralized applications.
          </Text>
          <ButtonGroup>
            <Button variant="primary" size="lg">
              Contact us
            </Button>
            <Button variant="outline" size="lg">
              Learn more
            </Button>
          </ButtonGroup>
        </VStack>
      </Container>
    </Box>
  );
};

export default Hero;
