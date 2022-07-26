import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Link,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Footer from "../components/Footer";
import Body from "../components/Body";
import Header from "../components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Depression</title>
        <meta name="description" content="bla bla bla" />
      </Head>

      <main>
        <Grid
          templateAreas={`"auth auth"
                  "header header"
                  "main main"
                  "footer footer"`}
          gridTemplateRows={"2rem 4rem 1fr 40rem"}
          gridTemplateColumns={"1fr 1fr"}
          gap="1"
          fontWeight="bold"
        >
          <GridItem
            bg="black"
            area={"auth"}
            color="white"
            position="sticky"
            top="0"
          >
            <Flex alignItems="center" justifyContent="center" h="100%">
              <Box>
                <Link>LOG IN</Link>
              </Box>
              <Box mx="1rem" h="100%">
                <Box h="10%" w="100%">
                  .
                </Box>
              </Box>
              <Box>
                <Link>CREATE ACCOUNT</Link>
              </Box>
            </Flex>
          </GridItem>
          <GridItem bg="white" area={"header"} position="sticky" top="2rem">
            <Header />
          </GridItem>
          <GridItem bg="black" area={"main"}>
            <Body />
          </GridItem>
          <GridItem bg="black" area={"footer"}>
            <Footer />
          </GridItem>
        </Grid>
      </main>
    </>
  );
}
