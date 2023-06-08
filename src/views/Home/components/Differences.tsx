"use client";

import React from "react";
import {
  Box,
  Container,
  Grid,
  HStack,
  Icon,
  Text,
  VStack,
  GridItem,
} from "@chakra-ui/react";
import {
  EthereumClassic,
  Box as IconSaxBox,
  MobileProgramming,
  Magicpen,
} from "iconsax-react";

const servives = [
  {
    title: "Blockchain Development",
    description:
      "We provide blockchain solutions for your business needs. We have a team of experts that will help you to build your blockchain solutions.",
    icon: EthereumClassic,
  },
  {
    title: "Web Development",
    description:
      "Advanced and optimized Custom Website Development, highlighting UI/UX Designs, Back-end API Integrations tailored to specific requirements to achieve your goals and needs, expand customer base and improve internal management.",
    icon: IconSaxBox,
  },
  {
    title: "Mobile Development",
    description:
      "We provide mobile development for your business needs. We have a team of experts that will help you to build your mobile applications.",
    icon: MobileProgramming,
  },
  {
    title: "UI/UX Design",
    description:
      "We provide UI/UX design for your business needs. We have a team of experts that will help you to build your UI/UX design.",
    icon: Magicpen,
  },
];

interface IconboxProps {
  icon: any;
  title: string;
  description: string;
}

const Iconbox = ({ icon, title, description }: IconboxProps) => {
  return (
    <HStack align="start" spacing="15px">
      <Box display='flex' alignItems='center' justifyContent='center' borderRadius="50%" bg="primary.500" w="50px" h="50px" p='10px'>
        <Icon as={icon} color="neutral.0" w="30px" h="30px" />
      </Box>
      <VStack align="start" spacing="10px">
        <Text fontSize={{ base: "18px", lg: "20x" }} fontWeight={700} lineHeight={1}>
          {title}
        </Text>
        <Text color="neutral.200">{description}</Text>
      </VStack>
    </HStack>
  );
};

const Differences = () => {
  return (
    <Box bg="neutral.400" w="100%" p="6rem 0">
      <Container maxW="container.xl">
        <Grid
            gridTemplateColumns={{ lg: "repeat(1, 1fr)", xl: "repeat(3, 1fr)" }}
            alignItems='start'
            gap={{base: '60px' , lg: '40px'}}
        >
          <GridItem colSpan={1}>
            <VStack align="start" spacing='20px'>
              <Text fontSize={{ base: "56px", lg: "48px" }} fontWeight={700} lineHeight={1.2}>
                What make us different?
              </Text>
              <Text fontSize={{ base: "16px", lg: "18px" }} color="neutral.200">
                With the ultimate goal to enable your business success through
                digital transformation. We identifies, invests, and empowers
                viable blockchain entrepreneurs, startups, and communities,
                providing financing to industry projects that help grow the
                wider blockchain ecosystem.
              </Text>
            </VStack>
          </GridItem>
          <GridItem colSpan={2}>
            <Grid gridTemplateColumns={{base: 'auto' , lg: "repeat(2, 1fr)"}} rowGap='40px' columnGap='20px'>
              {servives.map((service, index) => (
                <GridItem key={index}>
                  <Iconbox
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                  />
                </GridItem>
              ))}
            </Grid>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Differences;
