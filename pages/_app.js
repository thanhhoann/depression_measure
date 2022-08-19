import React, { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import SideBar from "../components/SideBar";
import SignIn from "../components/SignIn";
import { Router } from "next/router";
import { wrapper } from "../store/store";
import { useSelector } from "react-redux";
import { selectAuthState } from "../store/authSlice";
import { Text } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = React.useState({ name: "", profile_img: "" });
  const [isSignedIn, setIsSignedIn] = React.useState(false);

  useEffect(() => {
    if (localStorage.getItem("user_name")) {
      setIsSignedIn(true);
      setUser({
        name: localStorage.getItem("user_name"),
        profile_img: localStorage.getItem("user_profile_img"),
      });
    }
  }, []);

  return (
    <ChakraProvider>
      <>
        {isSignedIn ? (
          <SideBar name={user.name} profile_img={user.profile_img}>
            <Component {...pageProps} />
          </SideBar>
        ) : (
          <SignIn setIsSignedIn={setIsSignedIn} setUser={setUser} />
        )}
      </>
    </ChakraProvider>
  );
}

export default wrapper.withRedux(MyApp);
