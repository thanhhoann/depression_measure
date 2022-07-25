import React from "react";
import {
  Grid,
  SimpleGrid,
  Box,
  GridItem,
  Heading,
  Highlight,
  Center,
  Wrap,
  WrapItem,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
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
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon, AtSignIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import Image from "next/image";
import { useDisclosure } from "@chakra-ui/react";

const menuTitles = [
  { name: "About us", link: "#", isMenu: false },
  { name: "Recommendations", link: "#", isMenu: true },
  { name: "References", link: "#", isMenu: false },
  { name: "Symptoms", link: "#", isMenu: true },
];

export default function Header() {
  const BREAKPOINT_MENU = 990;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Grid
        gridTemplateRows={"1fr"}
        gridTemplateColumns={"1fr 2fr"}
        color="blackAlpha.700"
        fontWeight="bold"
        align="center"
        h="100%"
        px="2rem"
      >
        <GridItem>
          <Center h="100%" color="white">
            <Image
              width={50}
              height={50}
              layout="fixed"
              src="https://img.icons8.com/color/344/depression.png"
            />
          </Center>
        </GridItem>
        <GridItem>
          <Show breakpoint={`(max-width: ${BREAKPOINT_MENU}px)`}>
            <Flex h="100%" align="center" justify="flex-end">
              <Button
                colorScheme="blackAlpha"
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
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader></DrawerHeader>
                <DrawerBody>
                  <VStack>
                    {menuTitles.map(({ name, link, isMenu }, index) => (
                      <Box key={index} py="1rem">
                        {isMenu ? (
                          <Menu>
                            <MenuButton
                              variant="ghost"
                              as={Button}
                              leftIcon={<ChevronDownIcon />}
                              borderColor="none"
                            >
                              {name}
                            </MenuButton>
                            <MenuList>
                              <MenuItem>Download</MenuItem>
                              <MenuItem>Create a Copy</MenuItem>
                              <MenuItem>Mark as Draft</MenuItem>
                              <MenuItem>Delete</MenuItem>
                              <MenuItem>Attend a Workshop</MenuItem>
                            </MenuList>
                          </Menu>
                        ) : (
                          <Button variant="ghost">
                            <NextLink href={link}>
                              <Link>{name}</Link>
                            </NextLink>
                          </Button>
                        )}
                      </Box>
                    ))}
                  </VStack>
                </DrawerBody>
                <DrawerFooter></DrawerFooter>
              </DrawerContent>
            </Drawer>
          </Show>
          <Show breakpoint={`(min-width: ${BREAKPOINT_MENU}px)`}>
            <Wrap justify="space-around">
              {menuTitles.map(({ name, link, isMenu }, index) => (
                <WrapItem key={index} py="1rem">
                  {isMenu ? (
                    <Menu>
                      <MenuButton
                        variant="ghost"
                        as={Button}
                        leftIcon={<ChevronDownIcon />}
                      >
                        {name}
                      </MenuButton>
                      <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                      </MenuList>
                    </Menu>
                  ) : (
                    <Button variant="ghost">
                      <NextLink href={link}>
                        <Link>{name}</Link>
                      </NextLink>
                    </Button>
                  )}
                </WrapItem>
              ))}
            </Wrap>
          </Show>
        </GridItem>
      </Grid>
    </>
  );
}
