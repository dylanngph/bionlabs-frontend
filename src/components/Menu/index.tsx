"use client";

import { ReactNode, useRef } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Icon,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HambergerMenu } from "iconsax-react";
import Logo from "./Logo";
import { MENU_HEIGHT, menu_items, social_items } from "@/configs/menu";
import styled from "@emotion/styled";
import { useScrolling } from "react-use";
import { useOnScroll } from "@/hooks/useOnScroll";

const Menubar = ({ children }: { children: ReactNode | ReactNode[] }) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { isScrolling } = useOnScroll();

  return (
    <>
      <Wrapper as="section" bg={isScrolling ? 'neutral.500' : 'transparent'}>
        <HStack h="inherit">
          <Container maxW="container.xl">
            <HStack spacing="10" justify="space-between">
              <Logo />
              {isDesktop ? (
                <Flex justify="end" gap="24px">
                  <ButtonGroup variant="text" colorScheme="gray" spacing="40px">
                    {menu_items.map((item) => (
                      <Button
                        key={item.key}
                        variant="unstyled"
                        fontWeight={400}
                      >
                        {item.label}
                      </Button>
                    ))}
                  </ButtonGroup>
                  <HStack spacing={0}>
                    {social_items.map((item) => (
                      <IconButton
                        key={item.key}
                        icon={<Icon as={item.icon} />}
                        aria-label={item.label}
                        bg="transparent"
                      />
                    ))}
                  </HStack>
                </Flex>
              ) : (
                <IconButton
                  icon={<HambergerMenu size="32" />}
                  aria-label="Open Menu"
                  variant="tertiary"
                />
              )}
            </HStack>
          </Container>
        </HStack>
      </Wrapper>
      <Inner>{children}</Inner>
    </>
  );
};

const Wrapper = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  transition: background-color 0.1s ease-in-out;
`;

const Inner = styled(Box)`
  padding-top: ${MENU_HEIGHT}px;
`;

export default Menubar;
