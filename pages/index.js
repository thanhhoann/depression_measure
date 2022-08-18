import React, { useEffect } from "react";
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Link,
  Text,
  Button,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import Head from "next/head";
import Footer from "../components/Footer";
import Body from "../components/Body";
import Header from "../components/Header";
import Image from "next/image";
import SideBar from "../components/SideBar";
import MainLayout from "../components/MainLayout";
import Dashboard from "../components/Dashboard";
import SignIn from "../components/SignIn";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Schedule from "./schedule";
import { selectAuthState } from "../store/authSlice";

export default function Home() {
  const router = useRouter();
  const page = useSelector(selectAuthState);

  return (
    <>
      <Head>
        <title>anhemnhaminh</title>
        <meta name="description" content="bla bla bla" />
      </Head>

      <main>
        {page === "home" && <Dashboard />}
        {page === "schedule" && <Schedule />}
      </main>
    </>
  );
}
