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
          spacing="3rem"
          py="3rem"
          align="center"
          bg="white"
          textAlign="center"
          w="100%"
        >
          <Box>
            <Text px="1rem" fontSize="4xl">
              15 minutes of online assistance per day
            </Text>
            <Text fontSize="1xl">
              Start the test free of stress, anxiety, fatigue, burnout or
              depression
            </Text>
          </Box>
          {/* action button */}
          <Button
            colorScheme="white"
            variant="outline"
            w="12rem"
            h="3rem"
            onClick={onOpen}
            boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;"
            border="none"
          >
            START THE TEST
          </Button>
        </VStack>

        <SimpleGrid
          columns={{ md: 1, lg: 2 }}
          spacing="3rem"
          w="100%"
          color="white"
          py="5rem"
          px="2rem"
        >
          {features.map(({ icon, content }, index) => (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              key={index}
            >
              <Box w="5rem" h="5rem" pos="relative">
                <Image
                  src={icon}
                  width="8rem"
                  height="8rem"
                  layout="fill"
                  alt={icon}
                />
              </Box>
              <Text ml="3rem" maxWidth="20rem">
                {content}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>

      <SimpleGrid
        columns={{ md: 1, lg: 2 }}
        spacing="3rem"
        w="100%"
        bg="white"
        px="5rem"
        py="4rem"
        justifyItems="center"
      >
        <Box
          w="90%"
          p="2rem"
          borderRadius="1rem"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
        >
          <Text mb="2rem" fontSize="2rem">
            How does online assistance 15Minutes4Me.rom work?
          </Text>
          <Text>
            During the program you get to know yourself better, gradually
            distinguishing what helps you from what holds you back. You get
            questions that help you discover the solutions that helped you move
            forward. By increasing your self-confidence you learn to look for
            and find solutions yourself.
          </Text>
        </Box>
        <Box
          w="90%"
          p="2rem"
          borderRadius="1rem"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
        >
          <Text mb="2rem" fontSize="1.8rem">
            What does the program offer?
          </Text>
          <Text>
            Understanding and realizing that you can solve your problem is the
            first step towards a life with more enjoyment. The program asks you
            solution-focused questions so that, with the help of self-control
            exercises to stop negative thoughts, you will come to realize that
            your problems will be solved. This is done by means of, amongst
            others, video clips with exercises, charts for you and your GP,
            theoretical insights, etc.
          </Text>
        </Box>
      </SimpleGrid>

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
