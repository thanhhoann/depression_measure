import React, { ReactNode, useState } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Drawer,
  Heading,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Button,
  useColorMode,
  Badge,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiMoon,
} from "react-icons/fi";
import { AiOutlineSchedule } from "react-icons/ai";
import { IconType } from "react-icons";
import { ReactText } from "react";
import MainLayout from "./MainLayout";
import Link from "next/link";
import Home from "../pages";
import Dashboard from "./Dashboard";
import Router from "next/router";
import ColorModeSwicher from "./ColorModeSwitcher";
import { useSelector, useDispatch } from "react-redux";
import { selectAuthState } from "../store/authSlice";
import { setAuthState } from "../store/authSlice";
import { current } from "@reduxjs/toolkit";

const LinkItems = [
  { name: "Home", icon: FiHome, link: "/" },
  { name: "Schedule", icon: AiOutlineSchedule, link: "schedule" },
];

export default function SideBar({ children, name, profile_img }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const parentBg = useColorModeValue("gray.500", "gray.900");
  const childBg = useColorModeValue("gray.400", "gray.800");
  const buttonBg = useColorModeValue("gray.500", "gray.700");
  const borderColor = useColorModeValue("black", "white");
  const titleBg = useColorModeValue("gray.800", "gray.700");

  return (
    <Box minH="100vh">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} name={name} profile_img={profile_img} />

      {/* content container */}
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("gray.900", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      color="white"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          anhemnhaminh
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((item) => (
        <NavItem
          key={item.name}
          name={item.name}
          icon={item.icon}
          onClick={() => {
            dispatch(setAuthState(item.name.toLowerCase()));
            onClose();
          }}
        >
          {item.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, name, children, ...rest }) => {
  return (
    <Flex
      align="center"
      p="4"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      _hover={{
        bg: useColorModeValue("gray.800", "gray.700"),
        color: useColorModeValue("white", "white"),
      }}
      {...rest}
    >
      {icon && <Icon mr="4" fontSize="16" as={icon} />}
      {children}
    </Flex>
  );
};

const MobileNav = ({ onOpen, name, profile_img, ...rest }) => {
  const handleSignOut = () => {
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_profile_img");
    Router.reload(window.location.pathname);
  };

  const currentPage = useSelector(selectAuthState);

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("gray.900", "gray.800")}
      color="white"
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between" }}
      pos="sticky"
      top="0"
      zIndex="1"
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
        border="1px solid white"
        _hover={{
          bg: "gray.700",
        }}
      />

      {/* page title */}
      <Box>
        <Text fontSize="1.5rem">{currentPage.toUpperCase()}</Text>
      </Box>

      <Text
        display={{ base: "none", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        anhemnhaminh
      </Text>

      <HStack spacing={{ base: "0", md: "6" }} justifyContent="space-around">
        <ColorModeSwicher light_hover="gray.700" dark_hover="gray.700" />
        {/* <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        /> */}
        <Flex alignItems={"center"} color={useColorModeValue("black", "white")}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar size={"sm"} src={profile_img} />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">{name}</Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
