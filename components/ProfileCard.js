import React from "react";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  useClipboard,
  Spinner,
  SimpleGrid,
} from "@chakra-ui/react";
import { FiCopy } from "react-icons/fi";

export default function ProfileCard({
  name,
  title,
  profile_img,
  background_img,
  phone_number,
  bank_name,
  bank_account,
}) {
  const buttons = [
    { content: phone_number, content_name: "Phone Number" },
    { content: bank_account, content_name: "Bank Account" },
  ];

  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
      mb="2rem"
    >
      <Image
        h={"120px"}
        w={"full"}
        src={background_img.src}
        objectFit={"cover"}
        alt=""
      />
      <Flex justify={"center"} mt={-12}>
        <Avatar
          size={"xl"}
          src={profile_img.src}
          alt={"Author"}
          css={{
            border: "2px solid white",
          }}
        />
      </Flex>

      <Box p={6}>
        <Stack spacing={0} align={"center"} mb={5}>
          <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
            {name}
          </Heading>
          {/* <Text color={"gray.500"}>{title}</Text> */}
        </Stack>

        <Stack direction={"row"} justify={"center"} spacing={6}>
          <Stack spacing={0} align={"center"} textAlign="center">
            <Text fontWeight={600}>{phone_number}</Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              Phone Number
            </Text>
          </Stack>
          <Stack spacing={0} align={"center"}>
            <Text fontWeight={600}>{bank_account}</Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              {bank_name}
            </Text>
          </Stack>
        </Stack>

        <SimpleGrid mt="2rem" columns={{ sm: 1, md: 2 }} gap="0.5rem">
          {buttons.map((button, index) => (
            <CopyButton
              content={button.content}
              content_name={button.content_name}
              key={index}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

const CopyButton = ({ content, content_name }) => {
  const [value, setValue] = React.useState("");
  const { hasCopied, onCopy } = useClipboard(value);

  const handleCopy = (field) => {
    for (let i = 0; i < 2; i++) {
      setValue(field);
      onCopy();
    }
  };

  return (
    <Button
      w={"full"}
      bg={useColorModeValue("#151f21", "gray.900")}
      color="white"
      rounded={"md"}
      _hover={{
        transform: "translateY(-2px)",
        boxShadow: "lg",
      }}
      onClick={() => handleCopy(content)}
    >
      <Flex gap="0.5rem">
        <FiCopy /> {content_name}
      </Flex>
    </Button>
  );
};
