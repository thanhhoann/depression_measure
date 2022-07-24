import { Heading, Center, Button, VStack, Text } from "@chakra-ui/react";

const Body = () => {
  return (
    <>
      <Center h="100%" color="white" p={2} align="center">
        <VStack spacing={4} align="stretch">
          <Heading size="2xl">Heading</Heading>
          <Text fontSize="1xl">Text</Text>
          <Button colorScheme="orange" variant="outline">
            <Heading size="1xl">Start the test</Heading>
          </Button>
        </VStack>
      </Center>
    </>
  );
};

export default Body;
