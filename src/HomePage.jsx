import { Button, Flex, useColorMode, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import About from "./components/About";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const HomePage = () => {
  const toast = useToast();
  const [shows, setShows] = useState(false);

  const handeleChangeIcon = () => {
    setShows(!shows);
    toggleColorMode();
  };

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex justify={"end"}>
        <Button p={6} mt={5} mr={5} onClick={handeleChangeIcon}>
          {shows ? <MoonIcon /> : <SunIcon />}
        </Button>{" "}
      </Flex>
      <About />
    </>
  );
};

export default HomePage;
