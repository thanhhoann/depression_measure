import React from "react";
import {
  Heading,
  Center,
  Button,
  VStack,
  Text,
  SimpleGrid,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import Image from "next/image";
import { useDisclosure } from "@chakra-ui/react";

const features = [
  {
    icon: "https://img.icons8.com/external-flaticons-flat-flat-icons/344/external-depression-cbd-oil-flaticons-flat-flat-icons.png",
    content:
      "Our online self-help program is personalized and developed by doctors based on scientific studies",
  },
  {
    icon: "https://img.icons8.com/stickers/344/tarot-cards.png",
    content:
      "We are online 7 days a week, 24 hours a day. You do not have to make an appointment. There are no waiting times. You log in when it suits you.",
  },
  {
    icon: "https://img.icons8.com/external-flaticons-flat-flat-icons/344/external-depression-isolation-flaticons-flat-flat-icons.png",
    content:
      "You help yourself from your seat at home, easily and quickly. So you save yourself from tiring journeys!",
  },
  {
    icon: "https://img.icons8.com/color/344/headache.png",
    content:
      "You can complete the program on your own or you can ask a friend or family member to assist you so they can help you.",
  },
];

const Body = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <VStack>
        <VStack
          spacing={4}
          py="24"
          align="center"
          color="white"
          textAlign="center"
        >
          <Text px="1rem" fontSize="4xl">
            15 minutes of online assistance per day
          </Text>
          <Text fontSize="1xl">
            free of stress, anxiety, fatigue, burnout or depression
          </Text>
          {/* action button */}
          <Button
            colorScheme="white"
            variant="outline"
            w="10rem"
            onClick={onOpen}
          >
            Start the test
          </Button>
        </VStack>
        <SimpleGrid
          columns={{ md: 1, lg: 2 }}
          spacing="3rem"
          w="100%"
          bg="white"
          p={5}
        >
          {features.map(({ icon, content }, index) => (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              key={index}
            >
              <Image
                src={icon}
                width="80rem"
                height="80rem"
                layout="fixed"
                alt={icon}
              />
              <Text ml="3rem" maxWidth="20rem">
                {content}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder="First name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Body;
