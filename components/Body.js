import {
  Heading,
  Center,
  Button,
  VStack,
  Text,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";

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
          <Text fontSize="4xl">15 minutes of online assistance per day</Text>
          <Text fontSize="1xl">
            free of stress, anxiety, fatigue, burnout or depression
          </Text>
          <Button colorScheme="orange" variant="outline" w="10rem">
            <Heading size="1xl">Start the test</Heading>
          </Button>
        </VStack>
        <SimpleGrid columns={2} spacing="3rem" w="100%" bg="white" p={5}>
          {features.map(({ icon, content }, index) => (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              key={index}
            >
              <Image
                src={icon}
                width="50rem"
                height="50rem"
                layout="fixed"
                alt={icon}
              />
              <Text ml={4} maxWidth="20rem">
                {content}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </>
  );
};

export default Body;
