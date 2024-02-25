import {
  Box,
  Text,
  Input,
  InputGroup,
  Button,
  Flex,
  Stack,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import React, { useState } from "react";




const About = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();

  const [names, setNames] = useState("");
  const [password, setPassword] = useState("");

  const formCheck = () => {
    if (names.length < 3) {
      toastError("Name length -3");
    } else if (password.length < 6) {
      toastError("Password length -6");
    } else {
      const DataForm = {
        Your_Name: names,
        Your_Password: password,
      };
      alert(JSON.stringify(DataForm, (key, value)=> {
        if(key === 'Your_Password'){
          return Number(value)
        }
        return value
      }, 2))
      toastSucces("SuccesFull!");
    }

  };
  const toastError = (description) => {
    toast({
      title: "Xato",
      description: description,
      status: "error",
      duration: 4000,
      position: "bottom-right",
      isClosable: true,
      containerStyle: {
        margin: "0px 25px 25px 0px",
      },
    });
  };

  const toastSucces = (description) => {
    toast({
      title: "To'g'ri",
      description: description,
      status: "success",
      duration: 4000,
      position: "bottom-right",
      isClosable: true,
      containerStyle: {
        margin: "0px 25px 25px 0px",
      },
    });
  };

  return (
    <>
      <Box maxW={1350} h="90vh" m={"auto"}>
        <Flex w="100%" height="80vh" justify={"center"} align={"center"}>
          <Stack spacing={6}>
            <Input
              w={400}
              placeholder="Name ..."
              value={names}
              onChange={(e) => setNames(e.target.value)}
            />
            <InputGroup size="md">
              <Input
                w={400}
                type={show ? "text" : "password"}
                value={password}
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement pr={3}>
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button
              colorScheme="teal"
              margin={"auto"}
              width={130}
              onClick={formCheck}
            >
              Check
            </Button>
          </Stack>
        </Flex>
      </Box>
    </>
  );
};

export default About;
