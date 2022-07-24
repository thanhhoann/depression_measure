import { Grid, GridItem } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "../components/Footer";
import Body from "../components/Body";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Depression</title>
        <meta name="description" content="bla bla bla" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Grid
          templateAreas={`"header header"
                  "main main"
                  "footer footer"`}
          gridTemplateRows={"4rem 1fr 4rem"}
          gridTemplateColumns={"1fr 1fr"}
          gap="1"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <GridItem bg="orange.300" area={"header"}>
            <Header />
          </GridItem>
          <GridItem bg="gray.900" area={"main"}>
            <Body />
          </GridItem>
          <GridItem bg="blue.300" area={"footer"}>
            <Footer />
          </GridItem>
        </Grid>
      </main>
    </>
  );
}
