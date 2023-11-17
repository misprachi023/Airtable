import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function CoverReso() {
  return (
    <Box
      justifyContent={{ base: "center", md: "space-around" }}
      display={"flex"}
      marginBottom={{ base: "0", md: "50px" }}
      fontSize={{ base: "16px", md: "20px" }}
      padding={{ base: "20px", md: "30px" }}
      marginLeft={{ base: "0", md: "100px" }}
      backgroundColor={"aliceblue"}
      marginTop={{ base: "20px", md: "80px" }}
      textAlign={{ base: 'center', md: 'left' }}
    >
      <Box display={"flex"}>
        <h1 style={{ color: "rgb(35, 35, 35, 35)", marginLeft: { base: "0", md: "30px" }, fontSize:"25px" }}>
          Looking for inspiration? <br />
          Start with these <br />
          resources.
        </h1>
        <p style={{ lineHeight: "25px", marginLeft: { base: "0", md: "150px" } }}>
          Stay one step ahead of the trends with the <br />
          latest insights, research, and best practices <br />
          for your teams.
        </p>
        <Link to='/resources'>
        <Button

          padding={{ base: "8px", md: "10px" }}
          border={"2px solid gray"}
          borderRadius={"10px"}
          fontSize={{ base: "14px", md: "18px" }}
          backgroundColor={"white"}
          color={"black"}
          width={{ base: "100%", md: "50%" }}
          fontWeight={"bold"}
          cursor={"pointer"}
          marginLeft={{ base: "0", md: "150px" }}
        >
          Explore resources
        </Button>
        </Link>
      </Box>
    </Box>
  );
}
