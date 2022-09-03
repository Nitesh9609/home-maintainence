import React,{useState} from "react";
import { Link } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";

const Admin = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div>
        {/* <h1>Hii Admin</h1> */}
      <FormControl>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input id="email" type="email" bg="white" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel>Password</FormLabel>
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
      
      <br />
      <Button>Submit</Button><br/>
      <p>
        Dont Have an Account?<Link to="/adminRegister"> Sign UP</Link>
      </p>
    </div>
  );
};

export default Admin;
