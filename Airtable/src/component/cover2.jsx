import React from "react";
import { Box, Button } from "@chakra-ui/react";

export default function Read() {
  return (
    <Box
      display={"flex"}
      flexDirection={{ base: "column", md: "row" }}
      padding={"15px"}
      margin={{ base: "20px", md: "50px" }}
      fontSize={{ base: "16px", md: "20px" }}
      marginLeft={{ base: "0", md: "100px" }}
      marginTop={{ base: "50px", md: "80px" }}
      justifyContent={{ base: 'center', md: 'space-around' }}
      alignItems={{ base: 'center', md: 'flex-start' }}
      textAlign={{ base: 'center', md: 'left' }}
    >
      <h1 style={{ color: "rgb(35 , 35, 35, 35)", marginBottom: '20px' }}>Results you can measure</h1>
      <Box>
        <p style={{ lineHeight: "25px", marginBottom: '20px' }}>
          Find out how customers from all kinds of <br />
          industries achieve amazing outcomes with <br />
          Airtable.
        </p>
        <Button
          padding={{ base: "8px", md: "10px" }}
          border={"2px solid gray"}
          borderRadius={"10px"}
          fontSize={{ base: "20px", md: "15px" }}
          backgroundColor={"#254fad "}
          color={"white"}
          width={{ base: "100%", md: "47%" }}
          fontWeight={"bold"}
          cursor={"pointer"}
          marginLeft={{ base: "0", md: "150px" }}
        >
          Read Customer Stories
        </Button>
      </Box>
    </Box>
  );
}
