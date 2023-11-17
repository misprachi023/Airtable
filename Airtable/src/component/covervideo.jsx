import { Box, Button, Flex } from "@chakra-ui/react";
export default function coverVideo() {
  return (
    <Flex marginBottom={"100px"} marginTop={"100px"}>
    <Box
      display={"flex"}
      marginTop={"50px"}
      marginBottom={"70px"}
      borderRadius={"3rem"}
      height={"351px"}
      alignItems={"center"}
      backgroundColor={"aliceblue"}
      width={"95%"}
      margin={"auto"}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
    >
      <video
        objectFit={"cover"}
        width={"40%"}
        height={"500px"}
        backgroundColor={"aliceblue"}
        ratio={1}
        autoPlay
        loop
        mute
        controls={false}
        title=""
        src="https://videos.ctfassets.net/wl95ljfippl8/tiaWEJEBEnBbTqS3yPybM/7df0fbbcf05c333022fa938e61e249b8/TransformWorfklowsWithAI_2000x1125.mp4"
      ></video>

      <Box marginRight={"70px"} marginLeft={"100px"} width={"500px"}>
        <h4 style={{ fontSize: "25px", color: "gray" }}>In beta</h4>

        <h1 style={{ fontSize: "35px", color: "purple" }}>
          Transform workflows with the power of AI
        </h1>

        <p style={{ lineHeight: "25px", color: "rgb(60, 60, 60)" }}>
          With our native AI components, dynamic AI functionality is at your
          finguretips in minutes.
        </p>
        <Button
          padding={"10px"}
          border={"2px solid gray"}
          borderRadius={"10px"}
          fontSize={"18px"}
          backgroundColor={"white"}
          color={"black"}
          width={"45%"}
          fontWeight={"bold"}
          cursor={"pointer"}
        >
          Learn More
        </Button>
      </Box>
    </Box>
    </Flex>
  );
}
