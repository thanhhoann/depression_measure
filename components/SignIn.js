import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Badge,
  HStack,
  PinInput,
  PinInputField,
  Text,
  Image,
  Box,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import getData from "../components/utils/getData";
import ColorModeSwicher from "./ColorModeSwitcher";
import ToastComponent from "./ToastComponent";

export default function SignIn(props) {
  const [userInput, setUserInput] = useState("");
  const people = getData();
  const [isAuth, setIsAuth] = useState(false);

  const handleSubmit = () => {
    const res = people.filter((person) => person.birth === userInput)[0];
    if (res) {
      setIsAuth(true);
      props.setUser({ name: res.name, profile_img: res.profile_img });
      setTimeout(() => {
        props.setIsSignedIn(true);
      }, 2000);
      localStorage.setItem("user_name", res.name);
      localStorage.setItem("user_profile_img", res.profile_img.src);
    }
  };

  const parentBg = useColorModeValue("gray.800", "gray.900");
  const childBg = useColorModeValue("gray.700", "gray.800");
  const titleBg = useColorModeValue("gray.800", "gray.700");
  const buttonBg = useColorModeValue("gray.600", "gray.700");

  return (
    <>
      <Flex
        minH={"100vh"}
        justify={"center"}
        bg={parentBg}
        px="1rem"
        flexDir="column"
        gap="1rem"
        align="center"
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg={childBg}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
          border="1px solid white"
        >
          <Center w="100%">
            <Image
              w="5rem"
              src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-brother-family-life-flaticons-lineal-color-flat-icons.png"
              alt="title"
            />
          </Center>
          {isAuth ? (
            <Flex justify="center">
              <Spinner
                thickness="4px"
                speed="0.25s"
                emptyColor="gray.200"
                color="black"
                size="xl"
              />
            </Flex>
          ) : (
            <Stack spacing={6} alignItems="center" color="white">
              <HStack>
                <PinInput
                  type="number"
                  size="lg"
                  onChange={(e) => setUserInput(e)}
                  border="1px solid black"
                  color="white"
                  mask
                >
                  <PinInputField borderColor="white" />
                  <PinInputField borderColor="white" />
                  <PinInputField borderColor="white" />
                  <PinInputField borderColor="white" />
                </PinInput>
              </HStack>

              <Button
                w="30%"
                bg={buttonBg}
                color="white"
                boxShadow="2xl"
                onClick={handleSubmit}
                border="1px solid white"
                //     _hover={{
                //       background: useColorModeValue("gray.400", "gray.600"),
                //     }}
              >
                Sign In
              </Button>
            </Stack>
          )}
        </Stack>
        <ColorModeSwicher light_hover="gray.700" dark_hover="gray.800" />
      </Flex>
    </>
  );
}
