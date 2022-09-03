import React,{useState} from 'react'
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    Stack,
    InputLeftAddon,
    InputRightAddon,
    Box,
    Center,
  } from "@chakra-ui/react";
const AdminRegister = () => {
    const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div>
        <h1>Admin Register</h1>
      <Center>
        <Box bg="aquamarine" w="30%" p={4} marginTop={100} color="Black">
        
          <FormControl>
            <FormLabel>Full Name</FormLabel>
            <Input id="email" type="email" bg="white" />
          </FormControl>

          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input id="email" type="email" bg="white" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <Stack spacing={4}>
              <InputGroup>
                <InputLeftAddon children="+91" />
                <Input bg="white" type="tel" placeholder="phone number" />
              </InputGroup>
            </Stack>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="email">Password</FormLabel>
            <InputGroup size="md">
              <Input
                bg="white"
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="email">Confirm Password</FormLabel>
            <InputGroup size="md">
              <Input
                bg="white"
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <br/>
          <Button>Submit</Button>
        </Box>
      </Center>
    </div>
  )
}

export default AdminRegister