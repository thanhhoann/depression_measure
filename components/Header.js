import React from "react";
import {
  Grid,
  GridItem,
  Center,
  Button,
  Show,
  Hide,
  Link,
  Flex,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  VStack,
  ButtonGroup,
  Avatar,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon, AtSignIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import Image from "next/image";
import { useDisclosure } from "@chakra-ui/react";
import HeaderItems from "./HeaderItems";

export default function Header() {
  const BREAKPOINT_MENU = 990;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Grid
        gridTemplateRows={"1fr"}
        gridTemplateColumns={"1fr 2fr"}
        color="black"
        fontWeight="bold"
        alignItems="center"
        px="2rem"
        h="100%"
      >
        <GridItem>
          <Center h="90%" color="white">
            <Image
              width={50}
              height={50}
              layout="fixed"
              src="https://img.icons8.com/dotty/344/depression.png"
              alt="depression"
            />
          </Center>
        </GridItem>
        <GridItem>
          <Show breakpoint={`(max-width: ${BREAKPOINT_MENU}px)`}>
            <Flex h="90%" align="center" justify="flex-end">
              <Button
                colorScheme="black"
                variant="ghost"
                ref={btnRef}
                onClick={onOpen}
              >
                <HamburgerIcon />
              </Button>
            </Flex>

            <Drawer
              isOpen={isOpen}
              placement="top"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent mt="3rem">
                <DrawerCloseButton />
                <DrawerHeader></DrawerHeader>
                <DrawerBody>
                  <VStack>
                    <HeaderItems />
                  </VStack>
                </DrawerBody>
                <DrawerFooter></DrawerFooter>
              </DrawerContent>
            </Drawer>
          </Show>

          <Show breakpoint={`(min-width: ${BREAKPOINT_MENU}px)`}>
            <Flex h="90%" justifyContent="space-around" alignItems="center">
              <HeaderItems />
            </Flex>
          </Show>
        </GridItem>
      </Grid>
    </>
  );
}
