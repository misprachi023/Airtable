import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function CoverLast() {
  return (
    <Box
      display={"flex"}
      padding={{ base: "20px", md: "30px" }}
      justifyContent={'space-around'}
      backgroundColor={"aliceblue"}
      flexDirection={{ base: "column", md: "row" }}
      textAlign={{ base: 'center', md: 'left' }}
    >
      <h1>
        Teams at over 450,000 forward-thinking <br />
        organizations use Airtable every day. Join them.
      </h1>
      <Box
        padding={{ base: "20px", md: "40px" }}
        marginLeft={{ base: "0", md: "20rem" }}
      >
        <Link to="/SignUp">
        <Button
          display={"block"}
          width={{ base: "100%", md: "12rem" }}
          height={"3rem"}
          borderColor={"teal"}
          fontWeight={"bold"}
          border={"none"}
          padding={"7px"}
          margin={"5px"}
          fontSize={"15px"}
          variant="outline"
          backgroundColor={"#254fad"}
          borderRadius={".7rem"}
          color={"white"}
        >
          Sign up for free
        </Button>
        </Link>
        <Link to='/sales'>
        <Button 
          width={{ base: "100%", md: "12rem" }}
          height={"3rem"}
          fontWeight={"bold"}
          padding={"5px"}
          margin={"8px"}
          fontSize={"1rem"}
          border={"1px solid gray"}
          backgroundColor={"white"}
          borderRadius={".7rem"}
          color={"black"}
        >
          Contact sales
        </Button>
        </Link>
      </Box>
    </Box>
  );
}
